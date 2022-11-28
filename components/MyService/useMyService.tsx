import { ROUTES } from "../../assets/constant";
import { MyServiceProps } from "../../types/types";
import { useNavigate } from "../../utils/hooks";




export default function useMyService({title, interested , image} : MyServiceProps){
    image = image || "/avatars/brand_avatar_1.jpg"
    title = title || "Designer"
    interested = interested || 5

    const {navigate} = useNavigate()
 
    return {image , title , interested , openService}

    function openService(){
        navigate(ROUTES.market_place.services.index + "/service_id")
    }
}