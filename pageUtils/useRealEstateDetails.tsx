import { Businesses, RealEstates, Users } from "@prisma/client";
import axios from "axios";
import { useQuery } from "react-query";
import { ROUTES } from "../assets/constant";
import { business_image_1, realEstate_1, realEstate_2, realEstate_3, shoe_image, shoe_image_1, shoe_image_2, shoe_image_3 } from "../assets/images";
import { OtherRealEstateProps, RealEstateDetailsProps } from "../types/types";
import { useNavigate, useOwner } from "../utils/hooks";


interface serverData {
    realEstate: RealEstates & { authorUser: Users, authorBusiness: Businesses & { author: Users } }
    otherEstates: RealEstates[]
}



export default function useRealEstateDetails() {
    const { navigate, router } = useNavigate()
    const realEstateId = router.query.id
    const { data, isSuccess, isLoading } = useQuery<{ data: serverData }, Error>(["realEstates", realEstateId], () => {
        return axios.get("/api/realEstates/" + realEstateId)
    }, { enabled: !!realEstateId })


    let details: RealEstateDetailsProps | null = {
        selectedPreview: "",
        previews: [],
        name: "",
        description: "",
        price: "",
        location: "",
        available: true,
        _id: 1
    }

    let otherRealEstate: OtherRealEstateProps[] = []

    const self = useOwner(data?.data.realEstate.authorUserId || data?.data.realEstate.authorBusiness.aut)
    if (isSuccess) handleSuccess()

    return { isLoading, isSuccess, details, otherRealEstate, openRealEstateEditor, openConversation, openBrand, goBack, self }

    function openConversation() {
        navigate(ROUTES.conversations + "/conversation_id")
    }
    function openBrand() {
        if (data?.data.realEstate.authorBusinessId) navigate(ROUTES.businesses.index + "/" + data.data.realEstate.authorBusinessId)
        if (data?.data.realEstate.authorUserId) navigate(ROUTES.profile + "/" + data.data.realEstate.authorUserId)
    }
    function goBack() {
        router.back()
    }
    function openRealEstateEditor() {
        navigate(ROUTES.real_estate.update + "/" + data?.data.realEstate.id)
    }
    function handleSuccess() {
        if (!data?.data) return
        const realEstate = data.data.realEstate
        const otherEstates = data.data.otherEstates
        details = {
            selectedPreview: realEstate.previews[0].url,
            previews: getPreviews(),
            name: realEstate.name,
            description: realEstate.description,
            price: realEstate.price.toString(),
            location: realEstate.city + " " + realEstate.country,
            available: realEstate.authorBusiness?.author.online || realEstate.authorUser.online,
            _id: realEstate.id
        }

        otherRealEstate = otherEstates.map(otherEstate => {
            return {
                image: otherEstate.previews[0].url,
                name: otherEstate.name,
                price: otherEstate.price.toString(),
                _id: otherEstate.id
            }
        })


        function getPreviews() {
            return realEstate.previews.map(image => image.url)
        }
    }
}