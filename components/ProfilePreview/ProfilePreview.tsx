import Image from "next/image";
import { avatar_1_md } from "../../assets/avatars";
import { BackIcon, MessagesIcon, NotificationIcon, SettingsIcon } from "../../assets/icons";
import { ProfilePreviewProps } from "../../types/types";
import useProfilePreview from "./useProfilePreview";





export default function ProfilePreview(props: ProfilePreviewProps) {
    const { image, name, description, notifications, newMessages, followers, following,
        openProfile, openNotifications, openMessages, openSettings, openFollowers, openFollowing, closeMenu
    } = useProfilePreview(props)
    return (
        <div className="relative gap-y-[20px] w-full bg-white h-fit px-[20px] py-[10px] rounded-lg flex-col items-center flex shadow-comp_lg " >
            <div className="absolute sm:hidden top-4 right-4 cursor-pointer">
                <BackIcon onClick={closeMenu} />
            </div>
            <Image src={image} width={124} height={124} onClick={openProfile} alt="profile image" className="cursor-pointer shadow-icon h-[124px] w-[124px] border-2 border-solid border-white drop-shadow-4xl rounded-full" />
            <h3 className="font-bold text-blue-500 cursor-pointer" onClick={openProfile}>{name}</h3>
            <p className="text-center">{description}</p>
            <div className="flex max-w-[200px] justify-between my-[20px] w-full">
                <div className="relative cursor-pointer" onClick={openNotifications}>
                    {!!notifications && <div className="info-count" >{notifications}</div>}
                    <NotificationIcon />
                </div>
                <div className="relative cursor-pointer" onClick={openMessages}>
                    {!!newMessages && <div className="info-count" >{newMessages}</div>}
                    <MessagesIcon />
                </div>
                <div className="cursor-pointer">
                    <SettingsIcon onClick={openSettings} />
                </div>
            </div>
            <div className="flex w-full justify-around border-solid border-y-[1.5px] border-border p-[10px] text-blue-500">
                <div className="flex flex-col items-center justify-center cursor-pointer">
                    <div className=" font-bold " onClick={openFollowers}>{followers}</div>
                    <div onClick={openFollowers}>Followers</div>
                </div>
                <div className="w-[2px] h-fill bg-border"></div>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                    <div className=" font-bold " onClick={openFollowing}>{following}</div>
                    <div onClick={openFollowing}>Following</div>
                </div>
            </div>
        </div>
    )
}