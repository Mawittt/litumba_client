import Image from "next/image"
import { ContactIcon, EditIcon, LocationIcon } from "../../assets/icons"
import Button from "../../components/Button/Button"
import useCulturalGroupDetails from "../../pageUtils/useCulturalGroupDetails"





export default function CulturalGroupDetails() {
    const { details , self , goBack , gotoConversation , openGroupEditor} = useCulturalGroupDetails()

    return (
        <div >
            <div className="w-full h-[300px] relative">
                <Image src={details.cover} fill alt="cover image" className="object-cover"/>
            </div>
            <div className="flex flex-col gap-4 py-4 px-2">
                <div className='flex justify-between w-full'>
                    <div className="flex gap-2 items-center">
                        <div><Image src={details.avatar} alt={"author avatar"} width={64} height={64} className={"h-[64px]"} /></div>
                        <div >
                            <h3 className="font-bold text-blue-500">{details.name}</h3>
                            <div>{details.members}</div>
                        </div>
                    </div>
                    <div>{self ? <EditIcon onClick={openGroupEditor} /> : <ContactIcon onClick={gotoConversation} />}</div>
                </div>
                <div>{details.description}</div>
                <div className='flex translate-x-[-5px]'>
                    <div className='h-[24px]'>
                        <LocationIcon />
                    </div>
                    <div>{details.location}</div>
                </div>
                <Button label="back" full onClick={goBack}/>
            </div>
        </div>
    )
}