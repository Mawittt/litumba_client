import { MyServiceProps } from "../../types/types";




export default function useMyService({title, interested , image} : MyServiceProps){
    image = image || "/avatars/brand_avatar_1.jpg"
    title = title || "Designer"
    interested = interested || 5

    return {image , title , interested}
}