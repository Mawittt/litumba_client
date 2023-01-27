import Image from "next/image"
import { CommentsIcon, LikeIcon } from "../../assets/icons"
import { PostProps } from "../../types/types"
import { cn } from "../../utils/fn"
import usePost from "./usePost"




export default function Post(props: PostProps) {
    const { likedState, mutator, avatar, time, name, description, image, likes, comments, openProfile,
        enlargeImage, togglePostLike, openCommentsSection, video, isBrand } = usePost(props)

    return (
        <div className=" flex flex-col gap-2 shadow-comp_lg pt-[10px] rounded-lg">
            <div className="flex items-center gap-2 px-2" onClick={openProfile}>
                <Image src={avatar} alt={' post author profile '} width="45" height={45} className={cn("h-[45px] cursor-pointer", isBrand ? "rounded-lg" : "rounded-full")} />
                <div className="flex items-baseline">
                    <strong className="cursor-pointer text-blue-500">{name}</strong>
                    <p className="text-bc_5 text-[0.7rem] font-bold ml-2">{time}</p>
                </div>
            </div>
            <div className="px-2">
                {description}
            </div>
            {image && <img src={image} alt={"post image "} className="cursor-pointer max-h-[70vh] aspect-auto max-w-full w-fit m-auto " onClick={enlargeImage} />}
            {video && <video src={video} controls className="max-h-[70vh] cursor-pointer" onClick={enlargeImage} />}
            <div className="flex justify-center gap-x-10 pt-4 font-bold">
                <div className="flex cursor-pointer" onClick={togglePostLike}>
                    <LikeIcon className={cn(mutator.isLoading ? "opacity-60" : "")} selected={likedState.current} />
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