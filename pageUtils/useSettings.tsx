import { Users } from "@prisma/client"
import axios from "axios"
import React, { ChangeEvent, useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { useMutation, useQuery } from "react-query"
import { avatar_1 } from "../assets/avatars"
import { person_cover_image, profile_image_for_background } from "../assets/images"
import useStore from "../store/useStore"
import { SettingsFormProps } from "../types/types"


export default function useSettings() {
    const { user } = useStore()
    const [cover, setCover] = useState<string>("")
    const [profile, setProfile] = useState<string>("")
    const imagesFromServer = useRef({ cover: "", profile: "" })
    const imagesForServer = useRef<{ cover: null | Blob, profile: null | Blob }>({ cover: null, profile: null })
    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<SettingsFormProps>()
    const { data, isSuccess } = useQuery<{ data: Users }, Error>(["user", { userId: user.id }], () => {
        return axios.get("/api/user/" + user.id)
    }, { enabled: !!user.id })
    const mutator = useMutation(["user", { userId: user.id }], (updates: any) => {
        return axios.post("/api/user/" + user.id, updates)
    })

    useEffect(() => {
        if (isSuccess) handleSuccess()
    }, [isSuccess, data?.data])

    if (mutator.isSuccess) handleSettingsSaved()

    return { cover, profile, register, handleSubmit, errors, watch, saveSettings, setCoverImage, setProfileImage }

    function saveSettings(data: SettingsFormProps) {
        const formData = new FormData()
        formData.append("firsName", data.firstName)
        formData.append("lastName", data.lastName)
        formData.append("country", data.country)
        formData.append("city", data.city)
        formData.append("description", data.description)
        formData.append("profession", data.profession)
        formData.append("phone", data.phone)
        formData.append("email", data.email)
        formData.append("emailOnProfile", data.privacy.emailOnProfile.toString())
        formData.append("phoneOnProfile", data.privacy.phoneOnProfile.toString())
        formData.append("coverImage", getCoverImage())
        formData.append("profileImage", getProfileImage())
        console.log(data)

        function getCoverImage() {
            if (imagesForServer.current.cover) return imagesForServer.current.cover
            return imagesFromServer.current.cover
        }
        function getProfileImage() {
            if (imagesForServer.current.profile) return imagesForServer.current.profile
            return imagesFromServer.current.profile
        }
    }
    function handleSuccess() {
        if (!data?.data) return
        setValue("privacy.emailOnProfile", data.data.privacy.emailOnProfile)
        setValue("privacy.phoneOnProfile", data.data.privacy.phoneOnProfile)
        setValue("firstName", data.data.firstName)
        setValue("lastName", data.data.lastName)
        setValue("country", data.data.country)
        setValue("city", data.data.city)
        setValue("description", data.data.description)
        setValue("profession", data.data.profession)
        setValue("phone", data.data.phone)
        setValue("email", data.data.email)

        imagesFromServer.current = {
            cover: data.data.coverImage.url,
            profile: data.data.profileImage.url
        }
        setProfile(data.data.profileImage.url)
        setCover(data.data.coverImage.url)
    }
    function setCoverImage(e: React.ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) return

        const coverImage = e.target.files[0]
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setCover(fileReader.result?.toString() || "")
            imagesForServer.current.cover = coverImage
        }
        fileReader.readAsDataURL(coverImage)
    }
    function setProfileImage(e: React.ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) return

        const profileImage = e.target.files[0]
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setProfile(fileReader.result?.toString() || "")
            imagesForServer.current.profile = profileImage
        }
        fileReader.readAsDataURL(profileImage)
    }
    function handleSettingsSaved() {
        console.log(mutator.data?.data)
    }
}