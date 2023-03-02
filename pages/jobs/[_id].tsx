import Image from "next/image"
import { ContactIcon, EditIcon, LocationIcon } from "../../assets/icons"
import Loader from "../../assets/Loader"
import Button from "../../components/Button/Button"
import useJobDetails from "../../pageUtils/useJobDetails"
import { cn } from "../../utils/fn"





export default function JobDetails() {

    const { isLoading, details, gotoBrand, openChat, goBack, self, openJobEditor } = useJobDetails()

    return (
        <div className="px-4 py-6 w-full">
            <div className="w-full flex flex-col gap-6 bg-white rounded-lg overflow-hidden">
                {isLoading ? <div className="flex flex-col mt-6 items-center">
                    <Loader />
                    <p className="mt-4">Loading Job</p>
                </div> : <>
                    <div className="w-full h-[300px] relative">
                        <Image src={details?.cover || ""} fill alt="cover image" className="object-cover" />
                    </div>
                    <div className="w-full px-4 flex flex-col gap-6">
                        <div className='flex justify-between w-full flex-wrap'>
                            <div className="flex gap-2 items-center flex-wrap">
                                <div><Image src={details?.avatar || ""} alt={"author avatar"} width={64} height={64} className={cn("h-[64px] cursor-pointer", details?.isBrand ? "rounded-lg" : "rounded-full")} onClick={gotoBrand} /></div>
                                <div >
                                    <h3 className="font-bold text-blue-500 cursor-pointer" onClick={gotoBrand}>{details?.author}</h3>
                                    <div>{details?.email}</div>
                                    <div>{details?.website}</div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between items-end w-full flex-1">
                                <div >{self ? <EditIcon onClick={openJobEditor} /> : <ContactIcon onClick={openChat} />}</div>
                                <div className="w-[max-content]">{details?.time}</div>
                            </div>
                        </div>
                        <div className={cn(self ? "hidden" : "")}>
                            <Button label="Apply" onClick={openChat} />
                        </div>
                        <div>
                            <div className='flex translate-x-[-5px]'>
                                <div className='h-[24px]'>
                                    <LocationIcon />
                                </div>
                                <div>{details?.location}</div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold ">{details?.title}</h3>
                            <p>{details?.description}</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div>
                                <div>Price</div>
                                <div className="font-bold">{details?.price}</div>
                            </div>
                            <div>
                                <div>Niche</div>
                                <div className="font-bold">{details?.niche}</div>
                            </div>
                            <div>
                                <div>Urgency</div>
                                <div className="font-bold">{details?.urgency}</div>
                            </div>
                            <div>
                                <div>Expertise</div>
                                <div className="font-bold">{details?.expertise}</div>
                            </div>
                            <div>
                                <div>Schedule</div>
                                <div className="font-bold">{details?.schedule}</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    Available
                                </div>
                                <div className={
                                    cn(
                                        "w-4 h-4 rounded-full bg-red-500",
                                        details?.available ? "bg-green-500" : "bg-red-500"
                                    )
                                }></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Button label="Go to brand" full onClick={gotoBrand} />
                            <Button label="Go back" full onClick={goBack} />
                        </div>
                    </div>
                </>}
            </div>
        </div>
    )
}