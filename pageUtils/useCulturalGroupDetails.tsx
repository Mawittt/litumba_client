import axios from "axios";
import { useQuery } from "react-query";
import { group_avatar } from "../assets/avatars";
import { ROUTES } from "../assets/constant";
import { group_image_1 } from "../assets/images";
import { CulturalGroupDetails } from "../types/types";
import { useNavigate, useOwner } from "../utils/hooks";

interface ServerData {
    authorId: string,
    city: string,
    cover: { url: string },
    createdAt: string,
    description: string,
    id: string,
    logo: { url: string },
    members: number,
    name: string,
}

export default function useCulturalGroupDetails() {


    const { navigate, router } = useNavigate()
    const self = useOwner()
    const groupId = router.query._id
    const { data, isSuccess, isLoading } = useQuery<{ data: ServerData }, Error>(["culturalGroups", groupId], () => {
        return axios.get("/api/culturalGroups/" + groupId)
    }, { enabled: !!groupId })

    let details: CulturalGroupDetails = {
        cover: "",
        avatar: "",
        name: "",
        members: 0,
        description: "",
        location: "",
        _id: 1
    }
    if (isSuccess) handleSuccess()

    return { isLoading, details, self, gotoConversation, goBack, openGroupEditor }

    function gotoConversation() {
        navigate(ROUTES.conversations + "/" + data?.data.authorId)
    }
    function goBack() {
        router.back()
    }
    function openGroupEditor() {
        navigate(ROUTES.cultural_groups.update + "/" + data?.data.id)
    }
    function handleSuccess() {
        console.log(data?.data)
        if (!data?.data) return
        details = {
            cover: data.data.cover.url,
            avatar: data.data.logo.url,
            name: data.data.name,
            members: data.data.members,
            description: data.data.description,
            location: data.data.city + " Cameroon",
            _id: data.data.id
        }
    }
}