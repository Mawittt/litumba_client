import { ROUTES } from "../../assets/constant";
import { ServiceProps } from "../../types/types";
import { useNavigate } from "../../utils/hooks";




export default function useService({ avatar, title, location, website, description, tags, _id, authorId, isBrand }: ServiceProps) {

    const { navigate } = useNavigate()

    return { isBrand, avatar, title, location, website, description, tags, openService, openConversation }

    function openService() {
        navigate(ROUTES.market_place.services.index + "/" + _id)
    }
    function openConversation() {
        navigate(ROUTES.conversations + "/" + authorId)
    }
}