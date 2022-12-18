import { useForm } from "react-hook-form"
import { ROUTES } from "../assets/constant"
import { BusinessFiltersFormProps } from "../types/types"
import { useNavigate } from "../utils/hooks"




export default function useBusinessFilters(){
    const {register , handleSubmit } = useForm({
        defaultValues : {
            niche : ""
        }
    })
    const {getQueryString , navigate} = useNavigate()

    return {register , handleSubmit, search}

    function search(data : BusinessFiltersFormProps){
        const query = getQueryString(data)
        navigate(ROUTES.businesses.index + query)
    }
}