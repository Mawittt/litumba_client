import { BusinessFormOptions } from "../../assets/constant"
import Button from "../../components/Button/Button"
import useBusinessFilters from "../../pageUtils/useBusinessFilters"


export default function BusinessFilters() {
    const { register, handleSubmit, search } = useBusinessFilters()

    return (
        <div className="shadow-comp_lg rounded-lg py-4 px-2 mx-2 flex flex-col gap-4 mx-4 my-6 bg-white">
            <div className="flex flex-col gap-2">
                <div className="font-bold">Niche</div>
                <select id="" className="text-input p-0" {...register("niche")}>
                    <option value=""></option>
                    {BusinessFormOptions.niches.map(niche => <option value={niche} key={niche}>{niche}</option>)}
                </select>
            </div>
            <Button label="Search" onClick={handleSubmit(search)} />
        </div>
    )
}