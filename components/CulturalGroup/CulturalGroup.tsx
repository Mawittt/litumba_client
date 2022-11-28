import Image from "next/image"
import { ContactIcon, LocationIcon } from "../../assets/icons"
import { CulturalGroupsProps } from "../../types/types"
import useCulturalGroup from "./useCulturalGroup"






export default function CulturalGroup(props : CulturalGroupsProps){
        const  {image, name , location , members , gotoGroup , openConversation} = useCulturalGroup(props)
     return (
        <div className="py-4 px-2 shadow-comp_lg rounded-lg">
            <div className='flex justify-between w-full'>
                <div className="flex gap-2 items-center">
                    <div><Image src={image} alt={"author avatar"} width={64} height={64} className={"h-[64px] object-cover rounded-md cursor-pointer"} onClick={gotoGroup}  /></div>
                    <div >
                        <h3 className="font-bold text-blue-500 cursor-pointer" onClick={gotoGroup}>{name}</h3>
                        <div className='flex translate-x-[-5px]'>
                            <div className='h-[24px]'>
                                <LocationIcon />
                            </div>
                            <div>{location}</div>
                        </div>
                        <div>{members + " members"}</div>
                    </div>
                </div>
                <div className="cursor-pointer">
                    <ContactIcon onClick={openConversation}/>
                </div>
            </div>
        </div>
     )
}