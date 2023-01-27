import { ROUTES } from "../../assets/constant";
import { ProductProps } from "../../types/types";
import { useNavigate } from "../../utils/hooks";



export default function useProduct({ avatar, name, location, website, image, description, price, _id, amount, isBrand, self, ownerId }: ProductProps) {

    const { navigate } = useNavigate()

    return { avatar, name, location, website, image, description, price, amount, isBrand, self, openProduct, openConversation }

    function openProduct() {
        navigate(ROUTES.market_place.products.index + "/" + _id)
    }

    function openConversation() {
        navigate(ROUTES.conversations + "/" + ownerId)
    }
}