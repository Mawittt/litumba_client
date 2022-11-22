import { avatar_1 } from "../../assets/avatars"
import { usePage } from "../../utils/hooks"


export default function useTopNavBar(){

    const image = avatar_1
    const {page : route} = usePage()

    return {openProfile , openMenu , isBack , image , route , goBack}

    function openProfile(){
        console.log("opening profile")
    }
    function openMenu(){
        console.log("opening menu")
    }
    function isBack(){
        return false
    }

    function goBack(){
        console.log("going back")
    }
}