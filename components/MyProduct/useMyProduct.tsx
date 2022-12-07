import { ROUTES } from "../../assets/constant"
import { useMenuToggle, useNavigate } from "../../utils/hooks"



export default function useMyProduct(){
    const image = "/avatars/brand_avatar_1.jpg"
    const name = "Air-force Max"
    const interested = 6
    const {navigate} = useNavigate()
    const {closeMenu} = useMenuToggle()

    return {image, name , interested , openProduct}

    function openProduct(){
        closeMenu()
        navigate(ROUTES.market_place.products.index + "/product_id")
    }
}