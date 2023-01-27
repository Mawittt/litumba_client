import axios from "axios"
import { useRef } from "react"
import { useQuery } from "react-query"
import { avatar_3, brand_avatar_1, brand_avatar_2 } from "../assets/avatars"
import { ROUTES } from "../assets/constant"
import { BusinessProps, BusinessSearchFormProps } from "../types/types"
import { getElapsedTime } from "../utils/fn"
import { useNavigate } from "../utils/hooks"

interface ServerBusinessInterface {
    logo: { url: string },
    name: string,
    country: string,
    city: string,
    description: string,
    niche: string,
    phone: string,
    email: string,
    website: string,
    authorId: string
    id: string
}

interface ServerData {
    businesses: ServerBusinessInterface[]
    isMore: boolean
    count: number
    span: number
}

export default function useBusinesses() {
    let businesses: BusinessProps[] = []
    const { navigate } = useNavigate()
    const { router, getQueryString } = useNavigate()
    const queryString = getQueryString(router.query)
    const cursor = useRef(0)
    const { data, isSuccess, isError, isLoading, isFetching, refetch } = useQuery<{ data: ServerData }, Error>(["jobs", queryString, cursor.current], () => {
        return axios.get("/api/businesses/" + queryString + "&cursor=" + cursor.current)
    }, { keepPreviousData: true })

    if (isSuccess) handleData()

    return { businesses, searchBusiness, openPrev, canPrev, openNext, canNext, isLoading, isFetching }

    function searchBusiness(data: BusinessSearchFormProps) {
        navigate(ROUTES.businesses.index + "?search=" + data.searchString)
    }
    function handleData() {
        const newBusinesses: BusinessProps[] = []
        data?.data.businesses?.forEach(businesses => {
            const newBusiness: BusinessProps = {
                avatar: businesses.logo.url,
                name: businesses.name,
                email: businesses.email || "No email",
                website: businesses.website || "No website",
                description: businesses.description,
                tags: getTags(),
                _id: businesses.id,
                authorId: businesses.authorId
            }

            function getTags() {
                const tags: string[] = [businesses.niche, businesses.city, businesses.country]
                return tags.filter(Boolean)
            }

            newBusinesses.push(newBusiness)
        })

        businesses = newBusinesses
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