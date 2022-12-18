import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { BusinessCreationFormProps } from "../types/types"




export default function useBusinessCreation(){
    const [cover , setCover] = useState<string>("")
    const [logo , setLogo] = useState<string>("")
    const { register , handleSubmit , formState : {errors}, watch} = useForm({
        defaultValues : {
            logo : null,
            cover : null,
            name : "",
            country : "",
            city : "",
            description : "",
            niche : "",
            phone : "",
            email : "",
            website : "",
        }
    })

    useEffect(()=>{
        displayCover(watch("cover"))
        displayLogo(watch("logo"))
    },[watch("cover"),watch("logo")])


    return {cover,logo , register, handleSubmit , errors , createBusiness}

    function createBusiness(data : BusinessCreationFormProps){
        console.log(data)
    }
    function displayLogo(logo: FileList | null){
        if(!logo) return setLogo("")
         const fileReader = new FileReader()
         fileReader.onload = ()=>{
            if(typeof(fileReader.result) != "string" ) return
            setLogo(fileReader.result)
         }
         fileReader.readAsDataURL(logo[0])
    }
    function displayCover(cover : FileList | null){
        if(!cover) return setCover("")
         const fileReader = new FileReader()
         fileReader.onload = ()=>{
            if(typeof(fileReader.result) != "string" ) return
            setCover(fileReader.result)
         }
         fileReader.readAsDataURL(cover[0])
    }
}