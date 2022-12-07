import { avatar_1, avatar_2, avatar_3 } from "../../assets/avatars"
import { image_1, image_3, image_31 } from "../../assets/images"
import useStore from "../../store/useStore"
import { PostProps } from "../../types/types"





export default function useHomeComponent(){
    
    const posts : PostProps[]= [
        {
            avatar : avatar_1,
            name : "Stella price",
            time : "2 Hours",
            description : "Litumba. this is for the bakwerians , I love this platform so much for its simplicity",
            image : image_1,
            likes : 20,
            comments : 5
        },
        {
            avatar : avatar_2,
            name : "John Miller",
            time : "4 Hours",
            description : "Litumba. this is for the bakwerians , I love this platform so much for its simplicity",
            image : image_3,
            likes : 51,
            comments : 3
        },
        {
            avatar : avatar_3,
            name : "Rudulf anil",
            time : "8 Hours",
            description : "Litumba. this is for the bakwerians , I love this platform so much for its simplicity",
            image : image_31,
            likes : 32,
            comments : 4
        },
    ]


    return {posts}
}