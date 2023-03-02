import RealEstate from "../../components/RealEstate/RealEstate";
import AssetTopController from "../../components/AssetTopController/AssetTopController";
import useRealEstates from "../../pageUtils/useRealEstates";
import Loader from "../../assets/Loader";
import { cn } from "../../utils/fn";


export default function RealEstates() {
    const { isRefetching, isSuccess, isLoading, realEstates, searchRealEstate, canNext, canPrev, openNext, openPrev } = useRealEstates()
    return (
        <div className="flex flex-col gap-4  my-6 mx-4 border-solid ">
            <AssetTopController searchFunction={searchRealEstate} />
            {!isLoading && isRefetching && <div className="flex justify-center"><Loader /></div>}
            {isLoading ? <div className="flex flex-col items-center mt-6" >
                <Loader />
                <p className="mt-2">
                    Loading realEstates</p>
            </div> : <div className="flex flex-col gap-4">
                {realEstates.map(realEstate => <RealEstate key={realEstate._id} {...realEstate} />)}
            </div>}
            {!!realEstates.length && <div className="flex justify-center shadow-comp_lg bg-white">
                <div onClick={openPrev} className={cn("m-4 w-[50px] aspect-square rounded-full text-white flex justify-center items-center shadow-icon", canPrev() ? "bg-blue-500 cursor-pointer" : "bg-blue-300 cursor-not-allowed")}>Prev</div>
                <div onClick={openNext} className={cn("m-4 w-[50px] aspect-square rounded-full text-white flex justify-center items-center shadow-icon", canNext() ? "bg-blue-500 cursor-pointer" : "bg-blue-300 cursor-not-allowed")}>Next</div>
            </div>}
        </div>
    )
}