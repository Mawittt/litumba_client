import Button from "../../components/Button/Button"
import Conversation from "../../components/Conversation/Conversation"
import useConversations from "../../pageUtils/useConversations"




export default function Conversations(){
    const {conversations , more} = useConversations()
    return (
        <div className="py-4 px-2 flex flex-col gap-2" >
            {conversations.map(conversation=> <Conversation key={conversation._id} {...conversation} />)}
            {more && <Button label="more" full />}
        </div>
    )
}