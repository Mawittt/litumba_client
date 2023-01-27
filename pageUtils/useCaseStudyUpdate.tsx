import { useForm } from "react-hook-form"
import { CaseStudyUpdateFormProps, CaseStudyUpdateInitialStateProps } from "../types/types"
import { useState, useEffect } from "react"
import { consulting_image_1 } from "../assets/images"
import { useNavigate, useNotifiers } from "../utils/hooks"
import { useMutation, useQuery } from "react-query"
import axios from "axios"

interface ServerCaseStudy {
    description: string,
    preview: { url: string },
    title: string,
    id: string
}

export default function useCaseStudyUpdate() {
    const [preview, setPreview] = useState<string>()
    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<CaseStudyUpdateFormProps>({
        defaultValues: {
            preview: '',
            description: "",
            title: ""
        }
    })
    useEffect(() => {
        handlePreview(watch("preview"))
    }, [watch("preview")])
    const { router, navigate } = useNavigate()
    const caseStudyId = router.query.id
    const { data, isSuccess } = useQuery<{ data: ServerCaseStudy }, Error>(["caseStudy", caseStudyId], () => {
        return axios.get("/api/caseStudies?id=" + caseStudyId)
    }, { enabled: !!caseStudyId })
    useEffect(() => {
        if (isSuccess) handleSuccess()
    }, [isSuccess])
    const mutator = useMutation(["caseStudies", caseStudyId], (updates: any) => {
        return axios.patch("/api/caseStudies?id=" + caseStudyId, updates)
    }, { retry: 3 })
    const { setConfirmation, setWarning } = useNotifiers()

    if (mutator.isSuccess) handleSave()
    if (mutator.isError) handleSaveError()

    return { mutator, register, handleSubmit, errors, watch, updateCaseStudy, preview }


    function updateCaseStudy(data: CaseStudyUpdateFormProps) {
        const formData = new FormData()
        formData.append("title", data.title)
        formData.append("description", data.description)
        formData.append("preview", getPreview())

        mutator.mutate(formData)

        function getPreview() {
            if (!data.preview) {
                if (preview) return preview
            }
            if (typeof (data.preview) === "string") return data.preview
            return data.preview[0]
        }
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
        if (!data?.data) return
        setValue("title", data.data.title)
        setValue("description", data.data.description)
        setPreview(data.data.preview.url)
    }
    function handleSave() {
        setConfirmation({ content: "Saved successfully" })
        mutator.reset()
    }
    function handleSaveError() {
        mutator.reset()
        setWarning({ content: "Sorry there was an error, please try again later." })
    }
}