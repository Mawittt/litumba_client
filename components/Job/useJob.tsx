import { ROUTES } from "../../assets/constant";
import { JobProps } from "../../types/types";
import { useNavigate } from "../../utils/hooks";



export default function useJob({ avatar, title, location, time, description, tags, isBrand, self, _id }: JobProps) {

    const { navigate } = useNavigate()

    return { avatar, title, location, time, description, tags, isBrand, self, openJob, openChat }

    function openJob() {
        navigate(ROUTES.jobs.index + "/" + _id)
    }
    function openChat() {
        navigate(ROUTES.conversations + "/conversation_id")
    }
}