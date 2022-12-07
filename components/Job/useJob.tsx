import { ROUTES } from "../../assets/constant";
import { JobProps } from "../../types/types";
import { useNavigate } from "../../utils/hooks";



export default function useJob({avatar , title , location , time , description , tags , brand , self , _id } : JobProps) {

    const {navigate} = useNavigate()

    return {avatar , title , location ,time,description ,tags , brand , self , openJob , openChat }

    function openJob(){
        navigate(ROUTES.jobs.index + "/job_id")
    }
    function openChat(){
        navigate(ROUTES.conversations + "/conversation_id")
    }
}