import Image from "next/image";
import { EditIcon } from "../../../../assets/icons";
import useCaseStudyDetails from "../../../../pageUtils/useCaseStudyDetails";



export default function CaseStudyDetails(){
    const {caseStudy , updateCaseStudy } = useCaseStudyDetails()
    return (
        <div className="flex flex-col gap-2 px-2 mt-4 rounded-lg shadow-comp_lg pb-4">
            <div className="relative w-full h-[300px]">
                <Image src={caseStudy.preview} alt={"case study image"} fill className="object-cover" />
            </div>
            <EditIcon onClick={updateCaseStudy} />
            <h2 className="font-bold">{caseStudy.title}</h2>
            <p>{caseStudy.description}</p>
        </div>
    )
}