import { useForm } from "react-hook-form"
import {useEffect, useRef, useState} from "react"
import { useNotifiers } from "../../utils/hooks"
import { PostInputProps } from "../../types/types"

export default function useAddPost(){
    const [image, setImage] = useState("")
    const [video , setVideo] = useState("")
    const mediaFlag  = useRef<"none" | "image" | "video">("none")
    const {setAlert} = useNotifiers()
    const {register , handleSubmit , watch , setValue , reset} = useForm({
        defaultValues : {
            postImageInput : null,
            postVideoInput : null,
            postTextInput : ""
        }
    })
    useEffect(()=>{
        watchImage(watch("postImageInput"))
        watchVideo(watch("postVideoInput"))
    }, [watch("postImageInput"), watch("postVideoInput")])

    return {register, handleSubmit , sendPost , image , video , setImageFlag , setVideoFlag , clearMedia}

    function watchImage(data: FileList | null){
        if(!data) return
        if(!data.length) return
        if(mediaFlag.current !== "image") return
        setValue("postVideoInput" , null)
        setVideo('')
        const fileReader = new FileReader()
        fileReader.onload = displayImage
        fileReader.readAsDataURL(data[0])

        function displayImage(){
            if(typeof(fileReader.result) !== "string") return 
            setImage(fileReader.result)
        }

    }
    function watchVideo(data: FileList | null){
        const maxSize = 35 * 1024 * 1024
        if(!data) return
        if(!data.length) return
        if(mediaFlag.current !== "video") return
        if(!isAcceptableSize(data)) return setAlert({content : "Sorry, the video size is too large please select a lighter version"})
        setValue("postImageInput" , null)
        setImage('')
        const fileReader = new FileReader()
        fileReader.onload = displayImage
        fileReader.readAsDataURL(data[0])

        function displayImage(){
            if(typeof(fileReader.result) !== "string") return 
            setVideo(fileReader.result)
        }
        function isAcceptableSize(data : FileList){
            
            return data[0].size < maxSize
        }
    }
    function sendPost(data: PostInputProps){
        if(dataIsEmpty(data)) return
        console.log(data)

        function dataIsEmpty(data : PostInputProps){
            if(data.postTextInput) return false
            if(data.postVideoInput) return false
            if(data.postImageInput) return false
            return true
        }
    }
    function setImageFlag(){
        mediaFlag.current = "image"
    }
    function setVideoFlag(){
        mediaFlag.current = "video"
    }
    function clearMedia(){
        setValue("postImageInput",null)
        setValue("postVideoInput",null)
        setImage('')
        setVideo('')
    }

}