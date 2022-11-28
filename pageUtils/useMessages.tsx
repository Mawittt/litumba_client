import { avatar_1, avatar_2 } from "../assets/avatars"
import { ROUTES } from "../assets/constant"
import { MessageProps, MessagesUserProps } from "../types/types"
import { useNavigate } from "../utils/hooks"



export default function useMessages(){

    const messages : MessageProps[] = [
        {
            text : "this is a new day right?",
            time : "2 min",
            self : false,
            _id : 1
        },
        {
            text : "yea its all good",
            time : "2 min",
            self : true,
            _id : 1
        },
        {
            text : "nice",
            time : "2 min",
            self : false,
            _id : 1
        }
    ]
    const user : MessagesUserProps = {
        avatar : avatar_2,
        name : "jeff bezos" ,
        _id : 5
    }

    const {navigate} = useNavigate() 

    return {messages , user , gotoProfile}


    function gotoProfile(){
        navigate(ROUTES.profile)
    }
}