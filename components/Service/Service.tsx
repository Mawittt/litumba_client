import Image from "next/image";
import { ContactIcon, LocationIcon } from "../../assets/icons";
import { ServiceProps } from "../../types/types";
import { cn } from "../../utils/fn";
import useService from "./useService";





export default function Service(props: ServiceProps) {

    const { avatar, title, location, website, description, tags, openService, openConversation, isBrand } = useService(props)

    return (
        <div className=" flex flex-col gap-2 py-4 px-2 shadow-comp_lg rounded-lg bg-white">
            <div className='flex justify-between w-full'>
                <div className="flex gap-2 items-center flex-wrap">
                    <div><Image src={avatar} alt={"author avatar"} width={64} height={64} className={cn("h-[64px] cursor-pointer", isBrand ? "rounded-lg" : "rounded-full")} onClick={openService} /></div>
                    <div >
                        <h3 className="font-bold text-blue-500 cursor-pointer" onClick={openService}>{title}</h3>
                        <div className='flex translate-x-[-5px]'>
                            <div className='h-[24px]'>
                                <LocationIcon />
                            </div>
                            <div>{location}</div>
                        </div>
                        <div>{website}</div>
                    </div>
                </div>
                <div className="cursor-pointer">
                    <ContactIcon onClick={openConversation} />
                </div>
            </div>
            <div>
                {description}
            </div>
            <div className="w-full overflow-scroll rounded-full relative">
                <div className="flex w-max ">
                    {tags?.map((tag, index) => {
                        return <div key={index} className="py-1 px-4 bg-blue-500 mx-2 w-fit text-white rounded-full">{tag}</div>
                    })}
                </div>
            </div>
        </div>
    )

}