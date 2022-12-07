import { avatar_1 } from "../assets/avatars"
import { person_cover_image, profile_image_for_background } from "../assets/images"




export default function useSettings(){
    const user = {
        cover : person_cover_image,
        profile : avatar_1
    }

    return {user}
}