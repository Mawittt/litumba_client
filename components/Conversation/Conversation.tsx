import Image from "next/image"
import { ConversationProps } from "../../types/types"
import useConversation from "./useConversation"




export default function Conversation(props: ConversationProps) {
    const { conversation, gotoConversation } = useConversation(props)
    return (
        <div className="shadow-comp rounded-lg py-4 px-2 flex justify-between items-center cursor-pointer" onClick={gotoConversation}>
            <div className="flex gap-2 items-center">
                <Image src={conversation.avatar} width={64} height={64} alt="conversation avatar" className="rounded-full h-[60px] cursor-pointer" />
                <div>
                    <div className="font-bold text-blue-500 cursor-pointer" >{conversation.name} {conversation.lastMessage}</div>
                </div>
            </div>
            {!!conversation.unread && <span className="h-5 w-5 flex justify-center items-center rounded-full text-white bg-red-500">
                {conversation.unread}
            </span>}
        </div>
    )
}