import { avatar_1, avatar_2, avatar_3 } from "../assets/avatars"
import { image_1 } from "../assets/images"
import { CommentFormProps, CommentProps } from "../types/types"
import {useForm} from "react-hook-form"


export default function usePostDetails(){
    const {register, handleSubmit, } = useForm({
        defaultValues : {
             comment : ""
        }
    })
    const post = {
        avatar : avatar_2,
        name : "John Miller",
        time : "2 days",
        text : "Litumba is a platform where bakwerians can meet , network and help each other",
        image : image_1
    }

    const comments : CommentProps[] = [
        {
            avatar : avatar_1,
            name : "domminum gue",
            text : "yes, you know, i really love all of these",
            _id : 1
        },
        {
            avatar : avatar_2,
            name : "provalesse dion",
            text : "hahaha thats out of my imagination..",
            _id : 2
        },
        {
            avatar : avatar_3,
            name : "provalesse dion",
            text : "my imports of douout of my imagination..",
            _id : 2
        },
    ]

    return {comments ,post , openProfile , enlargeImage , sendComment , register , handleSubmit}

    function openProfile(){
    }
    function enlargeImage(){
    }
    function sendComment(data : any){
        if(commentIsEmpty(data)) return
        console.log(data)

        function commentIsEmpty(data: CommentFormProps){
            if(data.comment) return false
            return true
        }
    }
}