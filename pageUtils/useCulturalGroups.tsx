import axios from "axios"
import { useRef } from "react"
import { useQuery } from "react-query"
import { ROUTES } from "../assets/constant"
import { group_image_1 } from "../assets/images"
import { culturalGoupsProps, CulturalGroupSearchFormProps } from "../types/types"
import { useNavigate } from "../utils/hooks"

interface CulturalGroup {
    authorId: string,
    city: string,
    cover: { url: string },
    description: string,
    id: string,
    logo: { url: string },
    members: number,
    name: string,
    createdAt: string
}

interface ServerData {
    culturalGroups: CulturalGroup[]
    isMore: boolean,
    count: number,
    span: number,
}



export default function useCulturalGroups() {


    const { router, getQueryString, navigate } = useNavigate()
    const queryString = getQueryString(router.query)
    const cursor = useRef(0)
    const { data, isSuccess, refetch, isLoading, isRefetching } = useQuery<{ data: ServerData }, Error>(["culturalGroups", queryString, cursor.current], () => {
        return axios.get("/api/culturalGroups" + queryString + "&cursor=" + cursor.current)
    }, {
        keepPreviousData: true
    })
    let groups: culturalGoupsProps[] = []

    if (isSuccess) handleSuccess()
    return { isRefetching, isSuccess, isLoading, groups, searchGroup, canNext, canPrev, openNext, openPrev }

    function searchGroup(data: CulturalGroupSearchFormProps) {
        navigate(ROUTES.cultural_groups.index + "?search=" + data.searchString)
    }
    function handleSuccess() {
        console.log(data?.data)
        if (!data?.data) return
        const cultural_groups = data.data.culturalGroups
        groups = cultural_groups.map(cultural_group => {
            return {
                image: cultural_group.logo.url,
                name: cultural_group.name,
                location: cultural_group.city + " Cameroon",
                members: cultural_group.members,
                id: cultural_group.id,
                authorId: cultural_group.authorId
            }
        })
    }
    function openNext() {
        if (!data?.data.isMore) return
        cursor.current++
        refetch()
    }
    function openPrev() {
        if (!cursor.current) return
        cursor.current--
        refetch()
    }
    function canPrev() {
        return Boolean(cursor.current)
    }
    function canNext() {
        return data?.data.isMore
    }
}