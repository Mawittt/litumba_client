import axios from "axios"
import { useRef, useState } from "react"
import { useQuery } from "react-query"
import { brand_avatar_1, } from "../assets/avatars"
import { ROUTES } from "../assets/constant"
import { JobProps, TopAssetsSearchFormProps } from "../types/types"
import { getElapsedTime, scrollPageComponentToTop } from "../utils/fn"
import { useNavigate } from "../utils/hooks"

interface JobsInterface {
    authorUser: {
        profileImage: { url: string },
        id: string
    }
    authorBusiness: {
        logo: { url: string },
        id: string
    }
    id: string,
    title: string,
    city: string,
    country: string,
    createdAt: string,
    description: string,
    expertise: string,
    niche: string,
    pricing: string,
    schedule: string,
    urgency: string
}

interface ServerData {
    jobs: JobsInterface[],
    count: number,
    isMore: boolean,
    span: number
}


export default function useJobs() {
    const { router, getQueryString } = useNavigate()
    const queryString = getQueryString(router.query)
    const cursor = useRef(0)
    const { data, isSuccess, isError, isLoading, isFetching, refetch } = useQuery<{ data: ServerData }, Error>(["jobs", queryString, cursor.current], () => {
        return axios.get("/api/jobs/" + queryString + "&cursor=" + cursor.current)
    }, { keepPreviousData: true })
    let jobs: JobProps[] = []
    const { navigate } = useNavigate()

    if (isSuccess) handleData()

    return { jobs, searchJobs, isError, isLoading, isFetching, openNext, openPrev, canPrev, canNext }

    function searchJobs(searchData: TopAssetsSearchFormProps) {
        navigate(ROUTES.jobs.index + "?search=" + searchData.searchString)
    }

    function handleData() {
        const newJobs: JobProps[] = []
        data?.data.jobs?.forEach(job => {
            const newJob: JobProps = {
                avatar: job.authorUser?.profileImage.url || job.authorBusiness.logo.url,
                title: job.title,
                location: job.city + " " + job.country,
                time: getElapsedTime(job.createdAt),
                description: job.description,
                tags: getTags(),
                isBrand: isBrand(),
                _id: job.id,
                authorId: job.authorUser?.id || job.authorBusiness.id
            }

            function getTags() {
                const tags: string[] = [job.pricing, job.niche, job.expertise, job.schedule, job.urgency]
                return tags.filter(Boolean)
            }
            function isBrand() {
                if (job.authorBusiness) return true
                return false
            }
            newJobs.push(newJob)
        })
        jobs = newJobs
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