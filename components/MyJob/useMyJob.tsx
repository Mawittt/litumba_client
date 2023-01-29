import { ROUTES } from "../../assets/constant"
import { MyJobProps } from "../../types/types"
import { useMenuToggle, useNavigate } from "../../utils/hooks"




export default function useMyJob({ image, title, id }: MyJobProps) {
    image = image || "/avatars/brand_avatar_1.jpg"
    title = title || "Manager"

    const { navigate } = useNavigate()
    const { closeMenu } = useMenuToggle()

    return { image, title, openJob }

    function openJob() {
        closeMenu()
        navigate(ROUTES.jobs.index + "/" + id)
    }
}