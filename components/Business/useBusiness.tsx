import { ROUTES } from "../../assets/constant";
import { BusinessProps } from "../../types/types";
import { useNavigate } from "../../utils/hooks";





export default function useBusiness({avatar, name , email , website , description , tags , _id} : BusinessProps){

    const {navigate} = useNavigate()

    return {avatar, name , email , website , description , tags , gotoBusiness , gotoConversation }

    function gotoBusiness(){
        navigate(ROUTES.businesses.index + "/business_id")
    }
    function gotoConversation(){
        navigate(ROUTES.conversations + "/conversation_id")
    }
}