import AssetTopController from "../../components/AssetTopController/AssetTopController";
import Product from "../../components/Product/Product";
import useRealEstate from "../../pageUtils/useRealEstate";




export default function RealEstate(){
    const {products} = useRealEstate()
    return(
        <div className="flex flex-col gap-4 py-4 px-2">
            <AssetTopController />
            <div className="flex flex-col gap-4">
                {products.map(product=><Product key={product._id} {...product} />)}
            </div>
        </div>
    )
}