import Image from "next/image";
import { avatar_1_md } from "../../assets/avatars";
import { NotificationIcon, SettingsIcon } from "../../assets/icons";





export default function ProfilePreview(){
    const image = avatar_1_md
    const name = "Ana Rose"
    const description = "I am a bakwerian living in los Angeles. I love my people and culture and am willing to meet other bakwerians"
    const notifications = 5
    const messages = 3
    const followers = 5500
    const following = 3005
    return(
        <div className=" gap-y-[20px] max-w-md bg-white h-fit px-[20px] py-[10px] rounded-lg flex-col items-center flex shadow-comp_lg " >
            <Image src={image} alt="profile image" className="shadow-icon  w-[124px] border-2 border-solid border-white drop-shadow-4xl rounded-full"/>
            <h3 className="font-bold">{name}</h3>
            <p>{description}</p>
            <div className="flex max-w-[200px] justify-between my-[20px] w-full">
                <div className="relative">
                    <div className="info-count">{notifications}</div>
                    <NotificationIcon />    
                </div>
                <div  className="relative">
                    <div className="info-count">{messages}</div>
                    <NotificationIcon />
                </div>

                <SettingsIcon />
            </div>

            <div className="flex w-full justify-around border-solid border-y-[1.5px] border-border p-[10px]">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-blue-500 font-bold">{followers}</div>
                    <div>Followers</div>
                </div>
                <div className="w-[2px] h-fill bg-border"></div>
                <div className="flex flex-col items-center justify-center">
                    <div className="text-blue-500 font-bold">{following}</div>
                    <div>Following</div>
                </div>
            </div>
        </div>
    )
}