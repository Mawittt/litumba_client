import axios from "axios"
import { useQuery } from "react-query"
import { avatar_1_md } from "../../assets/avatars"
import { ROUTES } from "../../assets/constant"
import useStore from "../../store/useStore"
import { ProfilePreviewProps } from "../../types/types"
import { useMenuToggle, useNavigate } from "../../utils/hooks"



export default function useProfilePreview({ image, name, description, notifications, followers, following }: ProfilePreviewProps) {
    const { user } = useStore()
    const { navigate } = useNavigate()
    const { closeMenu } = useMenuToggle()
    let newMessages = 0

    const { data, isSuccess } = useQuery(["messages/newMessages", { userId: user.id }], () => {
        return axios.get("/api/messages/newMessages/" + user.id)
    }, { enabled: !!user.id })

    if (isSuccess) handleSuccess()

    return {
        image, name, description, notifications, newMessages, followers, following,
        openProfile, openNotifications, openMessages, openSettings, openFollowers, openFollowing, closeMenu
    }

    function openProfile() {
        navigate(ROUTES.profile)
        closeMenu()
    }
    function openNotifications() {
        navigate(ROUTES.notification)
        closeMenu()
    }
    function openMessages() {
        navigate(ROUTES.conversations)
        closeMenu()
    }
    function openSettings() {
        navigate(ROUTES.settings)
        closeMenu()
    }
    function openFollowers() {
        navigate(ROUTES.followers)
        closeMenu()
    }
    function openFollowing() {
        navigate(ROUTES.following)
        closeMenu()
    }
    function handleSuccess() {
        if (data?.data)
            newMessages = data.data
    }
}