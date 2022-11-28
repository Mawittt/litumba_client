import { avatar_1 } from "../../assets/avatars"
import { ROUTES } from "../../assets/constant"
import { image_1 } from "../../assets/images"
import { PostProps } from "../../types/types"
import { useNavigate } from "../../utils/hooks"





export default function usePost({avatar, name, time, description, image , likes , comments} : PostProps){
    avatar = avatar || avatar_1
    name = name || "john miller"
    time = time || "2 hours"
    description = description || "Litumba. this is for the bakwerians , I love this platform so much for its simplicity"
    image = image || image_1
    likes = likes || 35
    comments = likes || 20

    const {navigate} = useNavigate()

    return { avatar , name , time , description , image , likes , comments , openProfile , enlargeImage , togglePostLike , openCommentsSection}

    function openProfile(){
        navigate(ROUTES.profile)
    }

    function enlargeImage(){
        console.log("enlarging image")
    }

    function togglePostLike(){
        console.log("toggling  post like")
    }
    function openCommentsSection(){
        navigate(ROUTES.post_details + "/post_id")
    }
}