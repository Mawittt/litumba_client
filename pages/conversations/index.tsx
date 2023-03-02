import Loader from "../../assets/Loader"
import Button from "../../components/Button/Button"
import Conversation from "../../components/Conversation/Conversation"
import useConversations from "../../pageUtils/useConversations"




export default function Conversations() {
    const { conversations, isSuccess } = useConversations()
    return (
        <div className=" px-2 flex flex-col gap-2 my-6 mx-4" >
            {!isSuccess ? <div className="mt-6 flex flex-col items-center"><Loader /><p className="mt-2">Loading conversations</p></div> : conversations.map(conversation => <Conversation key={conversation._id} {...conversation} />)}
            {isSuccess && !conversations.length && <div className="text-center py-6 bg-white shadow-comp_lg rounded-lg font-bold text-lg">You have no conversation yet</div>}
        </div>
    )
}