import { avatar_1 } from "../../assets/avatars"
import { image_1 } from "../../assets/images"
import { PostProps } from "../../types/types"





export default function usePost({avatar, name, time, description, image , likes , comments} : PostProps){
    avatar = avatar || avatar_1
    name = name || "john miller"
    time = time || "2 hours"
    description = description || "Litumba. this is for the bakwerians , I love this platform so much for its simplicity"
    image = image || image_1
    likes = likes || 35
    comments = likes || 20

    return { avatar , name , time , description , image , likes , comments , openProfile , enlargeImage , togglePostLike , openCommentsSection}

    function openProfile(){
        console.log("opening profile of " + name )
    }

    function enlargeImage(){
        console.log("enlarging image")
    }

    function togglePostLike(){
        console.log("toggling  post like")
    }
    function openCommentsSection(){
        console.log("opening comment section")
    }
}