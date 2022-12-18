import { useForm } from "react-hook-form"
import { ROUTES } from "../assets/constant"
import { RealEstateFiltersFormProps } from "../types/types"
import { useNavigate } from "../utils/hooks"




export default function useRealEstateFilters(){
    const {register, handleSubmit} = useForm<RealEstateFiltersFormProps>()
    const {getQueryString , navigate} = useNavigate()
    return {register , handleSubmit , search}

    function search(data : RealEstateFiltersFormProps){
        const query = getQueryString(data)
        navigate(ROUTES.real_estate.index+query)
    }
}