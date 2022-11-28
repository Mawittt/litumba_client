import { avatar_1, avatar_2, avatar_3 } from "../assets/avatars";
import { NotificationProps } from "../types/types";



export default function useNotifications(){
    const notifications : NotificationProps[] = [
        {
            avatar : avatar_2,
            name : "james smith",
            action : 'like',
            time : "5 months",
            product : 'air max pro',
            _id : 1

        },
        {
            avatar : avatar_3,
            name : "james roden",
            action : 'follow',
            time : "5 hrs",
            _id : 1

        },
        {
            avatar : avatar_1,
            name : "bob roden",
            action : 'review',
            time : "2 days",
            service : "Crown sign",
            _id : 1

        },
    ]

    const more = true

    return {notifications, more}
}