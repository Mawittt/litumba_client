import { group_avatar } from "../assets/avatars";
import { ROUTES } from "../assets/constant";
import { group_image_1 } from "../assets/images";
import { CulturalGroupDetails } from "../types/types";
import { useNavigate } from "../utils/hooks";



export default function useCulturalGroupDetails(){

    const details : CulturalGroupDetails = {
        cover : group_image_1,
        avatar : group_avatar,
        name : "Mockpe group",
        members : 33 ,
        description : "this group was founded in 1995, by the old chief elongo the III . we are focused aroung animating for traditional marriages and have a large set of experienced dancers. we are based in buea town and love our culture. feel free to contact us.",
        location : "Buea-Cameroon",
        _id : 1
    }

    const {navigate  , router} = useNavigate()

    return {details , gotoConversation , goBack}

    function gotoConversation(){
        navigate(ROUTES.conversations + "/conversation_id")
    }
    function goBack(){  
        router.back()
    }
}