import { useForm } from "react-hook-form"
import { CreationAuthorType, ProductCreateFormProps } from "../types/types"
import { useEffect, useState, useRef } from "react"
import { useNavigate, useNotifiers } from "../utils/hooks"
import { useMutation } from "react-query"
import axios from "axios"
import useStore from "../store/useStore"


export default function useProductCreate() {
    const { user } = useStore()
    const maxImages = 4
    const [previewImages, setPreviewImages] = useState<string[]>([])
    const { setConfirmation, setWarning } = useNotifiers()
    const { navigate } = useNavigate()
    const previewsForServer = useRef<File[]>([])
    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<ProductCreateFormProps>()
    useEffect(() => {
        handlePreviews(watch("previews"))
    }, [watch("previews")])
    const mutator = useMutation("products", (product: any) => {
        return axios.post("/api/products", product)
    }, { retry: 3 })
    const author = useRef<CreationAuthorType>()

    if (mutator.isSuccess) handleSuccess()
    if (mutator.isError) handleError()

    return { mutator, register, handleSubmit, errors, createProduct, previewImages, deleteImage, setAuthor }


    function createProduct(data: ProductCreateFormProps) {
        if (!author) return setWarning({ content: "Please select an author" })
        const formData = new FormData()
        addPreviewsToFormData()
        formData.append("name", data.name)
        formData.append("price", data.price)
        formData.append("quantity", data.quantity)
        formData.append("description", data.description)
        formData.append("niche", data.niche)
        formData.append("brand", data.brand)
        formData.append("country", data.country)
        formData.append("city", data.city)
        addAuthor()
        mutator.mutate(formData)

        function addPreviewsToFormData() {
            if (!previewsForServer.current) return
            for (let i = 0; i < previewsForServer.current.length; i++) {
                const image = previewsForServer.current[i];
                formData.append("previews", image)
            }
        }
        function addAuthor() {
            if (!author.current) return
            if (author.current?.isBusiness) formData.append("authorBusinessId", author.current.authorId)
            if (!author.current?.isBusiness) formData.append("authorUserId", user.id)
        }
    }
    function handlePreviews(previews: FileList | null) {
        if (!previews) return
        if ((previewsForServer?.current?.length + previews?.length) > maxImages) return setWarning({ content: "please select a total of less than four Images." })
        for (const key in previews) {
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
        navigate(-1)
    }
    function handleError() {
        mutator.reset()
        setWarning({ content: "Sorry there was an error, please try again" })
    }
    function setAuthor(authorId: string, isBusiness: boolean) {
        author.current = { authorId, isBusiness }
    }
}