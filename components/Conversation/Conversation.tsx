import Image from "next/image"
import { ConversationProps } from "../../types/types"
import useConversation from "./useConversation"




export default function Conversation(props: ConversationProps) {
    const { conversation , gotoProfile } = useConversation(props)
    return (
        <div className="shadow-comp rounded-lg py-4 px-2 flex justify-between items-center">
            <div className="flex gap-2">
                <Image src={conversation.avatar} width={64} height={64} alt="conversation avatar" onClick={gotoProfile} className="rounded-full h-[60px] cursor-pointer" />
                <div>
                    <div className="font-bold text-blue-500 cursor-pointer" onClick={gotoProfile}>{conversation.name}</div>
                    <div>{conversation.lastMessage}</div>
                </div>
            </div>
            <span className="h-5 w-5 flex justify-center items-center rounded-full text-white bg-red-500">
                {conversation.unread}
            </span>
        </div>
    )
}