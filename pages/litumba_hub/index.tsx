import Loader from "../../assets/Loader"
import AssetTopController from "../../components/AssetTopController/AssetTopController"
import Service from "../../components/Service/Service"
import useLitumbaHub from "../../pageUtils/useLitumbaHub"
import { cn } from "../../utils/fn"





export default function LitumbaHub() {
    const { isRefetching, isSuccess, services, searchLitumbaHub, isLoading, canNext, canPrev, openNext, openPrev } = useLitumbaHub()
    return (
        <div className="flex flex-col gap-4 px-2 text-lg mx-4 my-6">

            <div className=" font-bold text-blue-500 py-4 px-2 rounded-lg shadow-comp_lg bg-white">
                Litumba hub is a collection of services  offered by organizations or individuals verified and aprooved by the Litumba platforn
            </div>
            <AssetTopController searchFunction={searchLitumbaHub} />
            {isSuccess && isRefetching && <div className="flex justify-center"><Loader /></div>}
            {
                isLoading ? <div className="flex flex-col items-center mt-6">
                    <Loader />
                    <p className="mt-2">Loading Litumba hubs</p>
                </div> :
                    <>
                        <div className="flex flex-col gap-4">
                            {services.map(service => <Service key={service._id} {...service} />)}
                        </div>
                    </>}
            {!!services.length && <div className="flex justify-center shadow-comp_lg  bg-white">
                <div onClick={openPrev} className={cn("m-4 w-[50px] aspect-square rounded-full text-white flex justify-center items-center shadow-icon", canPrev() ? "bg-blue-500 cursor-pointer" : "bg-blue-300 cursor-not-allowed")}>Prev</div>
                <div onClick={openNext} className={cn("m-4 w-[50px] aspect-square rounded-full text-white flex justify-center items-center shadow-icon", canNext() ? "bg-blue-500 cursor-pointer" : "bg-blue-300 cursor-not-allowed")}>Next</div>
            </div>}
        </div>
    )
}