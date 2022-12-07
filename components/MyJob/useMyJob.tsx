import { ROUTES } from "../../assets/constant"
import { MyJobProps } from "../../types/types"
import { useMenuToggle, useNavigate } from "../../utils/hooks"




export default function useMyJob({image, title , applicants} : MyJobProps){
    image = image || "/avatars/brand_avatar_1.jpg"
    title = title || "Manager"
    applicants = applicants || 18

    const {navigate} = useNavigate()
    const {closeMenu} = useMenuToggle()

    return {image , title, applicants , openJob}

    function openJob(){
        closeMenu()
        navigate(ROUTES.jobs.index + "/job_id")
    }
}