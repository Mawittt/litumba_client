import { avatar_1, avatar_2, avatar_3 } from "../assets/avatars"
import { FollowProps } from "../types/types"




export default function useFollowed(){

    const followers : FollowProps[] = [
        {
            avatar : avatar_1,
            name : "jeff jason",
            time : "2 days",
            _id : 1
        },
        {
            avatar : avatar_2,
            name : "anael lisa",
            time : "5 days",
            _id : 2
        },
        {
            avatar : avatar_3,
            name : "jake",
            time : "2 weeks",
            _id : 3
        },
    ]

    const more = true


    return {followers , more}

    function getMore(){
        alert("getting more followers")
    }
}