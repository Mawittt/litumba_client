import { ROUTES } from "../../assets/constant";
import { FollowProps } from "../../types/types";
import { useNavigate } from "../../utils/hooks";
import Follow from "./Follow";



export default function useFollow({ ...follow }: FollowProps) {
    const { navigate } = useNavigate()
    return { follow, gotoProfile }

    function gotoProfile() {
        navigate(ROUTES.profile + "/" + follow.userId)
    }
}