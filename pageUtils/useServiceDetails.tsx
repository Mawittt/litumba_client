import { Businesses, CaseStudy, Reviews, Services, Users } from "@prisma/client";
import axios from "axios";
import { title } from "process";
import { useState } from "react";
import { useQuery } from "react-query";
import { avatar_1, avatar_2, brand_avatar_1 } from "../assets/avatars";
import { ROUTES } from "../assets/constant";
import { business_image_1, consulting_image_1, consulting_image_2, consulting_image_3 } from "../assets/images";
import { ReviewProps, ServiceDetailsProps, UseCaseProps } from "../types/types";
import { getElapsedTime } from "../utils/fn";
import { useNavigate, useOwner } from "../utils/hooks";





type ServerService = Services & { authorUser: Users, authorBusiness: Businesses & { author: Users }, caseStudies: CaseStudy[], reviews: (Reviews & { author: Users })[] }

export default function useServiceDetails() {
    const { navigate, router } = useNavigate()
    const serviceId = router.query._id
    const { data, isSuccess, isLoading } = useQuery<{ data: ServerService }, Error>(["services", serviceId], () => {
        return axios.get("/api/services/" + serviceId)
    }, { enabled: !!serviceId })
    const [moreReviews, setMoreReviews] = useState(false)

    let useCases: UseCaseProps[] = []
    let reviews: ReviewProps[] = []
    const self = useOwner(data?.data.authorUserId || data?.data.authorBusiness.authorId || "")

    let details: ServiceDetailsProps = {
        cover: "",
        avatar: "",
        author: "",
        email: "",
        website: "",
        title: "",
        description: "",
        price: "",
        niche: "",
        available: false,
        _id: 1,
        isBrand: false
    }
    if (isSuccess) handleSuccess()

    return { moreReviews, toggleReviews, isSuccess, self, details, useCases, reviews, openServiceEditor, openBrand, openConversation, goBack }
    function handleSuccess() {
        if (!data?.data) return
        details = {
            cover: data.data.authorBusiness?.coverImage.url || data.data.authorUser?.coverImage.url || "",
            avatar: data.data.authorBusiness?.logo.url || data.data.authorUser?.profileImage.url || "",
            author: data.data.authorBusiness?.name || (data.data.authorUser?.firstName + " " + data.data.authorUser?.lastName),
            email: data.data.authorBusiness?.email || data.data.authorBusiness?.email || "No Email",
            website: data.data.authorBusiness?.website || "No website",
            title: data.data.name,
            description: data.data.description,
            price: data.data.price + " frs",
            niche: data.data.niche,
            available: data.data.authorBusiness?.author.online || data.data.authorUser?.online || false,
            _id: data.data.id,
            isBrand: getIsBrand()
        }
        useCases = data.data.caseStudies.map(caseStudy => {
            return {
                title: caseStudy.title,
                description: caseStudy.description,
                image: caseStudy.preview.url,
                _id: caseStudy.id
            }
        })
        if (moreReviews) {
            reviews = data.data.reviews.map(review => {
                return {
                    avatar: review.author.profileImage.url,
                    name: review.author.firstName + " " + review.author.lastName,
                    time: getElapsedTime(review.createdAt.toString()),
                    stars: parseInt(review.stars.toString()),
                    comment: review.description,
                    _id: review.id
                }
            })
        } else {

            reviews = data.data.reviews.slice(0, 3).map(review => {
                return {
                    avatar: review.author.profileImage.url,
                    name: review.author.firstName + " " + review.author.lastName,
                    time: getElapsedTime(review.createdAt.toString()),
                    stars: parseInt(review.stars.toString()),
                    comment: review.description,
                    _id: review.id
                }
            })
        }
    }
    function openBrand() {
        if (data?.data.authorBusinessId) navigate(ROUTES.businesses.index + "/" + data.data.authorBusinessId)
        if (data?.data.authorUserId) navigate(ROUTES.profile + "/" + data?.data.authorUserId)
    }
    function openConversation() {
        navigate(ROUTES.conversations + "/" + (data?.data.authorBusiness?.authorId || data?.data.authorUser?.id))
    }
    function goBack() {
        router.back()
    }
    function openServiceEditor() {
        navigate(ROUTES.market_place.services.update + "/" + data?.data.id)
    }
    function getIsBrand() {
        return Boolean(data?.data.authorBusinessId)
    }
    function toggleReviews() {
        setMoreReviews(state => !state)
    }
}