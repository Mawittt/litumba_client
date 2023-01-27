import axios from "axios";
import { useQuery } from "react-query";
import { ROUTES } from "../assets/constant";
import { shoe_image, shoe_image_1, shoe_image_2, shoe_image_3 } from "../assets/images";
import { OtherProductProps, ProductDetailsProps } from "../types/types";
import { useNavigate, useOwner } from "../utils/hooks";

interface ProductInterface {
    authorUser: {
        online: boolean
    }
    authorBusiness: {
        author: { online: boolean }
    }
    authorBusinessId: string
    authorUserId: string
    previews: { url: string }[],
    name: string,
    description: string,
    price: number,
    city: string,
    country: string,
    quantity: number,
    id: string
}
interface OtherProductInterface {
    previews: { url: string }[]
    id: string
    name: string
    price: string
}


interface serverData {
    product: ProductInterface,
    otherProducts: OtherProductInterface[]
}


export default function useProductDetails() {
    let details: ProductDetailsProps | undefined = {
        selectedPreview: "",
        previews: [],
        name: "",
        description: "",
        price: "",
        location: "",
        amount: "",
        available: false,
        _id: ""
    }

    const { navigate, router } = useNavigate()

    let otherProducts: OtherProductProps[] = []
    const productId = router.query._id

    const { data, isSuccess, isLoading } = useQuery<{ data: serverData }, Error>(["products", productId], () => {
        return axios.get("/api/products/" + productId)
    }, { enabled: !!productId })
    const self = useOwner()

    if (isSuccess) handleSuccess()

    return { isLoading, details, otherProducts, openBusinessEditor, openConversation, openBrand, goBack, self }

    function openConversation() {
        navigate(ROUTES.conversations + "/conversation_id")
    }
    function openBrand() {
        if (data?.data.product.authorBusinessId) navigate(ROUTES.businesses.index + "/" + data?.data.product.authorBusinessId)
        if (data?.data.product.authorUserId) navigate(ROUTES.profile + "/" + data?.data.product.authorUserId)
    }
    function goBack() {
        router.back()
    }
    function openBusinessEditor() {
        navigate(ROUTES.market_place.products.update + "/" + data?.data.product.id)
    }
    function handleSuccess() {
        if (!data?.data) return
        const product = data.data.product
        const otherProductsFromServer = data.data.otherProducts
        details = {
            selectedPreview: product.previews[0].url,
            previews: getPreviews(),
            name: product.name,
            description: product.description,
            price: product.price.toString(),
            location: product.city + " " + product.country,
            amount: product.quantity.toString(),
            available: product.authorBusiness?.author.online || product.authorUser.online,
            _id: product.id
        }
        otherProducts = otherProductsFromServer.map(product => {
            return {
                image: product.previews[0].url,
                name: product.name,
                price: product.price,
                _id: product.id
            }
        })

        function getPreviews() {
            return product.previews.map(preview => {
                return preview.url
            })
        }
    }
}