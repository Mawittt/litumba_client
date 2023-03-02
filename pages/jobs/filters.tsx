import { jobFilterFormOptions } from "../../assets/constant"
import Button from "../../components/Button/Button"
import useJobFilters from "../../pageUtils/useJobfilters"


export default function JobFilters() {
    const { register, handleSubmit, filterJobs, watch } = useJobFilters()

    return (
        <div className="shadow-comp_lg rounded-lg py-6 px-4 mx-4 flex flex-col gap-4 mt-6 bg-white">
            <div className="flex flex-col gap-2">
                <div className="font-bold">Pricing</div>
                <select value={watch("pricing")} id="pricing" className="text-input p-0" {...register("pricing")}>
                    <option value=""></option>
                    {jobFilterFormOptions.price.map(price => <option value={price} key={price}>{price}</option>)}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Urgency</div>
                <select id="urgency" className="text-input p-0" {...register("urgency")} value={watch("urgency")}>
                    <option value=""></option>
                    {jobFilterFormOptions.urgency.map(urgency => <option value={urgency} key={urgency}>{urgency}</option>)}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Niche</div>
                <select id="niche" className="text-input p-0" {...register("niche")} value={watch("niche")}>
                    <option value=""></option>
                    {jobFilterFormOptions.niche.map(niche => <option value={niche} key={niche}>{niche}</option>)}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Expertise</div>
                <select id="" className="text-input p-0" {...register("expertise")} value={watch("expertise")}>
                    <option value=""></option>
                    {jobFilterFormOptions.expertise.map(expertise => <option value={expertise} key={expertise}>{expertise}</option>)}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Schedule</div>
                <select id="" className="text-input p-0" {...register("schedule")} value={watch("schedule")}>
                    <option value=""></option>
                    {jobFilterFormOptions.schedule.map(schedule => <option value={schedule} key={schedule}>{schedule}</option>)}
                </select>
            </div>
            <Button label="Search" onClick={handleSubmit(filterJobs)} />
        </div>
    )
}