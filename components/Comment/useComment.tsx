import { ROUTES } from "../../assets/constant";
import { CommentProps } from "../../types/types";
import { useNavigate } from "../../utils/hooks";



export default function useComment(comment: CommentProps) {
    const { navigate } = useNavigate()
    return { comment, openProfile }

    function openProfile() {
        navigate(ROUTES.profile + "/" + comment.id)
    }
}