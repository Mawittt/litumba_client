import Image from "next/image";
import { CommentProps } from "../../types/types";
import useComment from "./useComment";





export default function Comment(props : CommentProps){

    const {comment} = useComment(props)
 
    return (
        <div className="py-4 px-2 shadow-comp rounded-lg">
            <div className="flex gap-2 items-center">
                <Image src={comment.avatar} height={32} width={32} alt="comment avatar" className="h-[32px]" />
                <div className="font-bold text-blue-500">{comment.name}</div>
            </div>
            <div >
                {comment.text}
            </div>
        </div>
    )
}