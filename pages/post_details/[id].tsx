import Image from "next/image"
import { ContactIcon } from "../../assets/icons"
import Comment from "../../components/Comment/Comment"
import usePostDetails from "../../pageUtils/usePostDetails"


export default function post_details(){
    const {post , comments , openProfile ,enlargeImage} = usePostDetails()
    return (
        <div className=" flex flex-col gap-2 shadow-comp_lg py-[10px] rounded-lg">
            <div className="flex items-center gap-2 px-2" onClick={openProfile}>
                <Image src={post.avatar} alt={' post author profile '} width="45" height={45} className="h-[45px] cursor-pointer" />
                <strong className="cursor-pointer text-blue-500">{post.name}</strong>
                <p className="text-bc_5">{post.time}</p>
            </div>
            <div className="px-2">
                {post.text}
            </div>
            <img src={post.image} alt={"post image "} className="cursor-pointer hover:opacity-75"  onClick={enlargeImage} />
            <div className="flex justify-center gap-10 px-2">
                <input type="text" className="text-input" />
                <ContactIcon />
            </div>
            <div className="flex flex-col gap-2 px-2">
            {comments.map(comment=><Comment key={comment._id} {...comment}/>)}
            </div>
        </div>
    )

}