import RealEstate  from "../../components/RealEstate/RealEstate";
import AssetTopController from "../../components/AssetTopController/AssetTopController";
import useRealEstate from "../../pageUtils/useRealEstate";


export default function RealEstates(){
    const {products , searchRealEstate} = useRealEstate()
    return(
        <div className="flex flex-col gap-4 py-4 px-2">
            <AssetTopController searchFunction={searchRealEstate} />
            <div className="flex flex-col gap-4">
                {products.map(product=><RealEstate key={product._id} {...product} />)}
            </div>
        </div>
    )
}