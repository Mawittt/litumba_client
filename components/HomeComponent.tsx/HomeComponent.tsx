import Image from "next/image";
import { avatar_1 } from "../../assets/avatars";
import { ContactIcon } from "../../assets/icons";
import { post_add_asset_icon, post_add_image_icon, post_add_video_icon } from "../../assets/images";
import Post from "../Post/Post";
import useHomeComponent from "./useHomeComponent";



export default function HomeComponent() {
    const {posts} = useHomeComponent()
    return (
        <div className="w-full gap-[30px] flex flex-col">
            <div className="w-full shadow-comp_lg h-fit gap-[30px] flex flex-col items-center py-[20px] px-[10px] rounded-lg max-[324px]:px-[2px]">
                <div className="flex gap-4 items-center w-full">
                    <Image src={avatar_1} width={35} height={35} alt={"profile image"} className="h-[35px]" />
                    <div className="flex w-full items-center gap-2">
                        <input type="text" className="border-[1.5px] p-2 border-solid border-border h-[35px] w-full rounded-full box-border shadow-text_input_shadow" />
                        <div className="translate-y-[8px]">
                            <ContactIcon />
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 mt-4">
                    <div className="post-option">
                        <Image src={post_add_image_icon} alt="add image icon" height={34} width={34} className=" w-[20px] h-[20px] sm:w-[34px] sm:h-[34px]" />
                        <span className="max-[244px]:hidden">Image</span>
                    </div>
                    <div className="post-option">
                        <Image src={post_add_video_icon} alt="add image icon " height={34} width={34} className=" w-[20px] h-[20px] sm:w-[34px] sm:h-[34px]" />
                        <span className="max-[244px]:hidden">Video</span>
                    </div>
                    <div className="post-option">
                        <Image src={post_add_asset_icon} alt="add asset icon" height={34} width={34} className=" w-[20px] h-[20px] sm:w-[34px] sm:h-[34px]" />
                        <span className="max-[244px]:hidden">Asset</span>
                    </div>
                </div>
            </div>
            {
                posts.map((post , index)=> <Post key={index} {...post}/>)
            }
        </div>
    )
}