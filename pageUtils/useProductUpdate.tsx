import { useForm } from "react-hook-form"
import { ProductCreateFormProps, ProductUpdateInitialProps } from "../types/types"
import { useEffect, useState, useRef } from "react"
import { useNavigate, useNotifiers } from "../utils/hooks"
import { image_1, image_3, image_31, shoe_image, shoe_image_1, shoe_image_2, shoe_image_3 } from "../assets/images"
import { useMutation, useQuery } from "react-query"
import axios from "axios"

interface ProductInterface {
    authorUser: {
        online: boolean
    }
    authorBusiness: {
        author: { online: boolean }
    }
    authorBusinessId: string
    authorUserId: string
    previews: { url: string }[],
    name: string,
    description: string,
    price: number,
    city: string,
    country: string,
    quantity: number,
    niche: string,
    brand: string,
    id: string
}
interface OtherProductInterface {
    previews: { url: string }[]
    id: string
    name: string
    price: string
}


interface serverData {
    product: ProductInterface,
    otherProducts: OtherProductInterface[]
}

export default function useProductUpdate() {
    const maxImages = 4
    const [previewImages, setPreviewImages] = useState<string[]>([])
    const [previewServerImages, setPreviewServerImages] = useState<string[]>([])
    const previewsForServer = useRef<File[]>([])
    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<ProductCreateFormProps>()
    const { router } = useNavigate()
    const productId = router.query.id
    const { data, isSuccess } = useQuery<{ data: serverData }, Error>(["products", productId], () => {
        return axios.get("/api/products/" + productId)
    }, { enabled: !!productId })
    const mutator = useMutation(["products", productId], (product: any) => {
        return axios.patch("/api/products/" + productId, product)
    }, { retry: 3 })
    const { navigate } = useNavigate()
    const { setConfirmation, setWarning } = useNotifiers()


    useEffect(() => {
        handlePreviews(watch("previews"))
    }, [watch("previews")])
    useEffect(() => {
        if (isSuccess) handleSuccess()
    }, [isSuccess])

    if (mutator.isSuccess) handleSave()
    if (mutator.isError) handleError()




    return { mutator, previewServerImages, deleteServerImage, register, handleSubmit, errors, UpdateProduct, previewImages, deleteImage }


    function UpdateProduct(data: ProductCreateFormProps) {
        const formData = new FormData()
        addImagesToFormData()
        formData.append("name", data.name)
        formData.append("price", data.price)
        formData.append("quantity", data.quantity)
        formData.append("description", data.description)
        formData.append("niche", data.niche)
        formData.append("brand", data.brand)
        formData.append("country", data.country)
        formData.append("city", data.city)

        mutator.mutate(formData)

        function addImagesToFormData() {
            previewServerImages.map(image => {
                formData.append("previews", image)
            })
            previewsForServer.current.map(preview => {
                formData.append("previews", preview)
            })
        }


    }
    function handlePreviews(previews: FileList | null) {
        if (!previews) return
        if ((previewsForServer?.current?.length + previews?.length + previewServerImages.length) > maxImages) return setWarning({ content: "please select a total of less than four Images." })
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
    function deleteServerImage(id: number) {
        setPreviewServerImages(images => {
            return images.filter((image, index) => id != index)
        })
        if (!previewServerImages.length) setValue("previews", null)
    }
    function handleSuccess() {

        if (!data) return
        const product = data?.data.product

        setValue("brand", product.brand)
        setValue("name", product.name)
        setValue("price", product.price.toString())
        setValue("quantity", product.quantity.toString())
        setValue("description", product.description)
        setValue("niche", product.niche)
        setValue("country", product.country)
        setValue("city", product.city)

        setPreviewServerImages(getImages())
        function getImages() {
            return product.previews.map(preview => {
                return preview.url
            })
        }
    }
    function handleSave() {
        mutator.reset()
        navigate(-1)
        setConfirmation({ content: "Saved Successfully" })
    }
    function handleError() {
        setWarning({ content: "sorry there was an error, please try again" })
        mutator.reset()
    }
}