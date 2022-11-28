import { spawn } from "child_process"
import Image from "next/image"
import { actions } from "../../assets/constant"
import { NotificationProps } from "../../types/types"
import useNotification from "./useNotification"


export default function Notification(props: NotificationProps) {

    const { notification , gotoProfile , gotoProduct , gotoService } = useNotification(props)

    return (
        <div className="shadow-comp rounded-lg flex items-end justify-between py-4 px-2">
            <div className="flex gap-2 ">
                <Image src={notification.avatar} alt="notification avatar" width={64} height={64} className={'h-[64px] cursor-pointer'} onClick={gotoProfile}/>
                <div >
                    <div className="font-bold text-blue-500 cursor-pointer" onClick={gotoProfile}>{notification.name}</div>
                    {notification.action === actions.like && <div><span>Likes: </span><span className="font-bold text-blue-500 cursor-pointer" onClick={gotoProduct}>{notification.product}</span></div>}
                    {notification.action === actions.review && <div><span>reviewed: </span><span className="font-bold text-blue-500 cursor-pointer" onClick={gotoService}>{notification.service}</span></div>}
                    {notification.action === actions.follow && <div><span>followed you </span></div>}
                </div>
            </div>
            <div>{notification.time}</div>
        </div>
    )
}