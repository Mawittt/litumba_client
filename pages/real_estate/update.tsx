import { AddImageIcon } from "../../assets/icons";
import Button from "../../components/Button/Button";





export default function CulturalGroupCreation() {

    return (
        <div className="shadow-comp_lg rounded-lg py-4 px-2 mx-2 flex flex-col gap-4">
            <p>please fill the below form and click the &quot;Create Job&quot; button to create a new job.</p>
            <div>
                <Button label="add profile" icon={<AddImageIcon />} />
            </div>
            <div>
                <Button label="add Cover" icon={<AddImageIcon />} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Name</div>
                <input type="text" className="text-input" />
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
                <div className="font-bold">Description</div>
                <textarea className="text-input h-[100px] rounded-lg" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Number of members</div>
                <input type="text" className="text-input" />
            </div>
            <Button label="Update group" />
        </div>
    )
}