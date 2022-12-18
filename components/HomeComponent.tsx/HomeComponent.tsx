import Image from "next/image";
import { avatar_1 } from "../../assets/avatars";
import { ContactIcon } from "../../assets/icons";
import { post_add_asset_icon, post_add_image_icon, post_add_video_icon } from "../../assets/images";
import AddPost from "../AddPost/AddPost";
import Post from "../Post/Post";
import useHomeComponent from "./useHomeComponent";



export default function HomeComponent() {
    const {posts} = useHomeComponent()
    return (
        <div className="w-full gap-[30px] flex flex-col md:p-4 py-4 px-2">
            <AddPost />
            {
                posts.map((post , index)=> <Post key={index} {...post}/>)
            }
        </div>
    )
}