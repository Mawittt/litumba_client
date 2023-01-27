import { ROUTES } from "../../assets/constant";
import { NotificationProps } from "../../types/types";
import { useNavigate } from "../../utils/hooks";




export default function useNotification(notification: NotificationProps) {

    const { navigate } = useNavigate()

    return { notification, gotoPost, gotoProfile, gotoService }

    function gotoPost() {
        navigate(ROUTES.post_details + "/" + notification.postId || "")
    }

    function gotoProfile() {
        navigate(ROUTES.profile + "/" + notification.triggerId)
    }

    function gotoService() {
        navigate(ROUTES.market_place.services.index + "/" + notification.serviceId)
    }

}