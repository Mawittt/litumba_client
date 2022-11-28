import Button from "../../components/Button/Button";





export default function JobCreation(){


    return(
        <div className="shadow-comp_lg rounded-lg py-4 px-2 mx-2 flex flex-col gap-4">
            <h3 className="font-bold text-2xl">Create a job</h3>
            <p>please fill the below form and click the &quot;Create Job&quot; button to create a new job.</p>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Job title</div>
                <input type="text" className="text-input" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Price</div>
                <input type="text" className="text-input" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Description</div>
                <textarea className="text-input h-[100px] rounded-lg" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Niche</div>
                <select name="niche" id="" className="text-input p-0">
                    <option value="one">one</option>
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Urgency</div>
                <select name="niche" id="" className="text-input p-0">
                    <option value="one">one</option>
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Country</div>
                <input type="text" className="text-input" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">City</div>
                <input type="text" className="text-input" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Expertise</div>
                <select name="niche" id="" className="text-input p-0">
                    <option value="one">one</option>
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Schedule</div>
                <select name="niche" id="" className="text-input p-0">
                    <option value="one">one</option>
                </select>
            </div>
            <Button label="Create Job" />
        </div>
    )
}