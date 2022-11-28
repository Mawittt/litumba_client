import AssetTopController from "../../../components/AssetTopController/AssetTopController";
import Product from "../../../components/Product/Product";
import ProductServiceToggle from "../../../components/ProductServiceToggle/ProductServiceToggle";
import useProducts from "../../../pageUtils/useProducts";




export default function Products(){
    const {products} = useProducts()
    return (
        <div className="py-4 px-2 flex flex-col gap-4" >
            <AssetTopController />
            <ProductServiceToggle />
            <div className=" flex flex-col gap-2 mt-4">
                {products.map(product=><Product key={product._id} {...product}/>)}
            </div>
        </div>
    )
}