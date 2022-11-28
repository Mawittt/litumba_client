import Image from "next/image"
import { ContactIcon, LocationIcon } from "../../assets/icons"
import Button from "../../components/Button/Button"
import useJobDetails from "../../pageUtils/useJobDetails"
import { cn } from "../../utils/fn"





export default function JobDetails() {

    const { details , gotoBrand , openChat , goBack} = useJobDetails()

    return (
        <div className="w-full pb-4 px-4 flex flex-col gap-6">
            <div className="w-full h-[300px] relative">
                <Image src={details.cover} fill alt="cover image" />
            </div>
            <div className='flex justify-between w-full'>
                <div className="flex gap-2 items-center">
                    <div><Image src={details.avatar} alt={"author avatar"} width={64} height={64} className={"h-[64px] cursor-pointer"} onClick={gotoBrand} /></div>
                    <div >
                        <h3 className="font-bold text-blue-500 cursor-pointer" onClick={gotoBrand}>{details.author}</h3>
                        <div>{details.email}</div>
                        <div>{details.website}</div>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <div onClick={openChat}><ContactIcon /></div>
                    <div>{details.time}</div>
                </div>
            </div>
            <div>
                <Button label="Apply" onClick={openChat} />
            </div>
            <div>
                <div className='flex translate-x-[-5px]'>
                    <div className='h-[24px]'>
                        <LocationIcon />
                    </div>
                    <div>{details.location}</div>
                </div>
            </div>
            <div>
                <h3 className="font-bold ">{details.title}</h3>
                <p>{details.description}</p>
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    <div>Price</div>
                    <div className="font-bold">{details.price}</div>
                </div>
                <div>
                    <div>Niche</div>
                    <div className="font-bold">{details.niche}</div>
                </div>
                <div>
                    <div>Urgency</div>
                    <div className="font-bold">{details.urgency}</div>
                </div>
                <div>
                    <div>Type</div>
                    <div className="font-bold">{details.type}</div>
                </div>
                <div>
                    <div>level</div>
                    <div className="font-bold">{details.level}</div>
                </div>
                <div>
                    <div>Schedule</div>
                    <div className="font-bold">{details.schedule}</div>
                </div>
                <div className="flex items-center gap-2">
                    <div>
                        Available
                    </div>
                    <div className={
                        cn(
                            "w-4 h-4 rounded-full bg-red-500",
                            details.available ? "bg-green-500" : "bg-red-500"
                        )
                    }></div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <Button label="Go to brand" full  onClick={gotoBrand}/>
                <Button label="Go back" full  onClick={goBack}/>
            </div>
        </div>
    )
}