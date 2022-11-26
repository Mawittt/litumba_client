import Image from "next/image"
import { ReviewProps } from "../../types/types"
import Stars from "../Stars/Stars"
import useReview from "./useReview"




export default function Review(props: ReviewProps) {
    const { review } = useReview(props)

    return (
        <div className="shadow-comp_lg rounded-sm py-4 px-2">
            <div  className="flex gap-2">
                <div><Image src={review.avatar} alt="reviewer avatar" width={64} height={64} className="h-[64px] rounded-full" /></div>
                <div>
                    <strong>{review.name}</strong>
                    <div>{review.time}</div>
                    <div><Stars number={review.stars} /></div>
                </div>
            </div>
            <div className="text-sm">
                {review.comment}
            </div>
        </div>
    )
}