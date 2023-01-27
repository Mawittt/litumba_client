import Image from "next/image";
import { ContactIcon, EditIcon, LocationIcon } from "../../../assets/icons";
import Loader from "../../../assets/Loader";
import Button from "../../../components/Button/Button";
import CaseStudyCreate from "../../../components/CaseStudyCreate/CaseStudyCreate";
import Review from "../../../components/Review/Review";
import ReviewForm from "../../../components/ReviewForm/ReviewForm";
import UseCase from "../../../components/UseCase/UseCase";
import useServiceDetails from "../../../pageUtils/useServiceDetails";
import { cn } from "../../../utils/fn";



export default function ServiceDetails() {

    const { moreReviews, isSuccess, details, useCases, reviews, self, goBack, openBrand, openConversation, openServiceEditor, toggleReviews } = useServiceDetails()

    return (
        <div className="flex-col flex gap-4 pb-6">
            {!isSuccess ? <div className="flex flex-col items-center mt-6">
                <Loader />
                <p className="mt-2">Loading Service</p>
            </div> : <>
                <div className="relative w-full h-[300px] ">
                    <Image src={details.cover} fill alt="cover image" className="object-cover" />
                </div>
                <div className="flex flex-col px-2 gap-4">
                    <div className='flex justify-between w-full'>
                        <div className="flex gap-2 items-center flex-wrap">
                            <div><Image src={details.avatar} alt={"author avatar"} width={64} height={64} className={cn("h-[64px] cursor-pointer", details.isBrand ? "rounded-lg" : "rounded-full")} onClick={openBrand} /></div>
                            <div >
                                <h3 className="font-bold text-blue-500 cursor-pointer" onClick={openBrand}>{details.author}</h3>
                                <div>{details.email}</div>
                                <div>{details.website}</div>
                            </div>
                        </div>
                        <div className="cursor-pointer">
                            {self ? <EditIcon onClick={openServiceEditor} /> : <ContactIcon onClick={openConversation} />}
                        </div>
                    </div>
                    <div className={cn(self ? "hidden" : "")}>
                        <ReviewForm serviceId={details._id} />
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
                        <h2 className="font-bold" >Case studies</h2>
                        <div className="flex flex-col gap-4 text-sm">
                            {self && <CaseStudyCreate serviceId={details._id} />}
                            {!useCases.length ? <div className="text-center">There are no case studies</div> : useCases.map(useCase => <UseCase key={useCase._id}  {...useCase} />)}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="font-bold" >Reviews</h2>
                        <div className="flex flex-col gap-4 text-sm">
                            {!reviews.length ? <div className="text-center">There are no reviews</div> : reviews.map(review => <Review key={review._id}  {...review} />)}
                            {reviews.length ? <Button label={cn(moreReviews ? "Show less reviews" : "Show more reviews")} full onClick={toggleReviews} /> : ""}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Button label="Go to brand" full onClick={openBrand} />
                        <Button label="Go back" full onClick={goBack} />
                    </div>
                </div>
            </>}
        </div>
    )
}