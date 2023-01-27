import { LitumbaHubFormOptions, servicesFormOptions } from "../../assets/constant";
import Button from "../../components/Button/Button";
import useLitumbaHubFilters from "../../pageUtils/useLitumbaHubFilters";



export default function LitumbaHubFilters() {
    const { register, handleSubmit, search } = useLitumbaHubFilters()
    return (
        <div className="shadow-comp_lg rounded-lg py-4 px-2 mx-2 flex flex-col gap-4 mt-4" >
            <div className="flex flex-col gap-2">
                <div className="font-bold">Pricing(frs cfa)</div>
                <select id="" className="text-input p-0" {...register("price")}>
                    <option value=""></option>
                    {LitumbaHubFormOptions.prices.map(price => <option key={price} value={price} >{price}</option>)}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Niche</div>
                <select id="" className="text-input p-0" {...register("niche")}>
                    <option value=""></option>
                    {LitumbaHubFormOptions.niches.map(niches => <option key={niches} value={niches} >{niches}</option>)}
                </select>
            </div>
            <Button label="Search" onClick={handleSubmit(search)} />
        </div>
    )
}