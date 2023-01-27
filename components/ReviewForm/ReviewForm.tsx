import { ErrorMessage } from "@hookform/error-message";
import { CreateReviewProps } from "../../types/types";
import { cn } from "../../utils/fn";
import Button from "../Button/Button";
import useReviewForm from "./useReviewForm";



export default function ReviewForm(props: CreateReviewProps) {
    const { register, handleSubmit, errors, saveReview, form, toggleForm } = useReviewForm(props)
    return (
        <div className="gap-4 flex flex-col">
            <Button label={cn(form ? "Close form" : "Leave a review")} className="w-fit" onClick={toggleForm} />
            {form && <div className="gap-4 flex flex-col">
                <div className="flex flex-col gap-2">
                    <div className="font-bold">Stars (1 - 5 )</div>
                    <input type="number" min={1} max={"5"} className="text-input" {...register("stars", { required: "The stars is required" })} />
                    <ErrorMessage name='stars' errors={errors} />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="font-bold">Description</div>
                    <textarea className="text-input h-[100px]" {...register("description", { required: "The description is required" })} />
                    <ErrorMessage name='description' errors={errors} />
                </div>
                <Button label="save review" full onClick={handleSubmit(saveReview)} />
            </div>}
        </div>
    )
}