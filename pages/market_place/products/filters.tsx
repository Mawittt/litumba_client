import Button from "../../../components/Button/Button";



export default function JobFilters() {

    return (
        <div className="shadow-comp_lg rounded-lg py-4 px-2 mx-2 flex flex-col gap-4">
           
           <div className="flex flex-col gap-2">
                <div className="font-bold">Pricing</div>
                <select name="niche" id="" className="text-input p-0">
                    <option value="one">1000frs - 10,000frs</option>
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Niche</div>
                <select name="niche" id="" className="text-input p-0">
                    <option value="one">web marketing</option>
                </select>
            </div>
           <div className="flex flex-col gap-2">
                <div className="font-bold">quantity</div>
                <input type="number" className="text-input" />
            </div>
           <div className="flex flex-col gap-2">
                <div className="font-bold">brand</div>
                <input type="text" className="text-input" />
            </div>
           
            <Button label="Search" />
        </div>
    )
}