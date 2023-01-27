import { ROUTES } from "../../assets/constant";
import { OtherProductProps, OtherRealEstateProps } from "../../types/types";
import { scrollPageComponentToTop } from "../../utils/fn";
import { useNavigate, useOwner } from "../../utils/hooks";




export default function useOtherRealEstate({ ...real_estate }: OtherRealEstateProps) {

    const { navigate } = useNavigate()


    return { real_estate, openRealEstate }

    function openRealEstate() {
        navigate(ROUTES.real_estate.index + "/" + real_estate._id)
        scrollPageComponentToTop()
    }
}