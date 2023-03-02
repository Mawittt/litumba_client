import axios from "axios"
import { useRef } from "react"
import { useMutation } from "react-query"
import { ROUTES } from "../../assets/constant"
import useStore from "../../store/useStore"
import { PostProps } from "../../types/types"
import { useNavigate } from "../../utils/hooks"


interface LikeInterface {
    authorId: string
    postId: string
}


export default function usePost({ authorId, avatar, name, time, description, image, likes, comments, video, isBrand, id, liked }: PostProps) {
    const { user } = useStore()
    const { navigate } = useNavigate()
    const mutator = useMutation("like", (like: LikeInterface) => {
        return axios.post("/api/likes", like)
    })
    const likeState = useRef(0)
    const likeValue = useRef({ set: false, value: 0 })
    const likedState = useRef(liked)

    if (mutator.isSuccess) handleSuccess()
    if (likeState.current === 1) likes++
    if (likeState.current === -1) likes--
    if (likeValue.current.set) likes = likeValue.current.value

    return { likedState, likeState, mutator, isBrand, video, avatar, name, time, description, image, likes, comments, openProfile, enlargeImage, togglePostLike, openCommentsSection }

    function openProfile() {
        if (!isBrand) navigate(ROUTES.profile + "/" + authorId)
        if (isBrand) navigate(ROUTES.businesses.index + "/" + authorId)
    }

    function enlargeImage() {
        navigate(ROUTES.post_details + "/" + id)
    }

    function togglePostLike() {
        if (mutator.isLoading) return
        mutator.mutate({
            authorId: user.id,
            postId: id
        })
    }
    function openCommentsSection() {
        navigate(ROUTES.post_details + "/" + id)
    }
    function handleSuccess() {
        if (mutator.data?.data) {
            likedState.current = true
            if (!likeValue.current.set) {
                likeValue.current.set = true
                likeValue.current.value = likes + 1
            } else {
                likeValue.current.value++
            }
        } else {
            likedState.current = false
            if (!likeValue.current.set) {
                likeValue.current.set = true
                likeValue.current.value = likes - 1
            } else {
                likeValue.current.value--
            }
        }
        mutator.reset()
    }
}