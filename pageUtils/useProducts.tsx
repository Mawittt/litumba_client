import axios from "axios";
import { useRef } from "react";
import { useQuery } from "react-query";
import { avatar_1, brand_avatar_1, brand_avatar_2, brand_avatar_3 } from "../assets/avatars";
import { ROUTES } from "../assets/constant";
import { shoe_image, shoe_image_1, shoe_image_2 } from "../assets/images";
import { ProductProps, ProductSearchFormProps } from "../types/types";
import { useNavigate } from "../utils/hooks";

interface serverProduct {
    authorUser: {
        profileImage: { url: string }
    }
    authorBusiness: {
        logo: { url: string }
        website?: string
        authorId: string
    }
    authorUserId: string
    previews: { url: string }[]
    quantity: number
    description: string
    price: number
    country: number
    city: number
    name: string
    id: string
}

interface serverData {
    products: serverProduct[]
    isMore: boolean
    count: number
    span: number
}

export default function useProducts() {
    let products: ProductProps[] = []
    const { router, getQueryString, navigate } = useNavigate()
    const QueryString = getQueryString(router.query)
    const cursor = useRef(0)
    const { data, isSuccess, isLoading, isError, refetch } = useQuery<{ data: serverData }, Error>(["products", QueryString], () => {
        return axios.get("/api/products" + QueryString + "&cursor=" + cursor.current)
    })

    if (isSuccess) handleSuccess()

    return { isLoading, products, searchProduct, openNext, openPrev, canNext, canPrev }

    function searchProduct(data: ProductSearchFormProps) {
        navigate(ROUTES.market_place.products.index + "?search=" + data.searchString)
    }
    function handleSuccess() {
        if (!data?.data) return
        products = data.data.products.map((product): ProductProps => {
            return {
                avatar: product.authorBusiness?.logo.url || product.authorUser?.profileImage.url,
                name: product.name,
                location: product.city + " " + product.country,
                website: product.authorBusiness?.website || "No website",
                image: product.previews[0].url,
                description: product.description,
                price: product.price,
                amount: product.quantity,
                _id: product.id,
                isBrand: isBrand(),
                ownerId: product.authorBusiness?.authorId || product.authorUserId
            }

            function isBrand() {
                return Boolean(product.authorBusiness)
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