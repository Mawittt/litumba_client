import { useForm } from "react-hook-form"
import { ServiceCreateFormProps } from "../types/types"



export default function useServiceCreate(){
    const {register , handleSubmit , formState : {errors}} = useForm<ServiceCreateFormProps>()


    return {register, handleSubmit , errors , createService}

    function createService(data : ServiceCreateFormProps){
        console.log(data)
    }
}