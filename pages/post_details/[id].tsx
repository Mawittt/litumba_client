import Image from "next/image"
import { ContactIcon } from "../../assets/icons"
import Loader from "../../assets/Loader"
import Comment from "../../components/Comment/Comment"
import usePostDetails from "../../pageUtils/usePostDetails"
import { cn } from "../../utils/fn"


export default function Post_details() {
    const { mutator, isLoading, isSuccess, isError, post, comments, openProfile, enlargeImage, sendComment, handleSubmit, register } = usePostDetails()
    return (
        <>
            {isLoading && <div className="flex flex-col items-center mt-6">
                <Loader />
                <p>loading post Comments</p>
            </div>}
            {
                isError && <div className="text-center mt-[50px] px-4 ">sorry there was an error please reload the page</div>
            }
            {isSuccess && <div className=" flex flex-col gap-2 shadow-comp_lg py-[10px] rounded-lg my-6 mx-4 bg-white">
                <div className="flex items-center gap-2 px-2" onClick={openProfile}>
                    <Image
                        src={post.avatar || ""}
                        alt={' post author profile '}
                        width="45" height={45}
                        className={
                            cn("h-[45px] cursor-pointer",
                                post.isBrand ? "rounded-lg" : "rounded-full"
                            )
                        }
                    />
                    <div className="flex items-baseline">
                        <strong className="cursor-pointer text-blue-500">{post.name}</strong>
                        <p className="text-bc_5 text-[0.7rem] font-bold ml-2">{post.time}</p>
                    </div>
                </div>
                <div className="px-2">
                    {post.text}
                </div>
                {post.image && <img src={post.image} alt={"post image "} className=" max-h-[70vh] aspect-auto max-w-full w-fit m-auto " onClick={enlargeImage} />}
                {post.video && <video src={post.video} className="max-h-[70vh] " controls />}
                <form className="flex justify-center gap-10 px-2" onSubmit={handleSubmit(sendComment)}>
                    <input type="text" className="text-input" {...register("comment")} />
                    {mutator.isLoading && !mutator.isSuccess ? <Loader /> : <ContactIcon onClick={handleSubmit(sendComment)} />}
                </form>
                <div className="flex flex-col gap-2 px-2">
                    {comments.map(comment => <Comment key={comment.id} {...comment} />)}
                </div>
            </div>}
        </>
    )

}