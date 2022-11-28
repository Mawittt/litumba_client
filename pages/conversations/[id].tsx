import Image from "next/image"
import { ContactIcon } from "../../assets/icons"
import Message from "../../components/Conversation/Message/Message"
import useMessages from "../../pageUtils/useMessages"




export default function Messages (){
    const {messages , user , gotoProfile } = useMessages()

    return (
        <div className="h-full py-4 px-2 grid grid-rows-[minmax(0,max-content)_auto_minmax(0,max-content)]">
            <div className="flex gap-4 font-bold text-blue-500 py-4">
                <Image src={user.avatar}  alt="peer avatar" width={62} height={62} className="h-[62px] rounded-full cursor-pointer" onClick={gotoProfile}/>
                <div onClick={gotoProfile} className={"cursor-pointer"}>{user.name}</div>
            </div>
            <div>
                {messages.map(message=><Message key={message._id} {...message} />)}
            </div>
            <div className="flex gap-2 py-2 items-center">
                <input type="text" className="text-input" />
                <div className="max-h-[24px]">
                <ContactIcon />
                </div>
            </div>

        </div>
    )
}