import { Businesses, Follows, Jobs, Products, Users } from "@prisma/client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { ROUTES } from "../assets/constant";
import useStore from "../store/useStore";
import { BusinessProps, JobProps, ProductProps, UserProfileProps } from "../types/types";
import { getElapsedTime } from "../utils/fn";
import { useNavigate } from "../utils/hooks";


type serverData = Users & { businesses: Businesses[], products: Products[], jobs: Jobs[], followers: Follows[] }



export default function useUserProfile() {
    const { user } = useStore()
    const { router, navigate } = useNavigate()
    const userToBeDisplayed = router.query.id || user.id
    const { data, isSuccess, isLoading } = useQuery<{ data: serverData }, Error>(["user", { userId: userToBeDisplayed }], () => {
        return axios.get("/api/user/" + userToBeDisplayed)
    }, { enabled: !!userToBeDisplayed })
    const mutator = useMutation("follows", (follow: any) => {
        return axios.post("/api/follows", follow)
    }, { retry: 3 })

    let details: UserProfileProps = {
        cover: "",
        avatar: "",
        name: "",
        email: "",
        profession: "",
        location: "",
        description: "",
        phone: "",
        country: "",
        city: "",
        online: false,
        _id: 1

    }
    let businesses: BusinessProps[] = []
    let products: ProductProps[] = []
    let jobs: JobProps[] = []
    const [hasFollowed, setHasFollowed] = useState(false)

    useEffect(() => {
        if (isSuccess) setHasFollowedInitialValue()
    }, [isSuccess])

    useEffect(() => {
        if (mutator.isSuccess) handleFollowToggleSuccess()
    }, [mutator.isSuccess])

    if (isSuccess) handleSuccess()


    return { mutator, details, businesses, products, jobs, isLoading, isSuccess, hasFollowed, toggleFollow, openUpdateUi, openConversation }

    function handleSuccess() {
        if (!data?.data) return
        const user = data.data
        const serverBusinesses = data.data.businesses
        const serverProducts = data.data.products
        const serverJobs = data.data.jobs
        jobs = serverJobs.map(job => {
            return {
                avatar: user.profileImage.url,
                title: job.title,
                location: job.city + " " + job.country,
                time: getElapsedTime(job.createdAt.toString()),
                description: job.description,
                tags: [job.pricing, job.niche, job.expertise].filter(job => Boolean(job)),
                isBrand: Boolean(job.authorBusinessId),
                _id: job.id,
                authorId: user.id
            }
        })
        details = {
            cover: user.coverImage.url,
            avatar: user.profileImage.url,
            name: user.firstName + " " + user.lastName,
            profession: user.profession,
            location: user.city + " " + user.country,
            description: user.description,
            phone: user.phone,
            country: user.country,
            city: user.city,
            online: user.online,
            _id: user.id,
            email: user.email
        }
        businesses = serverBusinesses.map(business => {
            return {
                avatar: business.logo.url,
                name: business.name,
                email: business.email,
                website: business.website,
                description: business.description,
                tags: [business.niche, business.city, business.country,].filter(tag => Boolean(tag)),
                _id: business.id,
                authorId: user.id
            }
        })
        products = serverProducts.map(product => {
            return {
                avatar: user.profileImage.url,
                name: product.name,
                location: product.city + " " + product.country,
                website: "No website",
                image: product.previews[0].url,
                description: product.description,
                price: product.price,
                amount: product.quantity,
                _id: product.id,
                isBrand: Boolean(product.authorBusinessId),
                ownerId: user.id
            }
        })
    }
    function setHasFollowedInitialValue() {
        setHasFollowed(() => {
            if (!data?.data) return false
            return data?.data.followers.some(follower => {
                return follower.followerId === user.id
            })
        })
    }
    function toggleFollow() {
        if (mutator.isLoading) return
        mutator.mutate({
            followerId: user.id,
            followeeId: userToBeDisplayed
        })
    }
    function handleFollowToggleSuccess() {
        mutator.reset()
        setHasFollowed(mutator.data?.data)
    }
    function openUpdateUi() {
        navigate(ROUTES)
    }
    function openConversation() {
        navigate(ROUTES.conversations + "/" + userToBeDisplayed)
    }
}