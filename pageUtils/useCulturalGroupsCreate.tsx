import { useForm } from "react-hook-form"
import { CulturalGroupsCreateFormProps } from "../types/types"
import { useState, useEffect } from "react"
import { useMutation } from "react-query"
import axios from "axios"
import useStore from "../store/useStore"
import { useNavigate, useNotifiers } from "../utils/hooks"




export default function useCulturalGroupsCreate() {
    const { user } = useStore()
    const [profile, setProfile] = useState<string>()
    const [cover, setCover] = useState<string>()
    const { register, handleSubmit, formState: { errors }, watch } = useForm<CulturalGroupsCreateFormProps>()
    const mutator = useMutation("culturalGroups", (group: any) => {
        return axios.post("/api/culturalGroups", group)
    }, { retry: 3 })
    const { setConfirmation, setWarning } = useNotifiers()
    const { navigate } = useNavigate()
    useEffect(() => {
        handleCover(watch("cover"))
        handleProfile(watch("profile"))
    }, [watch("profile"), watch("cover")])

    if (mutator.isSuccess) handleSuccess()
    if (mutator.isError) handleError()

    return { mutator, register, handleSubmit, errors, createCulturalGroup, cover, profile }

    function createCulturalGroup(data: CulturalGroupsCreateFormProps) {
        const formData = new FormData()
        formData.append("cover", data.cover[0])
        formData.append("logo", data.profile[0])
        formData.append("name", data.name)
        formData.append("city", data.city)
        formData.append("description", data.description)
        formData.append("members", data.members.toString())
        formData.append("authorId", user.id)
        mutator.mutate(formData)
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
        setConfirmation({ content: "Saved successfully" })
        mutator.reset()
        navigate(-1)
    }
    function handleError() {
        setWarning({ content: "sorry there was an error, please try again" })
        mutator.reset()
    }
}