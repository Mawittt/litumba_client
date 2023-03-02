import axios from "axios"
import React, { useEffect } from "react"
import { useInfiniteQuery } from "react-query"
import { avatar_1, avatar_2, avatar_3 } from "../../assets/avatars"
import { image_1, image_3, image_31 } from "../../assets/images"
import useStore from "../../store/useStore"
import { PostProps } from "../../types/types"
import { getElapsedTime, getTime } from "../../utils/fn"


interface Post {
    authorUser?: { firstName: string, profileImage: { url: string } },
    authorBusiness?: { logo: { url: string }, name: string }
    authorUserId: string,
    authorBusinessId: string,
    text?: string,
    image?: { url: string },
    video?: { url: string },
    id: string,
    createdAt: string,
    _count: { comments: number, likes: number },
    likes: {
        postId: string
        authorId: string
    }[]
}
interface ServerData {
    posts: Post[],
    nextCursor: number,
    isMore: boolean
}

export default function useHomeComponent() {
    let posts: PostProps[] = []
    let loaded = false
    let isMore = true
    const { user } = useStore()
    const { data, isError, isLoading, isSuccess, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<{ data: ServerData }, Error>("posts", ({ pageParam = 0 }) => {
        return axios.get(`/api/posts?cursor=${pageParam}&span=8`)
    }, {
        getNextPageParam: (lastPage: { data: ServerData }) => lastPage.data.nextCursor
    })


    if (data) handleData()

    return { isMore, posts, isLoading, isError, isSuccess, loadContent, isFetchingNextPage }

    function handleData() {
        const arrangedData: PostProps[] = []
        data?.pages.forEach(page => {
            page.data.posts.forEach(post => {
                const arrangedPost: PostProps = {
                    avatar: post.authorUser?.profileImage.url || post.authorBusiness?.logo.url || "",
                    name: post.authorUser?.firstName || post.authorBusiness?.name || "",
                    authorId: post.authorUserId || post.authorBusinessId || "",
                    time: getElapsedTime(post.createdAt),
                    description: post.text || "",
                    image: post.image?.url || "",
                    video: post.video?.url || "",
                    id: post.id,
                    comments: post._count.comments,
                    likes: post._count.likes,
                    liked: isLiked(),
                    isBrand: Boolean(post.authorBusiness)
                }
                arrangedData.push(arrangedPost)

                function isLiked() {

                    return post.likes.some(like => {
                        return (like.authorId === user.id) && (like.postId === post.id)
                    })
                }
            })
        })

        posts = []
        posts = arrangedData
        isMore = data?.pages[data.pages.length - 1].data.isMore || false
    }
    function loadContent() {
        const postsContainer = document.getElementById("postsContainer")
        if (!postsContainer) return
        const scrollHeight = postsContainer.scrollHeight
        const clientHeight = postsContainer.clientHeight
        const scrollTop = postsContainer.scrollTop

        if (hasReachedBottom()) {
            if (!loaded) {
                if (isMore) {
                    fetchNextPage()
                }
            }
            loaded = true
        } else {
            loaded = false
        }

        function hasReachedBottom() {
            return !Boolean(scrollHeight - (clientHeight + scrollTop) >= 40)
        }
    }
}