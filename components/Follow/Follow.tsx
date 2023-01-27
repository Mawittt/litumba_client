import Image from "next/image"
import { FollowProps } from "../../types/types"
import useFollow from "./useFollow"




export default function Follow(props: FollowProps) {
    const { follow, gotoProfile } = useFollow(props)
    return (
        <div className="shadow-comp rounded-lg flex py-4 px-2 gap-2">
            <Image src={follow.avatar} width={64} height={64} alt={"follow avatar"} className={"h-[64px] cursor-pointer rounded-full"} onClick={gotoProfile} />
            <div className="flex flex-col justify-center">
                <div className="font-bold text-blue-500 cursor-pointer" onClick={gotoProfile}>{follow.name}</div>
                <div>{follow.time}</div>
            </div>
        </div>
    )
}