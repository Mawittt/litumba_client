import { ROUTES } from "../../assets/constant"
import { MyJobProps } from "../../types/types"
import { useNavigate } from "../../utils/hooks"




export default function useMyJob({image, title , applicants} : MyJobProps){
    image = image || "/avatars/brand_avatar_1.jpg"
    title = title || "Manager"
    applicants = applicants || 18

    const {navigate} = useNavigate()

    return {image , title, applicants , openJob}

    function openJob(){
        navigate(ROUTES.jobs.index + "/job_id")
    }
}