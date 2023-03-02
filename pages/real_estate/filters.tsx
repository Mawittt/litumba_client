import { RealEstateFormOptions } from "../../assets/constant";
import Button from "../../components/Button/Button";
import useRealEstateFilters from "../../pageUtils/useRealEstateFilters";


export default function RealEstateFilters() {
    const { register, handleSubmit, search } = useRealEstateFilters()

    return (
        <div className="shadow-comp_lg rounded-lg py-4 px-2 mx-4 flex flex-col gap-4 my-6 bg-white">
            <div className="flex flex-col gap-2">
                <div className="font-bold">Price</div>
                <select id="" className="text-input p-0" {...register("pricing")}>
                    <option value=""></option>
                    {RealEstateFormOptions.prices.map(price => <option value={price} key={price} >{price}</option>)}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">type</div>
                <select id="" className="text-input p-0" {...register("type")}>
                    <option value=""></option>
                    {RealEstateFormOptions.types.map(price => <option value={price} key={price} >{price}</option>)}
                </select>
            </div>
            <Button label="Search" onClick={handleSubmit(search)} />
        </div>

    )
}