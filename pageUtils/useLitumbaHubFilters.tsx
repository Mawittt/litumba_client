import { useForm } from "react-hook-form"
import { ROUTES } from "../assets/constant"
import { LitumbaHubFiltersFormProps } from "../types/types"
import { useNavigate } from "../utils/hooks"




export default function useLitumbaHubFilters(){
    const {register , handleSubmit} = useForm<LitumbaHubFiltersFormProps>()
    const {getQueryString , navigate} = useNavigate()
    return {register , handleSubmit , search}

    function search(data : LitumbaHubFiltersFormProps){
        const query = getQueryString(data)
        navigate(ROUTES.litumba_hub.index+query)
    }
}