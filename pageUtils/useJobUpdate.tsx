import { Console } from "console"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { JobUpdateFormProps } from "../types/types"




export default function useJobUpdate(){
    const {register, handleSubmit , watch , setValue} = useForm({
        defaultValues : {
            title : "",
            price : "",
            description : "",
            niche : "",
            urgency : "",
            country : "",
            city : "",
            expertise : "",
            schedule : "",
        }
    })
    useEffect(()=>{
        const data = getData()
        fillInitialValues(data)
    },[])

    return {register , handleSubmit , watch , updateJob }

    function updateJob(data : JobUpdateFormProps){
        console.log(data)
    }

    function fillInitialValues(data : JobUpdateFormProps){
        setValue("title",data.title)
        setValue("price",data.price)
        setValue("description",data.description)
        setValue("niche",data.niche)
        setValue("urgency",data.urgency)
        setValue("country",data.country)
        setValue("city",data.city)
        setValue("expertise",data.expertise)
        setValue("schedule",data.schedule)
    }

    function getData(): JobUpdateFormProps{
        return {
            title : "web developer",
            price : "50k - 100k",
            description : "this job is one where we all want to maximize the potential of being a sales man. building others to empower the sciences",
            niche : "web development",
            urgency : "now",
            city : "Douala",
            country : "cameroon",
            expertise : "expert",
            schedule : "part time"
        }
    }
}