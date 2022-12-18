import { Value } from "sass";
import { jobFilterFormOptions as jobUpdateFormOptions } from "../../assets/constant";
import Button from "../../components/Button/Button";
import useJobUpdate from "../../pageUtils/useJobUpdate";





export default function JobUpdating(){
    const {register, handleSubmit, updateJob , watch} = useJobUpdate()

    return(
        <form className="shadow-comp_lg rounded-lg py-4 px-2 mx-2 flex flex-col gap-4 my-4">
            <h3 className="font-bold text-2xl">Update this job post</h3>
            <p>please fill the below form and click the &quot;Create Job&quot; button to create a new job.</p>
            <div className="flex flex-col gap-1">
                <div className="font-bold">Job title</div>
                <input type="text" className="text-input" {...register("title")} value={watch("title")} />
            </div>
            <div className="flex flex-col gap-1">
                <div className="font-bold">Price</div>
                <select className="text-input p-1" {...register("price")} value={watch("price")}>
                    <option value=""></option>
                    {jobUpdateFormOptions.price.map(price=><option value={price} key={price}>{price}</option>)}
                </select>
            </div>
            <div className="flex flex-col gap-1">
                <div className="font-bold">Description</div>
                <textarea className="text-input h-[100px] rounded-lg" {...register("description")} value={watch("description")} />
            </div>
            <div className="flex flex-col gap-1">
                <div className="font-bold">Niche</div>
                <select id="" className="text-input p-0" {...register("niche")} value={watch("niche")}>
                    <option value=""></option>
                    {jobUpdateFormOptions.niche.map(niche=><option value={niche} key={niche}>{niche}</option>)}
                </select>
            </div>
            <div className="flex flex-col gap-1">
                <div className="font-bold">Urgency</div>
                <select id="" className="text-input p-0" {...register("urgency")} value={watch("urgency")}>
                    <option value=""></option>
                    {jobUpdateFormOptions.urgency.map(urgency=><option value={urgency} key={urgency}>{urgency}</option>)}
                </select>
            </div>
            <div className="flex flex-col gap-1">
                <div className="font-bold">Country</div>
                <input type="text" className="text-input" {...register("country")} value={watch("country")} />
            </div>
            <div className="flex flex-col gap-1">
                <div className="font-bold">City</div>
                <input type="text" className="text-input" {...register("city")} value={watch("city")} />
            </div>
            <div className="flex flex-col gap-1">
                <div className="font-bold">Expertise</div>
                <select id="" className="text-input p-0" {...register("expertise")} value={watch("expertise")}>
                    <option value=""></option>
                    {jobUpdateFormOptions.expertise.map(expertise=><option value={expertise} key={expertise}>{expertise}</option>)}
                </select>
            </div>
            <div className="flex flex-col gap-1">
                <div className="font-bold">Schedule</div>
                <select id="" className="text-input p-0" {...register("schedule")} value={watch("schedule")}>
                    <option value=""></option>
                    {jobUpdateFormOptions.schedule.map(schedule=><option value={schedule} key={schedule}>{schedule}</option>)}
                </select>
            </div>
            <Button label="Update Job" onClick={handleSubmit(updateJob)} />
        </form>
    )
}