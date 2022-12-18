import { ErrorMessage } from "@hookform/error-message";
import Image from "next/image";
import { AddImageIcon } from "../../assets/icons";
import Button from "../../components/Button/Button";
import useCaseStudyCreate from "./useCaseStudyCreate";




export default function CaseStudyCreate() {
    const { register, handleSubmit, errors, watch, createCaseStudy, preview } = useCaseStudyCreate()
    return (
        <div className="py-4 px-2 mt-4 rounded-lg shadow-comp_lg gap-4 flex flex-col">
            <Button icon={<AddImageIcon />} label="add image" className="w-fit" inputLabel="preview" />
            <input type="file" id="preview" accept="image/*" {...register("preview",{required : "The Preview is required"})} className="hidden" />
            <ErrorMessage name="preview" errors={errors} as="div" />
            {preview && <div className="relative w-fill aspect-square ">
                <Image src={preview} fill alt="preview image" className="object-cover" />
            </div>}
            <div className="flex flex-col gap-2">
                <div className="font-bold">Title</div>
                <input type="text" className="text-input" {...register("title", { required: "The Title is required" })} value={watch("title")} />
                <ErrorMessage name='title' errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Description</div>
                <textarea className="text-input h-[100px]" {...register("description", { required: "The description is required" })} value={watch("description")} />
                <ErrorMessage name='description' errors={errors} />
            </div>
            <Button label="Create case study" onClick={handleSubmit(createCaseStudy)} className="" full />
        </div>
    )
}