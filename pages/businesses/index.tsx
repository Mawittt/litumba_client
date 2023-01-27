import Loader from "../../assets/Loader";
import AssetTopController from "../../components/AssetTopController/AssetTopController";
import Business from "../../components/Business/Business";
import useBusinesses from "../../pageUtils/useBusiness";
import { cn } from "../../utils/fn";



export default function Businesses() {
    const { businesses, searchBusiness, openNext, openPrev, canNext, canPrev, isFetching, isLoading } = useBusinesses()
    return (
        <div className="py-4 px-2">
            <AssetTopController searchFunction={searchBusiness} />
            <div>
                {isLoading ? <div className=" flex flex-col items-center mt-6">
                    <Loader />
                    <p className="mt-2">Loading businesses</p>
                </div> :
                    businesses.map(business => <Business key={business._id} {...business} />)
                }
            </div>
            {!!businesses.length && <div className="flex justify-center shadow-comp_lg">
                <div onClick={openPrev} className={cn("m-4 w-[50px] aspect-square rounded-full text-white flex justify-center items-center shadow-icon", canPrev() ? "bg-blue-500 cursor-pointer" : "bg-blue-300 cursor-not-allowed")}>Prev</div>
                <div onClick={openNext} className={cn("m-4 w-[50px] aspect-square rounded-full text-white flex justify-center items-center shadow-icon", canNext() ? "bg-blue-500 cursor-pointer" : "bg-blue-300 cursor-not-allowed")}>Next</div>
            </div>}
        </div>
    )
}