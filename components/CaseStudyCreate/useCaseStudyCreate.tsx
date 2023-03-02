import { useForm } from "react-hook-form"
import { CaseStudyUpdateFormProps, CaseStudyUpdateInitialStateProps, CreateCaseStudyProps } from "../../types/types"
import { useState, useEffect, useRef } from "react"
import { consulting_image_1 } from "../../assets/images"
import { useMutation } from "react-query"
import axios from "axios"


export default function useCaseStudyCreate({ serviceId }: CreateCaseStudyProps) {
    const [preview, setPreview] = useState<string>()
    const { register, handleSubmit, formState: { errors }, watch, reset, setValue } = useForm<CaseStudyUpdateFormProps>({
        defaultValues: {
            preview: "",
            title: "",
            description: '',
            _id: ""
        }
    })
    const mutator = useMutation("caseStudies", (caseStudy: any) => {
        return axios.post("/api/caseStudies", caseStudy)
    })

    if (mutator.isSuccess) handleSuccess()
    useEffect(() => {
        handlePreview(watch("preview"))
    }, [watch("preview")])

    return { mutator, register, handleSubmit, errors, watch, createCaseStudy, preview }


    function createCaseStudy(data: CaseStudyUpdateFormProps) {
        const formData = new FormData()
        formData.append("title", data.title)
        formData.append("description", data.description)
        formData.append("preview", data.preview[0])
        formData.append("serviceId", serviceId)
        mutator.mutate(formData)
    }
    function handlePreview(data: FileList | string) {
        if (typeof (data) === "string") return setPreview("")
        if (!data.length) return
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPreview(fileReader.result?.toString())
        }
        fileReader.readAsDataURL(data[0])
    }
    function handleSuccess() {
        mutator.reset()
        reset({
            title: "",
            description: "",
            preview: ""
        })
        console.log(mutator.data?.data)
    }
}