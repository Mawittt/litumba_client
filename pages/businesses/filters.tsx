import Button from "../../components/Button/Button"


export default function JobFilters() {


    return (
        <div className="shadow-comp_lg rounded-lg py-4 px-2 mx-2 flex flex-col gap-4">
           
            <div className="flex flex-col gap-2">
                <div className="font-bold">Niche</div>
                <select name="niche" id="" className="text-input p-0">
                    <option value="one">web marketing</option>
                </select>
            </div>
    
            <Button label="Search" />
        </div>
    )
}