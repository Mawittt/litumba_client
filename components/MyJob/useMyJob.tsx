import { MyJobProps } from "../../types/types"




export default function useMyJob({image, title , applicants} : MyJobProps){
    image = image || "/avatars/brand_avatar_1.jpg"
    title = title || "Manager"
    applicants = applicants || 18

    return {image , title, applicants , openJob}

    function openJob(){
        console.log("opening job")
    }
}