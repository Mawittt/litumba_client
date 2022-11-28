import Image from "next/image";
import { ContactIcon, LocationIcon } from "../../../assets/icons";
import Button from "../../../components/Button/Button";
import Review from "../../../components/Review/Review";
import UseCase from "../../../components/UseCase/UseCase";
import useServiceDetails from "../../../pageUtils/useServiceDetails";
import { cn } from "../../../utils/fn";



export default function ServiceDetails() {

    const { details , useCases , reviews , goBack , openBrand , openConversation} = useServiceDetails()

    return (
        <div className="flex-col flex gap-4 pb-6">
            <div className="relative w-full h-[300px] ">
                <Image src={details.cover} fill alt="cover image" className="object-cover" />
            </div>
            <div className="flex flex-col px-2 gap-4">
                <div className='flex justify-between w-full'>
                    <div className="flex gap-2 items-center">
                        <div><Image src={details.avatar} alt={"author avatar"} width={64} height={64} className={"h-[64px] cursor-pointer"} onClick={openBrand} /></div>
                        <div >
                            <h3 className="font-bold text-blue-500 cursor-pointer" onClick={openBrand}>{details.author}</h3>
                            <div>{details.email}</div>
                            <div>{details.website}</div>
                        </div>
                    </div>
                    <div className="cursor-pointer">
                        <ContactIcon onClick={openConversation}/>
                    </div>
                </div>
                <div>
                    <Button label="Leave a review" />
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-blue-500">{details.title}</h3>
                    <p>{details.description}</p>
                    <div>
                        <div>Price</div>
                        <strong>{details.price}</strong>
                    </div>
                    <div>
                        <div>Niche</div>
                        <strong>{details.niche}</strong>
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
                <div className="flex flex-col gap-4">
                    <h2 className="font-bold" >Use-cases</h2>
                    <div className="flex flex-col gap-4 text-sm">
                        {useCases.map(useCase=> <UseCase key={useCase._id}  {...useCase}/>)}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="font-bold" >Reviews</h2>
                    <div className="flex flex-col gap-4 text-sm">
                        {reviews.map(review=> <Review key={review._id}  {...review}/>)}
                        <Button label="more" full />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                <Button label="Go to brand" full onClick={openBrand}/>
                <Button label="Go back" full onClick={goBack}/>
            </div>
            </div>
        </div>
    )
}