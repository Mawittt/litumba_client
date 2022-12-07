import { ROUTES } from "../../assets/constant";
import { OtherProductProps } from "../../types/types";
import { useNavigate, useOwner } from "../../utils/hooks";




export default function useOtherProduct({...product} : OtherProductProps){

    const {navigate} = useNavigate()
  

    return {product , openProduct }

    function openProduct(){
        navigate(ROUTES.market_place.products.index + "/product_id2")
    }
}