import { useForm } from "react-hook-form"
import { ReviewCreateFormProps } from "../../types/types"
import { useState } from "react"




export default function useReviewForm(){
    const {register, handleSubmit, formState : { errors}} = useForm<ReviewCreateFormProps>()
    const [form, setForm] = useState<boolean>(false)

    return {register , handleSubmit , errors , saveReview , form , setForm , toggleForm}

    function saveReview(data : ReviewCreateFormProps){
        console.log(data)
    }
    function toggleForm(){
        setForm(form => !form)
    }
}