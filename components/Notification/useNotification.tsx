import { ROUTES } from "../../assets/constant";
import { NotificationProps } from "../../types/types";
import { useNavigate } from "../../utils/hooks";




export default function useNotification(notification : NotificationProps){

    const {navigate} = useNavigate()

    return {notification , gotoProfile , gotoProduct , gotoService}

    function gotoProfile(){
        navigate(ROUTES.profile)
    }

    function gotoProduct(){
        navigate(ROUTES.market_place.products.index + "/product_id")
    }

    function gotoService(){
        navigate(ROUTES.market_place.services.index + "/service_id")
    }
    
}