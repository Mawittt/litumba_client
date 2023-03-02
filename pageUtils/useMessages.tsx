import { Conversations, Messages, Users } from "@prisma/client"
import axios from "axios"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { avatar_1, avatar_2 } from "../assets/avatars"
import { ROUTES } from "../assets/constant"
import useStore from "../store/useStore"
import { MessageProps, MessagesFormProps, MessagesUserProps } from "../types/types"
import { getElapsedTime } from "../utils/fn"
import { useNavigate } from "../utils/hooks"


interface ServerData {
    peer: Users,
    conversation: Conversations & { messages: Messages[] } | null
}



export default function useMessages() {
    const { user } = useStore()
    const queryClient = useQueryClient()
    const { router, navigate } = useNavigate()
    const peerId = router.query.id
    const { data, isSuccess, isLoading } = useQuery<{ data: ServerData }>(["conversations", { peerId }], () => {
        return axios.get("/api/conversations/" + user.id + "?peerId=" + peerId)
    }, { enabled: !!peerId && !!user.id })
    const { register, handleSubmit, reset } = useForm<MessagesFormProps>({
        defaultValues: {
            text: ""
        }
    })
    const mutator = useMutation(["messages", { peerId }], (message: any) => {
        return axios.post("/api/messages", message)
    })

    const [messages, setMessages] = useState<MessageProps[]>([])
    const [userProfile, setUserProfile] = useState<MessagesUserProps>({
        avatar: "",
        name: "",
        _id: 0
    })

    useEffect(() => {
        if (isSuccess) handleSuccess()
        queryClient.invalidateQueries(["messages/newMessages", { userId: user.id }])
    }, [isSuccess, data?.data])

    useEffect(() => {
        if (mutator.isSuccess) handleMessageSave()
    }, [mutator.isSuccess])

    useEffect(() => {
        const messagesContainer = document.getElementById("messages-container")
        messagesContainer?.scrollBy(0, messagesContainer.scrollHeight - messagesContainer.clientHeight)
    }, [messages])


    return { goBack, messages, user: userProfile, gotoProfile, register, handleSubmit, sendMessage, mutator, isSuccess }


    function gotoProfile() {
        navigate(ROUTES.profile + "/" + peerId)
    }
    function handleSuccess() {
        if (!data?.data) return
        setUserProfile({
            avatar: data.data.peer.profileImage.url,
            name: data.data.peer.firstName + " " + data.data.peer.lastName,
            _id: data.data.peer.id
        })
        if (data.data.conversation) {
            setMessages(getMessages(data.data.conversation))
        }
        console.log(data.data)
    }
    function sendMessage(data: MessagesFormProps) {
        data.peerId = peerId?.toString()
        data.userId = user.id
        mutator.mutate(data)
    }
    function handleMessageSave() {
        mutator.reset()
        reset()
        if (!mutator.data?.data) return
        setMessages(getMessages(mutator.data.data))
    }
    function getMessages(conversation: Conversations & { messages: Messages[] }) {
        return conversation.messages.map(message => {
            return {
                text: message.text,
                time: getElapsedTime(message.updatedAt.toString()),
                self: isSelf(),
                _id: message.id
            }
            function isSelf() {
                return Boolean(message.authorId === user.id)
            }
        })
    }
    function goBack() {
        navigate(-1)
    }
}