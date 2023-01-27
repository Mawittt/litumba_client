import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import useStore from "../store/useStore"
import { BusinessCreationFormProps, CreationAuthorType } from "../types/types"
import { useNavigate, useNotifiers } from "../utils/hooks"




export default function useBusinessCreation() {
    const [cover, setCover] = useState<string>("")
    const [logo, setLogo] = useState<string>("")
    const { user } = useStore()
    const { setWarning, setConfirmation } = useNotifiers()
    const { navigate } = useNavigate()

    const mutator = useMutation("businesses", (business: any) => {
        return axios.post("/api/businesses", business)
    }, { retry: 3 })
    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            logo: null,
            cover: null,
            name: "",
            country: "",
            city: "",
            description: "",
            niche: "",
            phone: "",
            email: "",
            website: "",
        }
    })


    useEffect(() => {
        displayCover(watch("cover"))
        displayLogo(watch("logo"))
    }, [watch("cover"), watch("logo")])

    if (mutator.isSuccess) handleSuccess()
    if (mutator.error) handleError()


    return { mutator, cover, logo, register, handleSubmit, errors, createBusiness }

    function createBusiness(data: BusinessCreationFormProps) {
        const formData = new FormData()
        if (data.cover) formData.append("coverImage", data.cover[0])
        if (data.logo) formData.append("logo", data.logo[0])
        formData.append("name", data.name)
        formData.append("country", data.country)
        formData.append("city", data.city)
        formData.append("description", data.description)
        formData.append("niche", data.niche)
        formData.append("phone", data.phone)
        formData.append("email", data.email)
        formData.append("website", data.website)
        formData.append("authorId", user.id)
        mutator.mutate(formData)
    }
    function displayLogo(logo: FileList | null) {
        if (!logo) return setLogo("")
        const fileReader = new FileReader()
        fileReader.onload = () => {
            if (typeof (fileReader.result) != "string") return
            setLogo(fileReader.result)
        }
        fileReader.readAsDataURL(logo[0])
    }
    function displayCover(cover: FileList | null) {
        if (!cover) return setCover("")
        const fileReader = new FileReader()
        fileReader.onload = () => {
            if (typeof (fileReader.result) != "string") return
            setCover(fileReader.result)
        }
        fileReader.readAsDataURL(cover[0])
    }
    function handleSuccess() {
        setConfirmation({ content: "Saved Successfully" })
        mutator.reset()
        navigate(-1)
    }
    function handleError() {
        setWarning({ content: "Sorry there was an error, please try again" })
    }
}