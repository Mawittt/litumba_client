import { ROUTES } from "../../assets/constant";
import { MyServiceProps } from "../../types/types";
import { useMenuToggle, useNavigate } from "../../utils/hooks";




export default function useMyService({ title, image, id }: MyServiceProps) {
    image = image || "/avatars/brand_avatar_1.jpg"
    title = title || "Designer"

    const { navigate } = useNavigate()
    const { closeMenu } = useMenuToggle()

    return { image, title, openService }

    function openService() {
        closeMenu()
        navigate(ROUTES.market_place.services.index + "/" + id)
    }
}