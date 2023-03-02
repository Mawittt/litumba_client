import { avatar_1, avatar_2, avatar_3 } from "../assets/avatars"
import { image_1 } from "../assets/images"
import { CommentFormProps, CommentProps } from "../types/types"
import { useForm } from "react-hook-form"
import { useInfiniteQuery, useMutation, useQuery } from "react-query"
import { useRouter } from "next/router"
import { useNavigate } from "../utils/hooks"
import axios from "axios"
import { getElapsedTime, getTime } from "../utils/fn"
import useStore from "../store/useStore"

interface ServerPost {
    id: string
    authorBusiness?: { logo: { url: string }, name: string, id: string };
    authorUser?: { firstName: string, profileImage: { url: string }, id: string }
    comments: []
    image: { url: string }
    video: { url: string }
    _count: {
        comments: number,
        likes: number
    }
    text: string
    createdAt: string
}
interface Post {
    id?: string
    avatar?: string
    name?: string
    time?: string
    text?: string
    image?: string
    video?: string
    isBrand?: boolean
    comments?: Comments[]
}

interface Comments {
    text: string
    author: {
        firstName: string,
        lastName: string
        profileImage: { url: string }
    }
    id: string
}


export default function usePostDetails() {
    const { user } = useStore()
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: {
            comment: ""
        }
    })
    const { router } = useNavigate()
    const { data, isLoading, isSuccess, isError, refetch } = useQuery<{ data: ServerPost }, Error>(["post", router.query.id], () => {
        return axios.get(`/api/posts/${router.query.id}`)
    })
    const mutator = useMutation("comment", (comment) => {
        return axios.post("/api/comments", comment)
    })
    let post: Post = {}
    const comments: CommentProps[] = []


    if (data) handleData()
    if (mutator.isSuccess) handleCommentCreationSuccess()



    return { mutator, isLoading, isSuccess, isError, comments, post, openProfile, enlargeImage, sendComment, register, handleSubmit }

    function openProfile() {
    }
    function enlargeImage() {
    }
    async function sendComment(comment: any) {
        if (commentIsEmpty(comment)) return
        comment.postId = data?.data.id
        comment.authorId = user.id
        comment.text = comment.comment
        mutator.mutate(comment)

        function commentIsEmpty(data: CommentFormProps) {
            if (data.comment) return false
            return true
        }
    }
    function handleData() {
        const postComments: Comments[] = data?.data.comments || []
        if (!data) return
        post = {
            avatar: data?.data.authorUser?.profileImage.url || data?.data.authorBusiness?.logo.url || "",
            name: data?.data.authorUser?.firstName || data?.data.authorBusiness?.name || "",
            time: getElapsedTime(data?.data.createdAt.toString()),
            text: data.data.text,
            image: data.data.image.url,
            video: data.data.video.url,
            id: data.data.id,
            isBrand: Boolean(data.data.authorBusiness)
        }

        postComments.forEach(comment => {
            comments.push({
                avatar: comment.author.profileImage.url,
                name: comment.author.firstName + " " + comment.author.lastName,
                text: comment.text,
                id: comment.id
            })
        })
    }
    function handleCommentCreationSuccess() {
        refetch()
        setValue("comment", "")
        mutator.reset()
    }
}