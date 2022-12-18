import { ROUTES } from "../assets/constant"
import { consulting_image_1 } from "../assets/images"
import { CaseStudyProps } from "../types/types"
import { useNavigate } from "../utils/hooks"



export default function useCaseStudyDetails(){
    const caseStudy : CaseStudyProps = {
        preview : consulting_image_1,
        title  : "thermo project",
        description : "in this project i we simulated a discretancy for a client where this client was able to say well done to the community",
        _id : 1
    }
    const {navigate} = useNavigate()

    return {caseStudy , updateCaseStudy}

    function updateCaseStudy(){
        navigate(ROUTES.market_place.services.caseStudy.update+"/"+caseStudy._id)
    }
}