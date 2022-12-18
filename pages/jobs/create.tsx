import { ErrorMessage } from "@hookform/error-message";
import { jobFilterFormOptions as jobCreateFormOptions } from "../../assets/constant";
import Button from "../../components/Button/Button";
import useJobCreation from "../../pageUtils/useJobCreation";





export default function JobCreation(){
    const {register, handleSubmit, errors , createJob} = useJobCreation()

    return(
        <form className="shadow-comp_lg rounded-lg py-4 px-2 mx-2 flex flex-col gap-4 my-4" onSubmit={handleSubmit(createJob)}>
            <h3 className="font-bold text-2xl">Create a job</h3>
            <p>please fill the below form and click the &quot;Create Job&quot; button to create a new job.</p>
            <div className="flex flex-col gap-1">
                <div className="font-bold">Job title</div>
                <input type="text" className="text-input" {...register("title", {required : "The title is required"})} />
                <ErrorMessage name="title" errors={errors} />
            </div>
            <div className="flex flex-col gap-1">
                <div className="font-bold">Price</div>
                <select className="text-input p-1" {...register("price",{required : "The price is required"})} >
                    <option value=""></option>
                    {jobCreateFormOptions.price.map(price=><option value={price} key={price}>{price}</option>)}
                </select>
                <ErrorMessage name="price" errors={errors} />
            </div>
            <div className="flex flex-col gap-1">
                <div className="font-bold">Description</div>
                <textarea className="text-input h-[100px] rounded-lg" {...register("description",{required : "The description is required"})} />
                <ErrorMessage name={"description"} errors={errors} />
            </div>
            <div className="flex flex-col gap-1">
                <div className="font-bold">Niche</div>
                <select id="" className="text-input p-0" {...register("niche",{required : "The niche is required"})} >
                    <option value=""></option>
                    {jobCreateFormOptions.niche.map(niche=><option value={niche} key={niche}>{niche}</option>)}
                </select>
                <ErrorMessage name="niche" errors={errors} />
            </div>
            <div className="flex flex-col gap-1">
                <div className="font-bold">Urgency</div>
                <select id="" className="text-input p-0" {...register("urgency",{required : "The urgency is required"})} >
                    <option value="one"></option>
                    {jobCreateFormOptions.urgency.map(urgency=><option value={urgency} key={urgency}>{urgency}</option>)}
                </select>
                <ErrorMessage name="urgency" errors={errors} />
            </div>
            <div className="flex flex-col gap-1">
                <div className="font-bold">Country</div>
                <input type="text" className="text-input" {...register("country", {required : "the country is required"})}/>
                <ErrorMessage name="country" errors={errors} />
            </div>
            <div className="flex flex-col gap-1">
                <div className="font-bold">City</div>
                <input type="text" className="text-input" {...register("city",{required : "The City is required"})} />
                <ErrorMessage name="city" errors={errors} />
            </div>
            <div className="flex flex-col gap-1">
                <div className="font-bold">Expertise</div>
                <select  id="" className="text-input p-0" {...register("expertise",{required : "The expertise is required"})}>
                    <option value="one"></option>
                    {jobCreateFormOptions.expertise.map(expertise=><option value={expertise} key={expertise}>{expertise}</option>)}
                </select>
                <ErrorMessage name="expertise" errors={errors} />
            </div>
            <div className="flex flex-col gap-1">
                <div className="font-bold">Schedule</div>
                <select id="" className="text-input p-0" {...register("schedule", {required : "The schedule is required"})}>
                    <option value="one">one</option>
                    {jobCreateFormOptions.schedule.map(schedule=><option value={schedule} key={schedule}>{schedule}</option>)}
                </select>
                <ErrorMessage name="schedule" errors={errors} />
            </div>
            <Button label="Create Job" onClick={handleSubmit(createJob)}/>
        </form>
    )
}