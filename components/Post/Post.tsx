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
        <div className=" flex flex-col gap-2 shadow-comp_lg py-[10px] rounded-lg">
            <div className="flex items-center gap-2 px-2" onClick={openProfile}>
                <Image src={avatar} alt={' post author profile '} width="45" height={45} className="h-[45px] cursor-pointer" />
                <strong className="cursor-pointer text-blue-500">{name}</strong>
                <p className="text-bc_5">{time}</p>
            </div>
            <div className="px-2">
                {description}
            </div>
            <img src={image} alt={"post image "} className="cursor-pointer "  onClick={enlargeImage} />
            <div className="flex justify-center gap-10">
                <div className="flex cursor-pointer" onClick={togglePostLike}>
                    <LikeIcon />
                    <span>{likes}</span>
                </div>
                <div className="flex cursor-pointer" onClick={openCommentsSection}>
                    <CommentsIcon />
                    <span>{comments}</span>
                </div>
            </div>
        </div>
    )
}