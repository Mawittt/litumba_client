import { ErrorMessage } from "@hookform/error-message";
import Image from "next/image";
import { BusinessFormOptions } from "../../assets/constant";
import { AddImageIcon } from "../../assets/icons";
import Button from "../../components/Button/Button";
import useBusinessCreation from "../../pageUtils/useBusinessCreation";





export default function BusinessCreation() {
    const { cover, logo, register, handleSubmit, errors , createBusiness } = useBusinessCreation()
    return (
        <div className="shadow-comp_lg rounded-lg py-4 px-2 mx-2 flex flex-col gap-4 mt-4">
            <h3 className="font-bold text-2xl">Create a Business</h3>
            <p>please fill the below form and click the &quot;Create Job&quot; button to create a new job.</p>
            <div>
                <Button label="add logo" icon={<AddImageIcon />} inputLabel={"logo"} />
                <input type="file" id="logo" {...register("logo",{required : "The logo is required"})}  className="hidden" accept="image/*" />
                <ErrorMessage name="logo" errors={errors} as="div"/>
                {logo &&
                    <div className="relative w-full aspect-square mt-4">
                        <Image src={logo} fill alt="cover image" className="object-cover"/>
                    </div>}
            </div>
            <div>
                <Button label="add Cover" icon={<AddImageIcon />} inputLabel={"cover"} />
                <input type="file" id="cover" {...register("cover",{required : "The cover Image is required"})} accept="image/*" className="hidden" />
                <ErrorMessage name="cover" errors={errors} as="div" />
                {cover &&
                    <div className="relative w-full aspect-square mt-4">
                        <Image src={cover} fill alt="cover image" className="object-cover"/>
                    </div>}
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Name</div>
                <input type="text" className="text-input" {...register("name",{required : "The name is required"})} />
                <ErrorMessage name="name" errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Country</div>
                <input type="text" className="text-input" {...register("country",{required : "The country is required"})} />
                <ErrorMessage name="country" errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">City</div>
                <input type="text" className="text-input" {...register("city",{required : "The City is required"})} />
                <ErrorMessage name="city" errors={errors}/>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Description</div>
                <textarea className="text-input h-[100px] rounded-lg" {...register("description", {required : "The description is required"})} />
                <ErrorMessage name="description" errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Niche</div>
                <select className="text-input p-0" {...register("niche",{required : "The niche is required"})} >
                    <option value=""></option>
                    {BusinessFormOptions.niches.map(niche=><option value={niche} key={niche}>{niche}</option>)}
                </select>
                <ErrorMessage name="niche" errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Phone</div>
                <input type="text" className="text-input" {...register("phone", {required : "The phone is required"})}/>
                <ErrorMessage name="phone" errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Email</div>
                <input type="text" className="text-input" {...register("email")} />
                <ErrorMessage name="email" errors={errors} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">website</div>
                <input type="text" className="text-input" {...register("website")} />
                <ErrorMessage name="website" errors={errors} />
            </div>

            <Button label="Create Job" onClick={handleSubmit(createBusiness)} />

        </div>
    )
}