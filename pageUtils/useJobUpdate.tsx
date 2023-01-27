import axios from "axios"
import { Console } from "console"
import { useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import { useMutation, useQuery } from "react-query"
import { ROUTES } from "../assets/constant"
import { JobDetailsProps, JobUpdateFormProps } from "../types/types"
import { getElapsedTime } from "../utils/fn"
import { useNavigate, useNotifiers } from "../utils/hooks"

interface ServerJobInterface {
    authorUser: {
        profileImage: { url: string };
        coverImage: { url: string };
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        online: boolean;
    };
    authorBusiness: {
        logo: { url: string };
        coverImage: { url: string };
        id: string;
        email: string;
        name: string;
        website: string;
        author: {
            online: boolean;
        };
    };
    city: string;
    country: string;
    createdAt: string;
    description: string;
    expertise: string;
    id: string;
    niche: string;
    pricing: string;
    schedule: string;
    title: string;
    urgency: string;
}


export default function useJobUpdate() {
    const { register, handleSubmit, watch, setValue } = useForm<JobUpdateFormProps>({
        defaultValues: {
            title: "",
            price: "",
            description: "",
            niche: "",
            urgency: "",
            country: "",
            city: "",
            expertise: "",
            schedule: "",
        }
    })
    const { router } = useNavigate()
    const loadedData = useRef(false)
    const { navigate } = useNavigate()
    const { setAlert, setWarning } = useNotifiers()

    const { data, isSuccess } = useQuery<{ data: ServerJobInterface }, Error>(["jobs", router.query.id], () => {
        return axios.get("/api/jobs/" + router.query.id);
    }, { enabled: !!router.query.id });
    const mutator = useMutation(["jobs", router.query.id], (job: any) => {
        return axios.patch("/api/jobs/" + router.query.id, job)
    })

    if (isSuccess) handleSuccess()
    if (mutator.isSuccess) handleSave()
    if (mutator.isError) handleSaveError()

    return { isSaving: mutator.isLoading, register, handleSubmit, watch, updateJob }

    function updateJob(data: JobUpdateFormProps) {
        const jobUpdates = {
            title: data.title,
            description: data.description,
            pricing: data.price,
            urgency: data.urgency,
            niche: data.niche,
            expertise: data.expertise,
            schedule: data.schedule,
            country: data.country,
            city: data.city
        }
        mutator.mutate(jobUpdates)
    }

    function fillInitialValues(data: JobUpdateFormProps) {
        setValue("title", data.title)
        setValue("price", data.price)
        setValue("description", data.description)
        setValue("niche", data.niche)
        setValue("urgency", data.urgency)
        setValue("country", data.country)
        setValue("city", data.city)
        setValue("expertise", data.expertise)
        setValue("schedule", data.schedule)
    }

    function handleSuccess() {
        if (loadedData.current) return
        loadedData.current = true
        const jobFromServer = data?.data;
        if (!jobFromServer) return;
        const job: JobUpdateFormProps = {
            description: jobFromServer.description,
            price: jobFromServer.pricing,
            niche: jobFromServer.niche,
            urgency: jobFromServer.urgency,
            schedule: jobFromServer.schedule,
            country: jobFromServer.country,
            city: jobFromServer.city,
            expertise: jobFromServer.expertise,
            title: jobFromServer.title,
        };

        fillInitialValues(job)

        function isBrand() {
            return Boolean(jobFromServer?.authorBusiness);
        }
    }
    function handleSave() {
        mutator.reset()
        navigate(ROUTES.jobs.index + "/" + router.query.id)
        setAlert({ content: "save successful" })
    }
    function handleSaveError() {
        setWarning({ content: "Sorry there was an error please try again" })
        mutator.reset()
    }
}