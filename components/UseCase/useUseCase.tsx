import { ROUTES } from "../../assets/constant";
import { UseCaseProps } from "../../types/types";
import { useNavigate } from "../../utils/hooks";



export default function useUseCase ({...useCase} : UseCaseProps){
    
    const {navigate} = useNavigate()
    
    return {useCase , openCaseStudy}
    function openCaseStudy(){
        navigate(ROUTES.market_place.services.caseStudy.index+ useCase._id)
    }
}