import { Follows, Users } from "@prisma/client"
import axios from "axios"
import { useQuery } from "react-query"
import { avatar_1, avatar_2, avatar_3 } from "../assets/avatars"
import useStore from "../store/useStore"
import { FollowProps } from "../types/types"
import { getElapsedTime } from "../utils/fn"

type ServerData = (Follows & { followee: Users })[]


export default function useFollowed() {
    const { user } = useStore()
    const { data, isSuccess } = useQuery<{ data: ServerData }, Error>(["follows/followees", { userId: user.id }], () => {
        return axios.get("/api/follows/followees/" + user.id)
    })

    let followers: FollowProps[] = []

    if (isSuccess) handleSuccess()

    return { followers }
    function handleSuccess() {
        if (!data?.data) return

        followers = data.data.map(follow => {
            return {
                avatar: follow.followee.profileImage.url,
                name: follow.followee.firstName + " " + follow.followee.lastName,
                time: getElapsedTime(follow.createdAt.toString()),
                _id: follow.id,
                userId: follow.followeeId
            }
        })
    }
}