import Image from "next/image"
import { MenuIcon } from "../../assets/icons"
import { MyServiceProps } from "../../types/types"
import useMyService from "./useMyService"




export default function MyService(props: MyServiceProps) {
    const { image, title, openService } = useMyService(props)
    return (
        <div className="flex w-full gap-3 h-fit p-2">
            <Image src={image} alt={"author image"} width={64} height={64} className="h-[64px] rounded-lg cursor-pointer rounded-full" onClick={openService} />
            <div className="w-full flex items-center justify-between">
                <div>
                    <div className="font-bold cursor-pointer" onClick={openService}>{title}</div>
                </div>
                <div className="cursor-pointer" onClick={openService}>
                    <MenuIcon />
                </div>
            </div>
        </div>
    )
}