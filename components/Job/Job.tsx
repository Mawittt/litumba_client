import Image from "next/image"
import { ContactIcon, LocationIcon } from "../../assets/icons"
import { JobProps } from "../../types/types"
import useJob from "./useJob"




export default function Job(props: JobProps) {
    const { avatar, title, location, time, description, tags, brand , openJob , openChat} = useJob(props)
    return (
        <div className="py-4 px-2 gap-2 flex flex-col shadow-comp_lg rounded-lg my-4">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div><Image src={avatar} alt={"author avatar"} width={64} height={64} className={"h-[64px] cursor-pointer"} onClick={openJob} /></div>
                    <div >
                        <h3 className="font-bold text-blue-500 cursor-pointer" onClick={openJob} >{title}</h3>
                        <div className="flex translate-x-[-5px]">
                            <div className="h-[24px] overflow-hidden "><LocationIcon /></div>
                            <div>{location}</div>
                        </div>
                        <div>{time}</div>
                    </div>
                </div>
                <div onClick={openChat}>
                    <ContactIcon />
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