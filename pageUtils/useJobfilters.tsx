import { useForm } from "react-hook-form"
import { ROUTES } from "../assets/constant"
import { JobFilterFormProps } from "../types/types"
import { useNavigate } from "../utils/hooks"



export default function useJobFilters(){
    const {getQueryString , navigate} = useNavigate()
    const {register , handleSubmit, watch} = useForm({
        defaultValues : {
            pricing : "",
            urgency : "",
            niche : "",
            expertise : "",
            schedule : ""
        }
    })

    return {register , handleSubmit , filterJobs , watch}

    function filterJobs(data : JobFilterFormProps){
        const query = getQueryString(data)
        navigate(ROUTES.jobs.index+query)
    }
}