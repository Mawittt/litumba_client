import axios from "axios"
import { useQuery } from "react-query"
import { ROUTES } from "../assets/constant"
import { consulting_image_1 } from "../assets/images"
import { CaseStudyProps } from "../types/types"
import { useNavigate } from "../utils/hooks"

interface ServerCaseStudy {
    description: string,
    preview: { url: string },
    title: string,
    id: string
}


export default function useCaseStudyDetails() {
    let caseStudy: CaseStudyProps = {
        preview: "",
        title: "",
        description: "",
        _id: ""
    }
    const { navigate, router } = useNavigate()
    const caseStudyId = router.query.id
    const { data, isSuccess } = useQuery<{ data: ServerCaseStudy }, Error>(["caseStudy", caseStudyId], () => {
        return axios.get("/api/caseStudies?id=" + caseStudyId)
    }, { enabled: !!caseStudyId })

    if (isSuccess) handleSuccess()
    return { isSuccess, caseStudy, updateCaseStudy }

    function updateCaseStudy() {
        navigate(ROUTES.market_place.services.caseStudy.update + "/" + caseStudy._id)
    }
    function handleSuccess() {
        if (!data?.data) return
        caseStudy = {
            preview: data.data.preview.url,
            title: data.data.title,
            description: data.data.description,
            _id: data.data.id
        }
    }
}