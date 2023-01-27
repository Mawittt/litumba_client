import Image from "next/image"
import { ContactIcon } from "../../assets/icons"
import Loader from "../../assets/Loader"
import Message from "../../components/Conversation/Message/Message"
import useMessages from "../../pageUtils/useMessages"




export default function Messages() {
    const { isSuccess, messages, user, gotoProfile, register, handleSubmit, sendMessage, mutator } = useMessages()

    return (
        <div className="h-full py-4 px-2 grid grid-rows-[minmax(0,max-content)_auto_minmax(0,max-content)]">
            {!isSuccess ? <div className="flex flex-col items-center mt-6">
                <Loader />
                <p className="mt-2"> Loading messages</p>
            </div> :
                <>
                    <div className="flex font-bold text-blue-500 py-2 h-[fit-content] shadow-comp_lg items-center">
                        <Image src={user.avatar} alt="peer avatar" width={62} height={62} className="h-[62px] rounded-full cursor-pointer" onClick={gotoProfile} />
                        <div onClick={gotoProfile} className={"cursor-pointer ml-2"}>{user.name}</div>
                    </div>
                    <div className="h-full overflow-scroll" id="messages-container">
                        {messages.map(message => <Message key={message._id} {...message} />)}
                    </div>
                    <div className="flex gap-2 py-2 items-center">
                        <input type="text" className="text-input" {...register("text", { required: true })} />
                        <div className="max-h-[24px]">
                            {mutator.isLoading ? <Loader /> : <ContactIcon onClick={handleSubmit(sendMessage)} />}
                        </div>
                    </div>
                </>}
        </div>
    )
}