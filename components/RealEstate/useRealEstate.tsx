import { ROUTES } from "../../assets/constant";
import { ProductProps, RealEstateProps } from "../../types/types";
import { useNavigate } from "../../utils/hooks";



export default function useRealEstate({avatar , name , location , website , image , description , price , _id , amount, brand , self} : RealEstateProps ){

    const {navigate} = useNavigate()

    return {avatar , name , location , website , image , description , price , amount , brand , self , openRealEstate , openConversation}

    function openRealEstate(){
        navigate(ROUTES.real_estate.index + "/product_id")
    }

    function openConversation(){
        navigate(ROUTES.conversations + "/conversation_id")
    }
}