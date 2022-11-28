import { ROUTES } from "../../assets/constant";
import { OtherProductProps } from "../../types/types";
import { useNavigate } from "../../utils/hooks";




export default function useOtherProduct({...product} : OtherProductProps){

    const {navigate} = useNavigate()

    return {product , openProduct , openConversation}

    function openProduct(){
        navigate(ROUTES.market_place.products.index + "/product_id2")
    }
    function openConversation(){
        navigate(ROUTES.conversations + "/conversation_id")
    }
}