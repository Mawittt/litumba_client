import { useForm } from "react-hook-form"
import { CreateReviewProps, ReviewCreateFormProps } from "../../types/types"
import { useEffect, useState } from "react"
import { useMutation } from "react-query"
import axios from "axios"
import { useNotifiers } from "../../utils/hooks"
import useStore from "../../store/useStore"




export default function useReviewForm({ serviceId }: CreateReviewProps) {
    const { user } = useStore()
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ReviewCreateFormProps>({
        defaultValues: {
            stars: 1,
            description: ""
        }
    })
    const [form, setForm] = useState<boolean>(false)
    const mutator = useMutation("reviews", (review: any) => {
        return axios.post("/api/reviews/", review)
    }, { retry: 3 })
    const { setWarning, setConfirmation } = useNotifiers()
    useEffect(() => {
        if (mutator.isSuccess) handleSuccess()
    }, [mutator.isSuccess])


    return { register, handleSubmit, errors, saveReview, form, setForm, toggleForm }

    function saveReview(data: ReviewCreateFormProps) {
        if (data.stars < 1) return setWarning({ content: 'the stars should be a minimum of 1' })
        if (data.stars > 5) return setWarning({ content: 'the stars should be a maximum of 5' })
        data.serviceId = serviceId
        data.authorId = user.id
        mutator.mutate(data)
    }
    function toggleForm() {
        setForm(form => !form)
    }
    function handleSuccess() {
        mutator.reset()
        setForm(false)
        setConfirmation({ content: "Saved review" })
        reset()
    }
}