import Image from "next/image";
import { AddImageIcon } from "../../assets/icons";
import Button from "../../components/Button/Button";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import useSettings from "../../pageUtils/useSettings";





export default function Settings() {
    const { user } = useSettings()
    return (
        <div className="shadow-comp_lg rounded-lg py-4 px-2 mx-2 flex flex-col gap-4">
            <div>
                <div className="relative w-full h-[300px]">
                    <Image src={user.cover} alt="cover image" fill className="object-cover" />
                </div>
                <div className="w-full  flex justify-center h-[75px]">
                    <div className="w-[150px] h-[150px] overflow-hidden translate-y-[-50%] rounded-full">
                        <Image src={user.profile} alt="profile image" fill className="object-cover" />    
                    </div>
                </div>
            </div>
            <div>
                <Button label="Set profile" icon={<AddImageIcon />} />
            </div>
            <div>
                <Button label="Set Cover" icon={<AddImageIcon />} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">First name</div>
                <input type="text" className="text-input" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Last name</div>
                <input type="text" className="text-input" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Country</div>
                <input type="text" className="text-input" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">City</div>
                <input type="text" className="text-input" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Description</div>
                <textarea className="text-input h-[100px] rounded-lg" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">profession</div>
                <input type="text" className="text-input" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Birthday</div>
                <input type="text" className="text-input" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Phone</div>
                <input type="text" className="text-input" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">Email</div>
                <input type="text" className="text-input" />
            </div>
            <h3 className="font-bold text-lg">privacy</h3>
            <div className="flex w-full justify-between">
                <div>Display phone on profile</div>
                <ToggleButton />
            </div>
            <div className="flex w-full justify-between">
                <div>Display phone on businesses</div>
                <ToggleButton />
            </div>
            <div className="flex w-full justify-between">
                <div>Display email on profile</div>
                <ToggleButton />
            </div>
            <div className="flex w-full justify-between">
                <div>Display email on businesses</div>
                <ToggleButton />
            </div>
            <Button label="Save changes" />
        </div>
    )
}