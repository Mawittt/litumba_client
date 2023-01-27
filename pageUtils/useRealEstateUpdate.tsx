
import { useForm } from "react-hook-form"
import { RealEstateUpdateFormProps, RealEstateUpdateInitialValuesProps } from "../types/types"
import { useNavigate, useNotifiers } from "../utils/hooks"
import { useState, useRef, useEffect } from "react"
import { business_image_1, realEstate_1, realEstate_2, realEstate_3 } from "../assets/images"
import { useMutation, useQuery } from "react-query"
import axios from "axios"

interface realEstate {
    authorBusinessId: string;
    authorBusiness: {
        author: {
            online: boolean
        }
    }
    authorUserId: string
    authorUser: {
        online: boolean
    },
    city: string,
    country: string,
    description: string,
    id: string,
    name: string,
    previews: { url: string }[],
    price: number,
    type: string,
    createdAt: string
}

interface serverData {
    realEstate: realEstate
    otherEstates: realEstate[]
}

export default function useRealEstateUpdate() {
    const maxImages = 4
    const [previewImages, setPreviewImages] = useState<string[]>([])
    const [previewServerImages, setPreviewServerImages] = useState<string[]>([])
    const { setConfirmation, setWarning } = useNotifiers()
    const previewsForServer = useRef<File[]>([])
    const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm<RealEstateUpdateFormProps>({
        defaultValues: {
            name: "",
            type: "",
            price: 0,
            description: "",
            country: "",
            city: "",
            previews: null
        }
    })
    const { router, navigate } = useNavigate()
    const realEstateId = router.query.id
    const { data, isSuccess } = useQuery<{ data: serverData }, Error>(["realEstate", realEstateId], () => {
        return axios.get("/api/realEstates/" + realEstateId)
    }, { enabled: !!realEstateId })
    const mutator = useMutation(["realEstates", realEstateId], (updates: any) => {
        return axios.patch("/api/realEstates/" + realEstateId, updates)
    }, { retry: 3 })


    useEffect(() => {
        handlePreviews(watch("previews"))
    }, [watch("previews")])

    useEffect(handleSuccess, [isSuccess])
    if (mutator.isSuccess) handleSave()
    if (mutator.isError) handleError()

    return { previewServerImages, deleteServerImage, register, handleSubmit, errors, updateRealEstate, deleteImage, previewImages, watch, }

    function updateRealEstate(data: RealEstateUpdateFormProps) {
        const formData = new FormData()
        appendImagesToFormData()
        formData.append("name", data.name)
        formData.append("type", data.type)
        formData.append("price", data.price.toString())
        formData.append("description", data.description)
        formData.append("country", data.country)
        formData.append("city", data.city)

        mutator.mutate(formData)

        function appendImagesToFormData() {
            previewServerImages.map(image => {
                formData.append("previews", image)
            })
            previewsForServer.current.map(image => {
                formData.append("previews", image)
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
        if (!data?.data) return
        const realEstate = data.data.realEstate
        setValue("city", realEstate.city)
        setValue("type", realEstate.type)
        setValue("name", realEstate.name)
        setValue("price", realEstate.price)
        setValue("description", realEstate.description)
        setValue("country", realEstate.country)

        setPreviewServerImages(getPreviews())

        function getPreviews() {
            return realEstate.previews.map(realEstate => {
                return realEstate.url
            })
        }
    }
    function handleSave() {
        setConfirmation({ content: "Saved successfully" })
        mutator.reset()
    }
    function handleError() {
        setWarning({ content: "sorry there was an error, please try again" })
    }
} 