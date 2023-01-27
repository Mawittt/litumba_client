import axios from "axios"
import { useRef } from "react"
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import useStore from "../store/useStore"
import { CreationAuthorType, ServiceCreateFormProps } from "../types/types"
import { useNavigate, useNotifiers } from "../utils/hooks"



export default function useServiceCreate() {
    const { user } = useStore()
    const { register, handleSubmit, formState: { errors } } = useForm<ServiceCreateFormProps>()
    const mutator = useMutation("services", (service: any) => {
        return axios.post("/api/services", service)
    }, { retry: 3 })
    const { navigate } = useNavigate()
    const { setConfirmation, setWarning } = useNotifiers()
    const author = useRef<CreationAuthorType>()

    if (mutator.isSuccess) handleSuccess()
    if (mutator.isError) handleError()

    return { mutator, register, handleSubmit, errors, createService, setAuthor }

    function createService(data: ServiceCreateFormProps) {
        if (!author.current) return setWarning({ content: "please select an author" })
        if (author.current.isBusiness) data.authorBusinessId = author.current.authorId
        if (!author.current.isBusiness) data.authorUserId = author.current.authorId
        mutator.mutate(data)
    }
    function handleSuccess() {
        setConfirmation({ content: "Saved Successfully" })
        mutator.reset()
        navigate(-1)
    }
    function handleError() {
        setWarning({ content: "sorry there was an error, please try again" })
        mutator.reset()

    }
    function setAuthor(authorId: string, isBusiness: boolean) {
        author.current = { authorId, isBusiness }
    }
}