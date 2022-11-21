import { avatar_1_md } from "../../assets/avatars"



export default function useProfilePreview(){
    const image = avatar_1_md
    const name = "Ana Rose"
    const description = "I am a bakwerian living in los Angeles. I love my people and culture and am willing to meet other bakwerians"
    const notifications = 5
    const messages = 3
    const followers = 5500
    const following = 3005



    return {image,name ,description, notifications , messages , followers , following,
        openProfile, openNotifications, openMessages , openSettings , openFollowers , openFollowing
        }

    function openProfile(){
        console.log("opening profile")
    }
    function openNotifications(){
        console.log("opening notifications")
    }
    function openMessages(){
        console.log("open messages")
    }
    function openSettings(){
        console.log("open settings")
    }
    function openFollowers(){
        console.log("opening followers")
    }
    function openFollowing(){
        console.log("open following")
    }
}