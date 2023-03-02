import { useForm } from "react-hook-form"
import { CreationAuthorType, RealEstateCreateFormProps } from "../types/types"
import { useNotifiers } from "../utils/hooks"
import { useState, useRef, useEffect } from "react"
import { useMutation } from "react-query"
import axios from "axios"
import useStore from "../store/useStore"



export default function useRealEstateCreate() {
    const { user } = useStore()
    const maxImages = 4
    const [previewImages, setPreviewImages] = useState<string[]>([])
    const previewsForServer = useRef<File[]>([])
    const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm<RealEstateCreateFormProps>({
        defaultValues: {
            name: "",
            type: "",
            price: 0,
            description: "",
            country: "",
            city: "",
            previews: ""
        }
    })
    const mutator = useMutation("realEstates", (realEstate: any) => {
        return axios.post("/api/realEstates", realEstate)
    }, { retry: 3 })
    const { setConfirmation, setWarning } = useNotifiers()
    const author = useRef<CreationAuthorType>()

    useEffect(() => {
        handlePreviews(watch("previews"))
    }, [watch("previews")])

    useEffect(() => {
        if (mutator.isSuccess) handleSuccess()
    }, [mutator.isSuccess])
    if (mutator.isError) handleError()

    return { mutator, register, handleSubmit, errors, createRealEstate, deleteImage, previewImages, setAuthor }

    function createRealEstate(data: RealEstateCreateFormProps) {
        if (!author.current) return setWarning({ content: "please select an author" })
        const formData = new FormData()
        addPreviewsToFormData()
        if (author.current.isBusiness) formData.append("authorBusinessId", author.current.authorId)
        if (!author.current.isBusiness) formData.append("authorUserId", user.id)
        formData.append("name", data.name)
        formData.append("type", data.type)
        formData.append("price", data.price.toString())
        formData.append("description", data.description)
        formData.append("country", data.country)
        formData.append("city", data.city)

        mutator.mutate(formData)
        function addPreviewsToFormData() {
            if (!previewsForServer.current) return
            for (let i = 0; i < previewsForServer.current.length; i++) {
                const image = previewsForServer.current[i];
                formData.append("previews", image)
            }
        }
    }
    function handlePreviews(previews: FileList | null | string) {
        if (!previews) return setPreviewImages([])
        if ((previewsForServer?.current?.length + previews?.length) > maxImages) return setWarning({ content: "please select a total of less than four Images." })
        for (let key = 0; key < previews.length; key++) {
            if (Object.prototype.hasOwnProperty.call(previews, key)) {
                const image = previews[key];
                const fileReader = new FileReader()
                fileReader.onload = () => {
                    setPreviewImages(images => {
                        if (!fileReader.result) return images
                        images = images.concat(fileReader.result?.toString())
                        return images
                    })
                }
                if (typeof (image) === "string") return
                fileReader.readAsDataURL(image)
                previewsForServer.current.push(image)

            }
        }
    }
    function deleteImage(id: number) {
        previewsForServer.current = previewsForServer.current.filter((img, index) => id != index)
        setPreviewImages(images => {
            return images.filter((image, index) => id != index)
        })
        if (!previewsForServer.current.length) setValue("previews", null)
    }
    function handleSuccess() {
        mutator.reset()
        setConfirmation({ content: "Saved successfully" })
        reset()
    }
    function handleError() {
        mutator.reset()
        setWarning({ content: "Sorry there was an error please try again" })
    }
    function setAuthor(authorId: string, isBusiness: boolean) {
        author.current = { authorId, isBusiness }
    }
} 