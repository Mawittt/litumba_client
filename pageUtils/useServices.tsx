import axios from "axios"
import { useRef } from "react"
import { useQuery } from "react-query"
import { brand_avatar_1, brand_avatar_2, brand_avatar_3 } from "../assets/avatars"
import { ROUTES } from "../assets/constant"
import { ServiceProps, ServicesSearchFormProps } from "../types/types"
import { useNavigate } from "../utils/hooks"

interface ServerService {
    authorBusinessId?: string
    authorBusiness?: {
        logo: { url: string }
        authorId: string
        website: string
    }
    authorUser?: {
        profileImage: { url: string }
        id: string
    },
    authorUserId?: string,
    city: string,
    country: string,
    createAt: string,
    description: string,
    hub: "Regular" | "Litumba",
    id: string,
    name: string,
    niche: string,
    price: number,
}

interface ServerData {
    services: ServerService[],
    isMore: boolean,
    count: number,
    span: number
}


export default function useServices() {


    const { navigate, router, getQueryString } = useNavigate()
    const searchQuery = getQueryString(router.query)
    const cursor = useRef(0)
    const { data, isLoading, isSuccess, refetch, isRefetching } = useQuery<{ data: ServerData }, Error>(["services", searchQuery, cursor.current], () => {
        return axios.get("/api/services" + searchQuery + "&cursor=" + cursor.current)
    })

    let services: ServiceProps[] = []
    if (isSuccess) handleSuccess()

    return { services, searchServices, openNext, openPrev, canNext, canPrev, isLoading, isRefetching }

    function searchServices(string: ServicesSearchFormProps) {
        navigate(ROUTES.market_place.services.index + "?search=" + string.searchString)
    }
    function handleSuccess() {
        if (!data?.data) return
        services = data.data.services.map(service => {
            return {
                avatar: service.authorBusiness?.logo.url || service.authorUser?.profileImage.url || "",
                title: service.name,
                location: service.city + " " + service.country,
                website: service.authorBusiness?.website || "No website",
                description: service.description,
                tags: getTags(),
                _id: service.id,
                authorId: service.authorBusiness?.authorId || service.authorUser?.id || "",
                isBrand: getIsBrand()
            }
            function getTags() {
                return [service.price + " frs", service.niche, service.hub]
            }
            function getIsBrand() {
                return Boolean(service.authorBusinessId)
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