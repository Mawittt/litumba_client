import { ErrorMessage } from "@hookform/error-message";
import Image from "next/image";
import { AddImageIcon } from "../../assets/icons";
import Button from "../../components/Button/Button";
import useCulturalGroupsUpdate from "../../pageUtils/useCulturalGroupsUpdate";





export default function CulturalGroupCreation() {
    const { register, handleSubmit, updateCulturalGroup, errors, cover, profile , watch } = useCulturalGroupsUpdate()
    return (
        <div className="shadow-comp_lg rounded-lg py-4 px-2 mx-2 flex flex-col gap-4">
            <h3 className="font-bold text-2xl">Create a Cultural group</h3>
            <p>please fill the below form and click the &quot;Create Group&quot; button to create a new job.</p>
            <div>
                <Button label="add profile" icon={<AddImageIcon />} inputLabel={"profile"} />
                <input type="file"  id="profile" {...register("profile")} className="hidden" accept="image/*" />
                {profile && <div className="relative w-full aspect-square mt-2 max-w-[300px]">
                    <Image src={profile} alt="profile image" fill className="object-cover " />
                </div>}
            </div>
            <div>
                <Button label="add Cover" icon={<AddImageIcon />} inputLabel="cover"/>
                <input type="file"  id="cover" {...register("cover")} className="hidden" accept="image/*" />
                {cover && <div className="relative w-full aspect-square mt-2 max-w-[300px]">
                    <Image src={cover} alt="profile image" fill className="object-cover" />
                </div>}
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Name</div>
                <input type="text" className="text-input" {...register("name", { required: "The name is required" })} value={watch("name")}/>
                <ErrorMessage name="name" errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Country</div>
                <input type="text" className="text-input" {...register("country", { required: "The country is required" })} value={watch("country")} />
                <ErrorMessage name="country" errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">City</div>
                <input type="text" className="text-input" {...register("city", { required: "The city is required" })} value={watch("city")} />
                <ErrorMessage name="city" errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Description</div>
                <textarea className="text-input h-[100px] rounded-lg" {...register("description", { required: "description" })} value={watch("description")} />
                <ErrorMessage name="description" errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Number of members</div>
                <input type="number" className="text-input" {...register("members", { required: 'The number of members is required' })} value={watch("members")} />
                <ErrorMessage name="members" errors={errors} />
            </div>
            <Button label="Create group" onClick={handleSubmit(updateCulturalGroup)} />
        </div>
    )
}