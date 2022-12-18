import AssetTopController from "../../components/AssetTopController/AssetTopController"
import Service from "../../components/Service/Service"
import useLitumbaHub from "../../pageUtils/useLitumbaHub"





export default function LitumbaHub(){
    const {services , searchLitumbaHub } = useLitumbaHub()
    return (
        <div className="flex flex-col gap-4 py-4 px-2 text-lg">
            <div className=" font-bold text-blue-500 py-4 px-2 rounded-lg shadow-comp_lg">
            Litumba hub is a collection of services  offered by organizations or individuals verified and aprooved by the Litumba platforn
            </div>
            <AssetTopController searchFunction={searchLitumbaHub} />
            <div className="flex flex-col gap-4">
                {services.map(service=><Service key={service._id} {...service} />)}
            </div>
        </div>
    )
}