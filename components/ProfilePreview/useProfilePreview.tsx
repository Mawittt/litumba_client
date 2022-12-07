import { avatar_1_md } from "../../assets/avatars"
import { ROUTES } from "../../assets/constant"
import { useMenuToggle, useNavigate } from "../../utils/hooks"



export default function useProfilePreview(){
    const image = avatar_1_md
    const name = "Ana Rose"
    const description = "I am a bakwerian living in los Angeles. I love my people and culture and am willing to meet other bakwerians"
    const notifications = 5
    const messages = 3
    const followers = 5500
    const following = 3005
    const {navigate} = useNavigate()
    const {closeMenu} = useMenuToggle()


    return {image,name ,description, notifications , messages , followers , following,
        openProfile, openNotifications, openMessages , openSettings , openFollowers , openFollowing , closeMenu
        }

    function openProfile(){
        navigate(ROUTES.profile)
        closeMenu()
    }
    function openNotifications(){
        navigate(ROUTES.notification)
        closeMenu()
    }
    function openMessages(){
        navigate(ROUTES.conversations)
        closeMenu()
    }
    function openSettings(){
        navigate(ROUTES.settings)
        closeMenu()
    }
    function openFollowers(){
        navigate(ROUTES.followers)
        closeMenu()
    }
    function openFollowing(){
        navigate(ROUTES.following)
        closeMenu()
    }

}