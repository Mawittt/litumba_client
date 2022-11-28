import { ROUTES } from "../../assets/constant"
import { CulturalGroupsProps } from "../../types/types"
import { useNavigate } from "../../utils/hooks"




export default function useCulturalGroup( {image , name , location , members , _id} : CulturalGroupsProps){

    const {navigate} = useNavigate()

    return { image , name , location , members , gotoGroup , openConversation}

    function gotoGroup(){
        navigate(ROUTES.cultural_groups.index + "/group_id")
    }
    function openConversation(){
        navigate(ROUTES.conversations + "/conversation_id")
    }
}