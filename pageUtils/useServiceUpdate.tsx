import { useForm } from "react-hook-form"
import { ServiceUpdateFormProps } from "../types/types"
import { useEffect } from "react"

export default function useServiceUpdate(){
    const {register , handleSubmit , formState : {errors} , watch , setValue} = useForm<ServiceUpdateFormProps>()
    useEffect(()=>{
        setInitialValues(getData())
    },[])

    return {register, handleSubmit , errors , updateService , watch}

    function updateService(data : ServiceUpdateFormProps){
        console.log(data)
    }

    function setInitialValues(data : ServiceUpdateFormProps){
        setValue("city", data.city)
        setValue("price", data.price)
        setValue("description", data.description)
        setValue("niche", data.niche)
        setValue("country", data.country)
        setValue("name", data.name)
    }
    function getData() : ServiceUpdateFormProps{
        return {
            city : "douala",
            price : 5000,
            description : "all i have is by the grace of God",
            niche : "web development",
            country : "cameroon",
            name: "web site"

        }
    }
}