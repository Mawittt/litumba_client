import { ROUTES } from "../../assets/constant"
import { MyProductProps } from "../../types/types"
import { useMenuToggle, useNavigate } from "../../utils/hooks"



export default function useMyProduct({ image, name, id }: MyProductProps) {
    const { navigate } = useNavigate()
    const { closeMenu } = useMenuToggle()

    return { image, name, openProduct }

    function openProduct() {
        closeMenu()
        navigate(ROUTES.market_place.products.index + "/" + id)
    }
}