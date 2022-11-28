import { ROUTES } from "../../assets/constant";
import { ConversationProps } from "../../types/types";
import { useNavigate } from "../../utils/hooks";




export default function useConversation(conversation : ConversationProps){

    const {navigate} = useNavigate()

    return {conversation , gotoProfile}

    function gotoProfile(){
        navigate(ROUTES.profile)
    }
}