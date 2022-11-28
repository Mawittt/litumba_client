import { ROUTES } from "../../assets/constant"
import { useNavigate } from "../../utils/hooks"



export default function useMyProduct(){
    const image = "/avatars/brand_avatar_1.jpg"
    const name = "Air-force Max"
    const interested = 6

    const {navigate} = useNavigate()

    return {image, name , interested , openProduct}

    function openProduct(){
        navigate(ROUTES.market_place.products.index + "/product_id")
    }
}