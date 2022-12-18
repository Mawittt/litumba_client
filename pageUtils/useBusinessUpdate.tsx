import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { brand_avatar_1 } from "../assets/avatars"
import { business_image_1 } from "../assets/images"
import { BusinessUpdateFormProps } from "../types/types"


export default function useBusinessUpdate(){
    const [cover , setCover] = useState<string>("")
    const [logo , setLogo] = useState<string>("")
    const { register , handleSubmit , formState : {errors}, watch , setValue} = useForm<BusinessUpdateFormProps>({
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
    useEffect(()=>{
        const data = getInitialData()
        fillInitialValues(data)

        function getInitialData(): BusinessUpdateFormProps{

            return {
                cover : business_image_1,
                logo : brand_avatar_1,
                name : "james bond",
                country : "cameroon",
                city : "douala",
                description : "this is the best business you need for your platform . here there is nothing like no way..",
                niche : "art",
                phone : "65885485",
                email : "jamesbond@gmail.com",
                website : "toby.com"
            }
        }

    },[])


    return {cover,logo , register, handleSubmit , errors , updateBusiness , watch}

    function updateBusiness(data : BusinessUpdateFormProps){
        console.log(data)
    }
    function displayLogo(logo: FileList | null | string){
        if(!logo) return setLogo("")
        if(typeof(logo) === "string") return setLogo(logo)
         const fileReader = new FileReader()
         fileReader.onload = ()=>{
            if(typeof(fileReader.result) != "string" ) return
            setLogo(fileReader.result)
         }
         fileReader.readAsDataURL(logo[0])
    }
    function displayCover(cover : FileList | null | string){
        if(!cover) return setCover("")
        if(typeof(cover) === "string") return setCover(cover)
         const fileReader = new FileReader()
         fileReader.onload = ()=>{
            if(typeof(fileReader.result) != "string" ) return
            setCover(fileReader.result)
         }
         fileReader.readAsDataURL(cover[0])
    }
    function fillInitialValues(data : BusinessUpdateFormProps){
         setValue("city", data.city)
         setValue("country",data.country)
         setValue("cover",data.cover)
         setValue("description",data.description)
         setValue("email",data.email)
         setValue("logo",data.logo)
         setValue("name",data.name)
         setValue("niche",data.niche)
         setValue("phone",data.phone)
         setValue("website", data.website)
    }
}