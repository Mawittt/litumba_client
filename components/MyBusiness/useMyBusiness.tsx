import { brand_avatar_1 } from "../../assets/avatars"
import { ROUTES } from "../../assets/constant"
import { MyBusinessProps } from "../../types/types"
import { useMenuToggle, useNavigate } from "../../utils/hooks"




export default function useMyBusiness({ image, name, assets, id }: MyBusinessProps) {
    image = image || brand_avatar_1
    name = name || "Crown Enterprise"
    assets = assets || 23

    const { navigate } = useNavigate()
    const { closeMenu } = useMenuToggle()

    return { image, name, assets, openBusiness }

    function openBusiness() {
        closeMenu()
        navigate(ROUTES.businesses.index + "/" + id)
    }
}