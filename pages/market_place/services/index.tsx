import AssetTopController from "../../../components/AssetTopController/AssetTopController"
import ProductServiceToggle from "../../../components/ProductServiceToggle/ProductServiceToggle"
import Service from "../../../components/Service/Service"
import useServices from "../../../pageUtils/useServices"




export default function Services(){
    const {services , searchServices} = useServices()
    return (
        <div className="flex flex-col gap-4 py-4 px-2">
            <AssetTopController searchFunction={searchServices} />
            <ProductServiceToggle />
            <div className="flex flex-col gap-4">
                {services.map(service=><Service key={service._id} {...service} />)}
            </div>
        </div>
    )
}