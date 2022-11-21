import Image from "next/image"
import { MenuIcon } from "../../assets/icons"
import { MyServiceProps } from "../../types/types"
import useMyService from "./useMyService"




export default function MyService(props : MyServiceProps){
    const {image , title , interested} = useMyService(props)
    return (
        <div className="flex w-full gap-3 h-fit p-2">
            <Image src={image} alt={"author image"} width={64} height={64} className="h-[64px] rounded-lg " />
            <div className="w-full flex items-center justify-between">
                <div>
                    <div className="font-bold">{title}</div>
                    <div><span>interested: </span><strong>{interested}</strong></div>
                </div>
                <MenuIcon />
            </div>
        </div>
    )
}