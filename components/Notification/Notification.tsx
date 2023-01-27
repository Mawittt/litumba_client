import { spawn } from "child_process"
import Image from "next/image"
import { actions } from "../../assets/constant"
import { NotificationProps } from "../../types/types"
import useNotification from "./useNotification"


export default function Notification(props: NotificationProps) {

    const { notification, gotoProfile, gotoPost, gotoService } = useNotification(props)

    return (
        <div className="shadow-comp rounded-lg flex items-end justify-between py-2 px-2">
            <div className="flex gap-2 ">
                <Image src={notification.avatar} alt="notification avatar" width={64} height={64} className={'h-[64px] cursor-pointer rounded-full'} onClick={gotoProfile} />
                <div className="flex flex-col justify-center" >
                    <div className="font-bold text-blue-500 cursor-pointer " onClick={gotoProfile}>{notification.name}</div>
                    {notification.action === actions.like && <div><span className="font-semibold text-blue-500 cursor-pointer" onClick={gotoPost}>Liked a post</span></div>}
                    {notification.action === actions.review && <div><span>Reviewed: </span><span className="cursor-pointer text-blue-500 font-semibold" onClick={gotoService}>{notification.serviceName}</span></div>}
                    {notification.action === actions.follow && <div><span>Followed you </span></div>}
                    {notification.action === actions.comment && <div><span className="font-semibold text-blue-500" onClick={gotoPost}>Commented to a post</span></div>}
                </div>
            </div>
            <div>{notification.time}</div>
        </div>
    )
}