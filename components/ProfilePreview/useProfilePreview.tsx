import { avatar_1_md } from "../../assets/avatars"
import { ROUTES } from "../../assets/constant"
import { useNavigate } from "../../utils/hooks"



export default function useProfilePreview(){
    const image = avatar_1_md
    const name = "Ana Rose"
    const description = "I am a bakwerian living in los Angeles. I love my people and culture and am willing to meet other bakwerians"
    const notifications = 5
    const messages = 3
    const followers = 5500
    const following = 3005
    const {navigate} = useNavigate()



    return {image,name ,description, notifications , messages , followers , following,
        openProfile, openNotifications, openMessages , openSettings , openFollowers , openFollowing , closeMenu
        }

    function openProfile(){
        navigate(ROUTES.profile)
    }
    function openNotifications(){
        navigate(ROUTES.notification)
    }
    function openMessages(){
        navigate(ROUTES.conversations)
    }
    function openSettings(){
        navigate(ROUTES.settings)
    }
    function openFollowers(){
        navigate(ROUTES.followers)
    }
    function openFollowing(){
        navigate(ROUTES.followed)
    }
    function closeMenu(){
        const menu = document.getElementById("app_menu")
        if(!menu) return
        menu.style.position = "relative"
        menu.style.display = "none"
    }
}