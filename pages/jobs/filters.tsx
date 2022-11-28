import Button from "../../components/Button/Button"
import useJobFilters from "../../pageUtils/useJobfilters"


export default function JobFilters() {
    const { search } = useJobFilters()

    return (
        <div className="shadow-comp_lg rounded-lg py-4 px-2 mx-2 flex flex-col gap-4">
           
           <div className="flex flex-col gap-2">
                <div className="font-bold">Pricing</div>
                <select name="niche" id="" className="text-input p-0">
                    <option value="one">1000frs - 10,000frs</option>
                </select>
            </div>
           <div className="flex flex-col gap-2">
                <div className="font-bold">Urgency</div>
                <select name="niche" id="" className="text-input p-0">
                    <option value="one">one week</option>
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Niche</div>
                <select name="niche" id="" className="text-input p-0">
                    <option value="one">web marketing</option>
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Expertise</div>
                <select name="niche" id="" className="text-input p-0">
                    <option value="one">beginner</option>
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Schedule</div>
                <select name="niche" id="" className="text-input p-0">
                    <option value="one">fulltime</option>
                </select>
            </div>
            <Button label="Search" onClick={search}/>
        </div>
    )
}