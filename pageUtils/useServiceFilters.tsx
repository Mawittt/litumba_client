import { useForm } from "react-hook-form"
import { ROUTES } from "../assets/constant"
import { ServiceFiltersFormProps } from "../types/types"
import { useNavigate } from "../utils/hooks"




export default function useServiceFilters(){
    const {register , handleSubmit} = useForm<ServiceFiltersFormProps>()
    const {getQueryString , navigate} = useNavigate()
    return {register , handleSubmit , search}

    function search(data : ServiceFiltersFormProps){
        const query = getQueryString(data)
        navigate(ROUTES.market_place.services.index+query)
    }
}