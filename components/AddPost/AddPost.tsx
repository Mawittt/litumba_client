import Image from "next/image";
import { avatar_1 } from "../../assets/avatars";
import { AddIcon, ContactIcon } from "../../assets/icons";
import { post_add_asset_icon, post_add_image_icon, post_add_video_icon } from "../../assets/images";
import Loader from "../../assets/Loader";
import Button from "../Button/Button";
import useAddPost from "./useAddPost";


export default function AddPost() {
    const { userAvatar, isLoading, register, handleSubmit, sendPost, image, video, setImageFlag, setVideoFlag, clearMedia, mutator, openProfile } = useAddPost()
    return (
        <div className="w-full shadow-comp_lg h-fit gap-[30px] flex flex-col items-center py-[20px] px-[10px] rounded-lg max-[324px]:px-[2px] bg-white">
            <div className="flex gap-4 items-center w-full">
                {isLoading ? <Loader /> : !!userAvatar && <Image src={userAvatar} width={35} height={35} alt={"profile image"} className="h-[35px] w-auto rounded-full" onClick={openProfile} />}
                <div className="flex w-full items-center gap-2">
                    <textarea className="border-[1.5px] p-2 border-solid border-border rounded-lg w-full " {...register("postTextInput")} />
                    <div className="translate-y-[8px]">
                        {
                            !mutator.isLoading ? <AddIcon onClick={handleSubmit(sendPost)} /> : <Loader />
                        }
                    </div>
                </div>
            </div>
            {image &&
                <div className="w-full aspect-square relative ">
                    <Image src={image} fill alt="selected Image" className="object-cover " />
                    <Button label="Clear media" className="w-fit absolute bottom-2 right-2 text-[0.7rem]" onClick={clearMedia} />
                </div>}
            {video &&
                <div className="w-full aspect-square relative ">
                    <video src={video} className="w-fill h-fill object-cover rounded-lg" controls autoPlay></video>
                    <Button label="Clear media" className="w-fit absolute bottom-[80px] right-2 text-[0.7rem]" onClick={clearMedia} />
                </div>}
            <div className="flex gap-2 mt-4">
                <label htmlFor="postImageInput" onClick={setImageFlag}>
                    <div className="post-option h-[43px]">
                        <Image src={post_add_image_icon} alt="add image icon" height={24} width={24} className=" w-[20px] h-[20px] sm:w-[34px] sm:h-[34px]" />
                        <span className="max-[244px]:hidden">Image</span>
                    </div>
                </label>
                <label htmlFor="postVideoInput" onClick={setVideoFlag}>
                    <div className="post-option h-[43px]">
                        <Image src={post_add_video_icon} alt="add image icon " height={34} width={34} className=" w-[20px] h-[20px] sm:w-[34px] sm:h-[34px]" />
                        <span className="max-[244px]:hidden">Video</span>
                    </div>
                </label>
            </div>

            <input type="file" id="postImageInput" className="hidden" {...register("postImageInput")} accept="image/*" />
            <input type="file" id="postVideoInput" className="hidden" {...register("postVideoInput")} accept="video/*" />
        </div>
    )
}