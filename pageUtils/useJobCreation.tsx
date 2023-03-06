import axios from "axios"
import { useRef } from "react"
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import useStore from "../store/useStore"
import { JobCreationFormProps } from "../types/types"
import { useNavigate, useNotifiers } from "../utils/hooks"




export default function useJobCreation() {
    const { user } = useStore()
    const { register, handleSubmit, formState: { errors }, reset } = useForm<JobCreationFormProps>({
        defaultValues: {
            title: "",
            price: "",
            description: "",
            niche: "",
            urgency: "",
            country: "",
            city: "",
            expertise: "",
            schedule: "",
        }
    })
    const mutator = useMutation("jobs", (job: JobCreationFormProps) => {
        return axios.post("/api/jobs/", job)
    }, {
        retry: 3
    })
    const { setWarning, setConfirmation } = useNotifiers()
    const { navigate } = useNavigate()
    const author = useRef<{ authorId: string, isBusiness: boolean }>()

    if (mutator.isSuccess) handleSuccess()
    if (mutator.isError) handleError()

    return { register, handleSubmit, errors, createJob, mutator, setAuthor }

    function createJob(data: JobCreationFormProps) {
        if (!author.current) return setWarning({ content: "please select an author" })
        addAuthor()
        mutator.mutate(data)

        function addAuthor() {
            if (author.current)
                if (author.current.isBusiness) {
                    data.authorBusinessId = author.current.authorId
                } else {
                    data.authorUserId = author.current.authorId
                }
        }
    }
    function handleSuccess() {
        reset()
        mutator.reset()
        navigate(-1)
        setConfirmation({ content: "Job saved" })
    }
    function handleError() {
        setWarning({ content: "sorry there was an error please try again" })
    }
    function setAuthor(authorId: string, isBusiness: boolean) {
        author.current = { authorId, isBusiness }
    }
}