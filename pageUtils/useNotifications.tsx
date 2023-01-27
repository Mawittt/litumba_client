import { Notifications } from "@prisma/client";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { avatar_1, avatar_2, avatar_3 } from "../assets/avatars";
import useStore from "../store/useStore";
import { NotificationProps } from "../types/types";
import { getElapsedTime } from "../utils/fn";

type ServerNotification = Notifications & {
    trigger: {
        firstName: string,
        lastName: string,
        profileImage: { url: string }
    }
    service?: {
        name: string
    },
    post?: {
        text?: string
    }
}

export default function useNotifications() {
    const { user } = useStore()
    const { data, isSuccess } = useQuery<{ data: ServerNotification[] }>(["notifications", user.id], () => {
        return axios.get("/api/notifications/" + user.id)
    }, { enabled: !!user.id })
    let notifications: NotificationProps[] = []
    const queryClient = useQueryClient()

    if (isSuccess) handleSuccess()

    const more = true

    return { notifications, more, isSuccess }

    function handleSuccess() {
        if (!data?.data) return
        notifications = data.data.map(notification => {
            return {
                avatar: notification.trigger.profileImage.url,
                name: notification.trigger.firstName + " " + notification.trigger.lastName,
                action: notification.type,
                time: getElapsedTime(notification.updatedAt.toString()),
                _id: notification.id,
                postText: notification.post?.text,
                serviceName: notification.service?.name,
                postId: notification.postId || undefined,
                serviceId: notification.serviceId || undefined,
                triggerId: notification.triggerId
            }
        })
        queryClient.invalidateQueries("user")
    }
}