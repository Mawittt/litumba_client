import { avatar_1, avatar_2, avatar_3 } from "../assets/avatars"
import { ConversationProps } from "../types/types"




export default function useConversations(){

    const conversations : ConversationProps[] = [
        {
            avatar : avatar_1,
            name : "james joue",
            lastMessage : "hey this is all we need",
            unread : 4,
            _id : 5
        },
        {
            avatar : avatar_2,
            name : "dorphone",
            lastMessage : "hey this is all we need",
            unread : 4,
            _id : 8
        },
        {
            avatar : avatar_3,
            name : "georgeo falace",
            lastMessage : "hey this is all we need",
            unread : 4,
            _id : 2
        },
    ]

    const more = true

    return {conversations , more}
}