import Image from "next/image";
import { avatar_1_md } from "../../assets/avatars";
import { BackIcon, MessagesIcon, NotificationIcon, SettingsIcon } from "../../assets/icons";
import useProfilePreview from "./useProfilePreview";





export default function ProfilePreview(){
   const {image,name ,description, notifications , messages , followers , following,
    openProfile, openNotifications, openMessages , openSettings , openFollowers , openFollowing , closeMenu
    } = useProfilePreview()
    return(
        <div className="relative gap-y-[20px] w-full bg-white h-fit px-[20px] py-[10px] rounded-lg flex-col items-center flex shadow-comp_lg " >
            <div className="absolute sm:hidden top-4 right-4 cursor-pointer">
                <BackIcon onClick={closeMenu} />
            </div>
            <Image src={image} width={124} height={124} onClick={openProfile} alt="profile image" className="cursor-pointer shadow-icon h-[124px] w-[124px] border-2 border-solid border-white drop-shadow-4xl rounded-full"/>
            <h3 className="font-bold text-blue-500 cursor-pointer" onClick={openProfile}>{name}</h3>
            <p>{description}</p>
            <div className="flex max-w-[200px] justify-between my-[20px] w-full">
                <div className="relative cursor-pointer" onClick={openNotifications}>
                    <div className="info-count" >{notifications}</div>
                    <NotificationIcon />    
                </div>
                <div  className="relative cursor-pointer" onClick={openMessages}>
                    <div className="info-count" >{messages}</div>
                    <MessagesIcon />
                </div>
                <div className="cursor-pointer">
                    <SettingsIcon onClick={openSettings}/>
                </div>
            </div>

            <div className="flex w-full justify-around border-solid border-y-[1.5px] border-border p-[10px]">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-blue-500 font-bold cursor-pointer" onClick={openFollowers}>{followers}</div>
                    <div>Followers</div>
                </div>
                <div className="w-[2px] h-fill bg-border"></div>
                <div className="flex flex-col items-center justify-center">
                    <div className="text-blue-500 font-bold cursor-pointer" onClick={openFollowing}>{following}</div>
                    <div>Following</div>
                </div>
            </div>
        </div>
    )
}