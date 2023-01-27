import axios from "axios"
import { useRef } from "react"
import { useForm } from "react-hook-form"
import { useQuery } from "react-query"
import { brand_avatar_1, brand_avatar_2, brand_avatar_3 } from "../assets/avatars"
import { ROUTES } from "../assets/constant"
import LitumbaHub from "../pages/litumba_hub"
import { LitumbaHubSearchFormProps, ServiceProps } from "../types/types"
import { useNavigate } from "../utils/hooks"

interface LitumbaHub {
    authorBusinessId: string,
    authorBusiness: {
        logo: { url: string },
        authorId: string,
        website: string,
    },
    authorUserId: string,
    authorUser: {
        profileImage: { url: string },
        id: string
    },
    city: string,
    country: string,
    createdAt: string,
    description: string,
    hub: string,
    id: string,
    name: string,
    niche: string,
    price: number,
}

interface ServerData {
    litumbaHubs: LitumbaHub[],
    isMore: boolean,
    count: number,
    span: number
}


export default function useLitumbaHub() {
    let services: ServiceProps[] = []
    const { router, navigate, getQueryString } = useNavigate()
    const queryString = getQueryString(router.query)
    const cursor = useRef(0)
    const { data, isSuccess, isLoading, refetch, isRefetching } = useQuery<{ data: ServerData }>(["litumbaHubs", queryString, cursor.current], () => {
        return axios.get("/api/litumbaHubs/" + queryString + "&cursor=" + cursor.current)
    }, { keepPreviousData: true })

    if (isSuccess) handleSuccess()

    return { services, searchLitumbaHub, isLoading, canNext, canPrev, openNext, openPrev, isRefetching, isSuccess }

    function searchLitumbaHub(data: LitumbaHubSearchFormProps) {
        navigate(ROUTES.litumba_hub.index + "?search=" + data.searchString)
        console.log(data)
    }
    function handleSuccess() {
        if (!data?.data) return
        services = data.data.litumbaHubs.map(LitumbaHub => {
            return {
                avatar: LitumbaHub.authorBusiness?.logo.url || LitumbaHub.authorUser.profileImage.url,
                title: LitumbaHub.name,
                location: LitumbaHub.city + " " + LitumbaHub.country,
                website: LitumbaHub.authorBusiness?.website || "No website",
                description: LitumbaHub.description,
                tags: getTags(),
                _id: LitumbaHub.id,
                authorId: LitumbaHub.authorBusiness?.authorId || LitumbaHub.authorUserId,
                isBrand: getIsBrand()
            }

            function getTags() {
                return [LitumbaHub.price + " frs", LitumbaHub.niche, LitumbaHub.hub]
            }
            function getIsBrand() {
                return Boolean(LitumbaHub.authorBusinessId)
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