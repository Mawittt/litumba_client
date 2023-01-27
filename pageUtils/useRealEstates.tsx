import axios from "axios"
import { useEffect, useRef } from "react"
import { useQuery } from "react-query"
import { avatar_1, brand_avatar_2, brand_avatar_3 } from "../assets/avatars"
import { ROUTES } from "../assets/constant"
import { realEstate_1, realEstate_2, realEstate_3 } from "../assets/images"
import { ProductProps, RealEstateDetailsProps, RealEstateProps, RealEstateSearchFormProps } from "../types/types"
import { scrollPageComponentToTop } from "../utils/fn"
import { useNavigate } from "../utils/hooks"

interface RealEstate {
    authorBusinessId: string
    authorBusiness: {
        logo: { url: string },
        website: string
        authorId: string
        id: string
    },
    authorUserId: string,
    authorUser: {
        profileImage: { url: string },
        id: string
    },
    city: string
    country: string,
    description: string,
    id: string,
    name: string,
    previews: { url: string }[]
    type: string,
    createdAt: string,
    price: number
}

interface ServerData {
    realEstates: RealEstate[]
    count: number,
    span: number,
    isMore: boolean
}

export default function useRealEstates() {
    let realEstates: RealEstateProps[] = []
    const { router, getQueryString, navigate } = useNavigate()
    const queryString = getQueryString(router.query)
    const cursor = useRef(0)
    const { data, isLoading, isSuccess, refetch, isRefetching } = useQuery<{ data: ServerData }, Error>(["realEstates", queryString], () => {
        return axios.get("/api/realEstates/" + queryString + "&cursor=" + cursor.current)
    }, {
        keepPreviousData: true
    })

    if (isSuccess) handleSuccess()

    return { isRefetching, isSuccess, isLoading, realEstates, searchRealEstate, openNext, openPrev, canNext, canPrev }

    function searchRealEstate(data: RealEstateSearchFormProps) {
        navigate(ROUTES.real_estate.index + "?search=" + data.searchString)
    }
    function handleSuccess() {
        console.log(data?.data)
        if (!data?.data) return
        realEstates = data?.data.realEstates.map(realEstate => {
            return {
                avatar: realEstate.authorBusiness?.logo.url || realEstate.authorUser?.profileImage.url,
                name: realEstate.name,
                location: realEstate.city + " " + realEstate.country,
                website: realEstate.authorBusiness?.website || "No website",
                image: realEstate.previews[0].url,
                description: realEstate.description,
                price: realEstate.price,
                _id: realEstate.id,
                isBrand: getIsBrand(),
                authorId: realEstate.authorBusiness?.authorId || realEstate.authorUserId
            }

            function getIsBrand() {
                return Boolean(realEstate.authorBusinessId)
            }
        })
    }
    function openNext() {
        if (!data?.data.isMore) return
        cursor.current++
        refetch()
        scrollPageComponentToTop()
    }
    function openPrev() {
        if (!cursor.current) return
        cursor.current--
        refetch()
        scrollPageComponentToTop()
    }
    function canPrev() {
        return Boolean(cursor.current)
    }
    function canNext() {
        return data?.data.isMore
    }
}