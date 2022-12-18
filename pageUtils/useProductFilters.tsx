import { useForm } from "react-hook-form"
import { ROUTES } from "../assets/constant"
import { ProductFiltersFormProps } from "../types/types"
import { useNavigate } from "../utils/hooks"




export default function useProductFilters(){
    const {register, handleSubmit} = useForm<ProductFiltersFormProps>()
    const {getQueryString , navigate} = useNavigate()
    return {register , handleSubmit , search}

    function search(data : ProductFiltersFormProps){
        const query = getQueryString(data)
        navigate(ROUTES.market_place.products.index+query)
    }
}