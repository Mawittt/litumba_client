import Image from "next/image"
import { avatar_1, } from "../../assets/avatars"
import { CommentsIcon, LikeIcon } from "../../assets/icons"
import { image_1 } from "../../assets/images"
import { PostProps } from "../../types/types"
import usePost from "./usePost"




export default function Post(props: PostProps) {
    const { avatar, time, name, description, image, likes, comments, openProfile,
        enlargeImage, togglePostLike, openCommentsSection } = usePost(props)
    return (
        <div className=" flex flex-col gap-2 sm:shadow-comp_lg sm:py-[10px] sm:rounded-lg">
            <div className="flex items-center gap-2 px-2" onClick={openProfile}>
                <Image src={avatar} alt={' post author profile'} width="45" height={45} className="h-[45px]" />
                <strong>{name}</strong>
                <p className="text-bc_5">{time}</p>
            </div>
            <div className="px-2">
                {description}
            </div>
            <img src={image} alt={"post image"}  onClick={enlargeImage} />
            <div className="flex justify-center gap-10">
                <div className="flex" onClick={togglePostLike}>
                    <LikeIcon />
                    <span>{likes}</span>
                </div>
                <div className="flex" onClick={openCommentsSection}>
                    <CommentsIcon />
                    <span>{comments}</span>
                </div>
            </div>
        </div>
    )
}