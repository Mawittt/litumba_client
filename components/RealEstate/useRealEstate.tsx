import { ROUTES } from "../../assets/constant";
import { ProductProps, RealEstateProps } from "../../types/types";
import { useNavigate } from "../../utils/hooks";



export default function useRealEstate({ avatar, name, location, website, image, description, price, _id, isBrand, self, authorId }: RealEstateProps) {

    const { navigate } = useNavigate()

    return { avatar, name, location, website, image, description, price, isBrand, self, openRealEstate, openConversation }

    function openRealEstate() {
        navigate(ROUTES.real_estate.index + "/" + _id)
    }

    function openConversation() {
        navigate(ROUTES.conversations + "/" + authorId)
    }
}