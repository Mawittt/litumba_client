import Image from "next/image"
import { BackIcon, ContactIcon } from "../../assets/icons"
import Loader from "../../assets/Loader"
import Message from "../../components/Conversation/Message/Message"
import useMessages from "../../pageUtils/useMessages"




export default function Messages() {
    const { isSuccess, messages, user, gotoProfile, register, handleSubmit, sendMessage, mutator, goBack } = useMessages()

    return (
        <div className="h-full px-2 py-6 mx-4 grid grid-rows-[minmax(0,max-content)_auto_minmax(0,max-content)] max-sm:py-0 max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:z-20 max-sm:bg-blue-50 max-sm:w-full max-sm:mx-0">
            {!isSuccess ? <div className="flex flex-col items-center mt-6">
                <Loader />
                <p className="mt-2"> Loading messages</p>
            </div> :
                <>
                    <div className="flex font-bold text-blue-500 py-2 px-2 shadow-comp_lg items-center justify-between bg-white rounded-lg">
                        <div className="flex items-center">
                            <Image src={user.avatar} alt="peer avatar" width={52} height={52} className="h-[52px] rounded-full cursor-pointer" onClick={gotoProfile} />
                            <div onClick={gotoProfile} className={"cursor-pointer ml-2"}>{user.name}</div>
                        </div>
                        <BackIcon onClick={goBack} />
                    </div>
                    <div className="h-full overflow-scroll px-1 mt-2" id="messages-container">
                        {messages.map(message => <Message key={message._id} {...message} />)}
                    </div>
                    <form className="flex gap-2 py-2 px-2 items-center bg-white shadow-comp_lg rounded-lg">
                        <input type="text" className="text-input rounded-full px-4" {...register("text", { required: true })} />
                        <button className="max-h-[24px]" onClick={handleSubmit(sendMessage)}>
                            {mutator.isLoading ? <Loader /> : <ContactIcon />}
                        </button>
                    </form>
                </>}
        </div>
    )
}