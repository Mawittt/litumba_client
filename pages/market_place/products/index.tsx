import Loader from "../../../assets/Loader";
import AssetTopController from "../../../components/AssetTopController/AssetTopController";
import Product from "../../../components/Product/Product";
import ProductServiceToggle from "../../../components/ProductServiceToggle/ProductServiceToggle";
import useProducts from "../../../pageUtils/useProducts";
import { cn } from "../../../utils/fn";




export default function Products() {
    const { products, searchProduct, isLoading, openNext, openPrev, canNext, canPrev } = useProducts()
    return (
        <div className="py-4 px-2 flex flex-col gap-4" >
            <AssetTopController searchFunction={searchProduct} />
            <ProductServiceToggle />
            <div className=" flex flex-col gap-2 mt-4">
                {isLoading ? <div className="flex justify-center"><Loader /></div> : products.map(product => <Product key={product._id} {...product} />)}
            </div>
            {!!products.length && <div className="flex justify-center shadow-comp_lg">
                <div onClick={openPrev} className={cn("m-4 w-[50px] aspect-square rounded-full text-white flex justify-center items-center shadow-icon", canPrev() ? "bg-blue-500 cursor-pointer" : "bg-blue-300 cursor-not-allowed")}>Prev</div>
                <div onClick={openNext} className={cn("m-4 w-[50px] aspect-square rounded-full text-white flex justify-center items-center shadow-icon", canNext() ? "bg-blue-500 cursor-pointer" : "bg-blue-300 cursor-not-allowed")}>Next</div>
            </div>}
        </div>
    )
}