import { useForm } from "react-hook-form"
import { useEffect, useRef, useState } from "react"
import { useNavigate, useNotifiers } from "../../utils/hooks"
import { PostInputProps } from "../../types/types"
import { useMutation, useQuery } from "react-query"
import axios from "axios"
import useStore from "../../store/useStore"
import { ROUTES } from "../../assets/constant"
import { Users } from "@prisma/client"

export default function useAddPost() {
    let userAvatar = ""
    const { user } = useStore()
    const [image, setImage] = useState("")
    const [video, setVideo] = useState("")
    const mediaFlag = useRef<"none" | "image" | "video">("none")
    const { setConfirmation, setWarning } = useNotifiers()
    const { register, handleSubmit, watch, setValue, reset } = useForm({
        defaultValues: {
            postImageInput: null,
            postVideoInput: null,
            postTextInput: ""
        }
    })
    const mutator = useMutation((newPost: any) => {
        return axios.post("/api/posts", newPost)
    }, { retry: 3 })
    const { navigate } = useNavigate()
    const { data, isLoading } = useQuery<{ data: Users }, Error>(["user", { userId: user.id }], () => {
        return axios.get("api/user/" + user.id)
    }, { enabled: !!user.id })
    useEffect(() => {
        if (mutator.isSuccess) handleMutationSuccess()
        if (mutator.isError) handleMutationError()
    }, [mutator.isSuccess, mutator.isError])
    useEffect(() => {
        watchImage(watch("postImageInput"))
        watchVideo(watch("postVideoInput"))
    }, [watch("postImageInput"), watch("postVideoInput")])

    if (data?.data) userAvatar = data.data.profileImage.url


    return { userAvatar, isLoading, openProfile, register, handleSubmit, sendPost, image, video, setImageFlag, setVideoFlag, clearMedia, mutator }

    function watchImage(data: FileList | null) {
        if (!data) return
        if (!data.length) return
        if (mediaFlag.current !== "image") return
        console.log("this is setting the image")
        setValue("postVideoInput", null)
        setVideo('')
        const fileReader = new FileReader()
        fileReader.onload = displayImage
        fileReader.readAsDataURL(data[0])

        function displayImage() {
            if (typeof (fileReader.result) !== "string") return
            setImage(fileReader.result)
        }

    }
    function watchVideo(data: FileList | null) {
        const maxSize = 35 * 1024 * 1024
        if (!data) return
        if (!data.length) return
        if (mediaFlag.current !== "video") return
        if (!isAcceptableSize(data)) return setAlert({ content: "Sorry, the video size is too large please select a lighter version" })
        setValue("postImageInput", null)
        setImage('')
        const fileReader = new FileReader()
        fileReader.onload = displayImage
        fileReader.readAsDataURL(data[0])

        function displayImage() {
            if (typeof (fileReader.result) !== "string") return
            setVideo(fileReader.result)
        }
        function isAcceptableSize(data: FileList) {

            return data[0].size < maxSize
        }
    }
    function sendPost(data: PostInputProps) {
        if (dataIsEmpty(data)) return
        const formData = getFormData(data)
        mutator.mutate(formData)

        function dataIsEmpty(data: PostInputProps) {
            if (data.postTextInput) return false
            if (data.postVideoInput) return false
            if (data.postImageInput) return false
            return true
        }
        function getFormData(data: PostInputProps) {
            const formData = new FormData()
            if (data.postImageInput?.length) formData.append("postImage", data.postImageInput[0])
            if (data.postVideoInput?.length) formData.append("postVideo", data.postVideoInput[0])
            if (data.postTextInput) formData.append("postText", data.postTextInput)
            formData.append("userId", user.id)
            return formData
        }
    }
    function setImageFlag() {
        mediaFlag.current = "image"
    }
    function setVideoFlag() {
        mediaFlag.current = "video"
    }
    function clearMedia() {
        setValue("postImageInput", null)
        setValue("postVideoInput", null)
        setImage('')
        setVideo('')
    }
    function handleMutationSuccess() {
        setValue("postTextInput", "")
        mediaFlag.current = "none"
        mutator.reset()
        clearMedia()
        setConfirmation({ content: "post saved" })
    }
    function handleMutationError() {
        setWarning({ content: "please try again" })
        mutator.reset()
    }
    function openProfile() {
        navigate(ROUTES.profile)
    }
}