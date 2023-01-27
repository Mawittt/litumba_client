import { ROUTES } from "../../assets/constant";
import { OtherProductProps } from "../../types/types";
import { useNavigate, useOwner } from "../../utils/hooks";




export default function useOtherProduct({ ...product }: OtherProductProps) {

    const { navigate } = useNavigate()


    return { product, openProduct }

    function openProduct() {
        navigate(ROUTES.market_place.products.index + "/" + product._id)
        const container = document.getElementById("page-component")
        container?.scrollTo(0, 0)
    }
}