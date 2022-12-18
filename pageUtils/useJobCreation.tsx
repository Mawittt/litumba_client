import { useForm } from "react-hook-form"
import { JobCreationFormProps } from "../types/types"




export default function useJobCreation(){
    const {register , handleSubmit  , formState : {errors}} = useForm({
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

    return {register , handleSubmit , errors , createJob}

    function createJob(data : JobCreationFormProps){
        console.log(data)
    }
}