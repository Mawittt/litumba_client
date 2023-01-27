import { useForm } from "react-hook-form"
import { ServiceUpdateFormProps } from "../types/types"
import { useEffect } from "react"
import { useMutation, useQuery } from "react-query"
import { useNavigate, useNotifiers } from "../utils/hooks"
import axios from "axios"

export default function useServiceUpdate() {
    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<ServiceUpdateFormProps>()
    const { router, navigate } = useNavigate()
    const { setConfirmation, setWarning } = useNotifiers()
    const serviceId = router.query.id
    const mutator = useMutation(["services", serviceId], (updates: any) => {
        return axios.patch("/api/services/" + serviceId, updates)
    })
    const { data, isSuccess } = useQuery(["services", serviceId], () => {
        return axios.get("/api/services/" + serviceId)
    }, { enabled: !!serviceId })
    useEffect(() => {
        if (isSuccess) handleSuccess()
    }, [isSuccess])
    if (mutator.isSuccess) handleSaved()
    if (mutator.isError) handleError()

    return { mutator, register, handleSubmit, errors, updateService, watch }

    function updateService(data: ServiceUpdateFormProps) {
        mutator.mutate(data)
    }

    function handleSuccess() {
        if (!data?.data) return
        setValue("city", data.data.city)
        setValue("price", data.data.price)
        setValue("description", data.data.description)
        setValue("niche", data.data.niche)
        setValue("country", data.data.country)
        setValue("name", data.data.name)
    }
    function handleSaved() {
        setConfirmation({ content: "Saved successfully" })
        navigate(-1)
        mutator.reset()
    }
    function handleError() {
        setWarning({ content: "sorry there was an error, please try again" })
        navigate(-1)
        mutator.reset()
    }
}