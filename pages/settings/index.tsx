import Image from "next/image";
import { AddImageIcon } from "../../assets/icons";
import Loader from "../../assets/Loader";
import Button from "../../components/Button/Button";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import useSettings from "../../pageUtils/useSettings";





export default function Settings() {
    const { mutator, profile, cover, register, handleSubmit, errors, watch, saveSettings, setCoverImage, setProfileImage } = useSettings()
    return (
        <div className="shadow-comp_lg rounded-lg py-4 px-2 mx-2 flex flex-col gap-4">
            <div>
                <div className="relative w-full h-[300px]">
                    {!!cover && <Image src={cover} alt="cover image" fill className="object-cover" />}
                </div>
                <div className="w-full  flex justify-center h-[75px]">
                    <div className="w-[150px] h-[150px] overflow-hidden translate-y-[-50%] rounded-full">
                        {!!profile && <Image src={profile} alt="profile image" fill className="object-cover" />}
                    </div>
                </div>
            </div>
            <div>
                <Button label="Set Cover" icon={<AddImageIcon />} inputLabel="cover-image" />
                <input onChange={setCoverImage} type="file" name="cover-image" id="cover-image" className="hidden" />
            </div>
            <div>
                <Button label="Set profile" icon={<AddImageIcon />} inputLabel='profile-image' />
                <input onChange={setProfileImage} type="file" name="profile-image" id="profile-image" className="hidden" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">First name</div>
                <input type="text" className="text-input" {...register("firstName")} value={watch("firstName")} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Last name</div>
                <input type="text" className="text-input" {...register("lastName")} value={watch("lastName")} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Country</div>
                <input type="text" className="text-input" {...register("country")} value={watch("country")} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">City</div>
                <input type="text" className="text-input" {...register("city")} value={watch("city")} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Description</div>
                <textarea className="text-input h-[100px] rounded-lg" {...register("description")} value={watch("description")} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">profession</div>
                <input type="text" className="text-input" {...register("profession")} value={watch("profession")} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Phone</div>
                <input type="text" className="text-input" {...register("phone")} value={watch("phone")} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Email</div>
                <input type="text" className="text-input" {...register("email")} value={watch("email")} />
            </div>
            <h3 className="font-bold text-lg">privacy</h3>
            <div className="flex w-full justify-between">
                <div>Display phone on profile</div>
                <ToggleButton attributes={{ ...register("privacy.phoneOnProfile") }} value={watch("privacy.phoneOnProfile")} />
            </div>
            <div className="flex w-full justify-between">
                <div>Display email on profile</div>
                <ToggleButton attributes={{ ...register("privacy.emailOnProfile") }} value={watch("privacy.emailOnProfile")} />
            </div>
            {mutator.isLoading ? <div className="flex justify-center"><Loader /></div> : <Button label="Save changes" onClick={handleSubmit(saveSettings)} />}
        </div>
    )
}