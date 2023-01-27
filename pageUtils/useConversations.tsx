import { Conversations, Messages, Users } from "@prisma/client"
import { Errors } from "aws-sdk/clients/s3"
import axios from "axios"
import { useQuery } from "react-query"
import { avatar_1, avatar_2, avatar_3 } from "../assets/avatars"
import ConversationsModel from "../database/ConversationsModel"
import useStore from "../store/useStore"
import { ConversationProps } from "../types/types"

type ServerData = (Conversations & {
    messages: Messages[],
    users: Users[]
})[]


export default function useConversations() {
    const { user } = useStore()
    const { data, isSuccess } = useQuery<{ data: ServerData }, Errors>(["conversations", { userId: user.id }], () => {
        return axios.get("/api/conversations?userId=" + user.id)
    }, { enabled: !!user.id })
    let conversations: ConversationProps[] = []

    if (isSuccess) handleSuccess()

    return { conversations }

    function handleSuccess() {
        if (!data?.data) return
        conversations = data.data.map(conversation => {
            const conversationUser: Users = getUser()
            return {
                avatar: conversationUser.profileImage.url,
                name: conversationUser.firstName,
                lastMessage: conversationUser.lastName,
                unread: conversation.messages.length,
                _id: conversation.id,
                peerId: conversationUser.id
            }

            function getUser() {
                if (conversation.users[0].id !== user.id) return conversation.users[0]
                if (conversation.users[1].id !== user.id) return conversation.users[1]
                return conversation.users[0]
            }
        })
    }
}