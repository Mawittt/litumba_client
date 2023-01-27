import { useForm } from "react-hook-form"
import { CulturalGroupsUpdateFormProps, CulturalGroupsUpdateInitialValuesProps } from "../types/types"
import { useState, useEffect, useRef } from "react"
import { group_avatar } from "../assets/avatars"
import { group_image_1 } from "../assets/images"
import { useNavigate, useNotifiers } from "../utils/hooks"
import { useMutation, useQuery } from "react-query"
import axios from "axios"

interface ServerData {
    authorId: string,
    city: string,
    cover: { url: string },
    createAt: string,
    description: string,
    id: string,
    logo: { url: string },
    members: number,
    name: string,
}


export default function useCulturalGroupsUpdate() {
    const [profile, setProfile] = useState<string>("")
    const [cover, setCover] = useState<string>("")
    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<CulturalGroupsUpdateFormProps>({
        defaultValues: {
            city: '',
            name: "",
            description: "",
            members: 0,
        }
    })
    const { navigate, router } = useNavigate()
    const groupId = router.query.id
    const { data, isSuccess, } = useQuery<{ data: ServerData }, Error>(["culturalGroups", groupId], () => {
        return axios.get("/api/culturalGroups/" + groupId)
    }, { enabled: !!groupId })
    const mutator = useMutation(["culturalGroups", groupId], (updates: any) => {
        return axios.patch("/api/culturalGroups/" + groupId, updates)
    }, { retry: 3 })
    const { setConfirmation, setWarning } = useNotifiers()

    useEffect(() => {
        handleCover(watch("cover"))
        handleProfile(watch("profile"))
    }, [watch("profile"), watch("cover")])

    useEffect(() => {
        if (isSuccess) handleSuccess()
    }, [isSuccess])

    if (mutator.isSuccess) handleCreate()
    if (mutator.isError) handleError()

    return { register, handleSubmit, errors, updateCulturalGroup, cover, profile, watch }

    function updateCulturalGroup(data: CulturalGroupsUpdateFormProps) {
        const formData = new FormData()

        formData.append("cover", getCover())
        formData.append("logo", getLogo())
        formData.append("city", data.city)
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("members", data.members.toString())

        mutator.mutate(formData)

        function getCover() {
            if (data.cover?.length) return data.cover[0]
            return cover
        }
        function getLogo() {
            if (data.profile?.length) return data.profile[0]
            return profile
        }
    }
    function handleProfile(fileList: FileList) {
        if (!fileList.length) return
        const fileReader = new FileReader()
        fileReader.onload = () => {
            if (!fileReader.result) return
            setProfile(fileReader.result.toString())
        }
        fileReader.readAsDataURL(fileList[0])
    }
    function handleCover(fileList: FileList) {
        if (!fileList.length) return
        const fileReader = new FileReader()
        fileReader.onload = () => {
            if (!fileReader.result) return
            setCover(fileReader.result.toString())
        }
        fileReader.readAsDataURL(fileList[0])
    }
    function handleSuccess() {
        if (!data?.data) return
        setValue("city", data.data.city)
        setValue("name", data.data.name)
        setValue("description", data.data.description)
        setValue("members", data.data.members)
        setValue("profile", watch("profile"))
        setValue("cover", watch("cover"))
        setProfile(data.data.logo.url)
        setCover(data.data.cover.url)
    }
    function handleCreate() {
        mutator.reset()
        setConfirmation({ content: "Saved SuccessFully" })
        navigate(-1)
    }
    function handleError() {
        setWarning({ content: "Sorry there was an error, please try again" })
        mutator.reset()
    }
}