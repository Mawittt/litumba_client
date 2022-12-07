import { ROUTES } from "../../assets/constant";
import { ProductProps } from "../../types/types";
import { useNavigate } from "../../utils/hooks";



export default function useProduct({avatar , name , location , website , image , description , price , _id , amount, brand , self} : ProductProps ){

    const {navigate} = useNavigate()

    return {avatar , name , location , website , image , description , price , amount , brand , self , openProduct , openConversation}

    function openProduct(){
        navigate(ROUTES.market_place.products.index + "/product_id")
    }

    function openConversation(){
        navigate(ROUTES.conversations + "/conversation_id")
    }
}