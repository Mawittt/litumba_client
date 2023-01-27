import axios from "axios"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useMutation, useQuery } from "react-query"
import { brand_avatar_1 } from "../assets/avatars"
import { business_image_1 } from "../assets/images"
import { BusinessUpdateFormProps } from "../types/types"
import { useNavigate, useNotifiers } from "../utils/hooks"

interface ServerBusiness {
    coverImage: { url: string };
    logo: { url: string };
    name: string;
    email?: string;
    website?: string;
    city: string;
    country: string;
    description: string;
    phone?: string;
    niche: string;
    id: string;
}


export default function useBusinessUpdate() {
    const [cover, setCover] = useState<string>("")
    const [logo, setLogo] = useState<string>("")
    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<BusinessUpdateFormProps>({
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
    const { router, navigate } = useNavigate()
    const { setConfirmation, setWarning } = useNotifiers()
    const userId = router.query.id
    const { data, isSuccess } = useQuery<{ data: ServerBusiness }, Error>(["businesses", userId], () => {
        return axios.get("/api/businesses/" + userId)
    }, { enabled: !!userId })
    const mutator = useMutation(["businesses", userId], (updates: any) => {
        return axios.patch("/api/businesses/" + userId, updates)
    }, { retry: 3 })

    useEffect(() => {
        displayCover(watch("cover"))
        displayLogo(watch("logo"))
    }, [watch("cover"), watch("logo")])
    useEffect(() => {
        if (isSuccess) handleSuccess()
    }, [isSuccess])

    if (mutator.isSuccess) handleSaved()
    if (mutator.isError) handleError()
    return { mutator, cover, logo, register, handleSubmit, errors, updateBusiness, watch }

    function updateBusiness(data: BusinessUpdateFormProps) {
        const formData = new FormData()
        if (!data.cover) return
        if (!data.logo) return
        formData.append("coverImage", getImage(data.cover))
        formData.append("logo", getImage(data.logo))
        formData.append("city", getImage(data.city))
        formData.append("country", getImage(data.country))
        formData.append("description", getImage(data.description))
        formData.append("email", getImage(data.email))
        formData.append("name", getImage(data.name))
        formData.append("niche", getImage(data.niche))
        formData.append("phone", getImage(data.phone))
        formData.append("website", getImage(data.website))
        mutator.mutate(formData)
        console.log(data)

        function getImage(image: string | FileList) {
            if (typeof (image) === "string") return image
            return image[0]
        }
    }
    function displayLogo(logo: FileList | null | string) {
        if (!logo) return setLogo("")
        if (typeof (logo) === "string") return setLogo(logo)
        const fileReader = new FileReader()
        fileReader.onload = () => {
            if (typeof (fileReader.result) != "string") return
            setLogo(fileReader.result)
        }
        fileReader.readAsDataURL(logo[0])
    }
    function displayCover(cover: FileList | null | string) {
        if (!cover) return setCover("")
        if (typeof (cover) === "string") return setCover(cover)
        const fileReader = new FileReader()
        fileReader.onload = () => {
            if (typeof (fileReader.result) != "string") return
            setCover(fileReader.result)
        }
        fileReader.readAsDataURL(cover[0])
    }
    function handleSuccess() {
        if (!data) return
        setValue("city", data?.data.city)
        setValue("country", data.data.country)
        setValue("cover", data.data.coverImage.url)
        setValue("description", data.data.description)
        setValue("email", data.data.email || "")
        setValue("logo", data.data.logo.url)
        setValue("name", data.data.name)
        setValue("niche", data.data.niche)
        setValue("phone", data.data.phone || "")
        setValue("website", data.data.website || "")
    }
    function handleSaved() {
        setConfirmation({ content: "Saved successfully" })
        mutator.reset()
        navigate(-1)
    }
    function handleError() {
        setWarning({ content: "Sorry there was an error please try again" })
        mutator.reset()
    }
}