import { productFormOptions } from "../../../assets/constant";
import Button from "../../../components/Button/Button";
import useProductFilters from "../../../pageUtils/useProductFilters";



export default function ProductFilters() {
    const { register, handleSubmit, search } = useProductFilters()

    return (
        <div className="shadow-comp_lg rounded-lg py-4 px-2 mx-4 flex flex-col gap-4 my-6 bg-white">
            <div className="flex flex-col gap-2">
                <div className="font-bold">Price</div>
                <select id="" className="text-input p-0" {...register("pricing")}>
                    <option value=""></option>
                    {productFormOptions.prices.map(price => <option value={price} key={price} >{price}</option>)}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Niche</div>
                <select id="" className="text-input p-0" {...register("niche")}>
                    <option value=""></option>
                    {productFormOptions.niches.map(niche => <option value={niche} key={niche} >{niche}</option>)}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">quantity</div>
                <select className="text-input p-0" {...register("quantity")} >
                    <option value="" ></option>
                    {productFormOptions.quantities.map(quantity => <option value={quantity} key={quantity} >{quantity}</option>)}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">brand</div>
                <input type="text" className="text-input" {...register("brand")} />
            </div>

            <Button label="Search" onClick={handleSubmit(search)} />
        </div>
    )
}