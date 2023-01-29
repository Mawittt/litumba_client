import Image from "next/image";
import { MenuIcon } from "../../assets/icons";
import { MyJobProps } from "../../types/types";
import useMyJob from "./useMyJob";



export default function MyJob(props: MyJobProps) {
    const { image, title, openJob } = useMyJob(props)

    return (
        <div className="flex h-fit w-full gap-3 p-2">
            <Image src={image} alt="job image" width={64} height={64}
                className={"h-[64px] rounded-lg cursor-pointer rounded-full"}
                onClick={openJob}
            />
            <div className="flex justify-between w-full items-center">
                <div>
                    <div className="font-bold cursor-pointer" onClick={openJob}>{title}</div>
                </div>
                <div className="cursor-pointer">
                    <MenuIcon onClick={openJob} />
                </div>
            </div>
        </div>
    )
}