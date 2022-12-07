import { ROUTES } from "../../assets/constant";
import { MyServiceProps } from "../../types/types";
import { useMenuToggle, useNavigate } from "../../utils/hooks";




export default function useMyService({title, interested , image} : MyServiceProps){
    image = image || "/avatars/brand_avatar_1.jpg"
    title = title || "Designer"
    interested = interested || 5

    const {navigate} = useNavigate()
    const {closeMenu} = useMenuToggle()

    return {image , title , interested , openService}

    function openService(){
        closeMenu()
        navigate(ROUTES.market_place.services.index + "/service_id")
    }
}