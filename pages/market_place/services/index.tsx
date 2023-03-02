import Loader from "../../../assets/Loader"
import AssetTopController from "../../../components/AssetTopController/AssetTopController"
import ProductServiceToggle from "../../../components/ProductServiceToggle/ProductServiceToggle"
import Service from "../../../components/Service/Service"
import useServices from "../../../pageUtils/useServices"
import { cn } from "../../../utils/fn"




export default function Services() {
    const { services, searchServices, openNext, openPrev, canNext, canPrev, isLoading, isRefetching } = useServices()
    return (
        <div className="flex flex-col gap-4 py-4 px-2">
            <AssetTopController searchFunction={searchServices} />
            <ProductServiceToggle />
            <div className="flex flex-col gap-4 ">
                {!!services.length && isRefetching && <div className="flex justify-center"><Loader /></div>}
                {isLoading ? <div className="flex flex-col items-center">
                    <Loader />
                    <p className="mt-2">Loading Services</p>
                </div> : services.map(service => <Service key={service._id} {...service} />)}
            </div>
            {!!services.length && <div className="flex justify-center shadow-comp_lg bg-white">
                <div onClick={openPrev} className={cn("m-4 w-[50px] aspect-square rounded-full text-white flex justify-center items-center shadow-icon", canPrev() ? "bg-blue-500 cursor-pointer" : "bg-blue-300 cursor-not-allowed")}>Prev</div>
                <div onClick={openNext} className={cn("m-4 w-[50px] aspect-square rounded-full text-white flex justify-center items-center shadow-icon", canNext() ? "bg-blue-500 cursor-pointer" : "bg-blue-300 cursor-not-allowed")}>Next</div>
            </div>}
        </div>
    )
}