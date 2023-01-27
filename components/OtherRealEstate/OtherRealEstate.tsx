import Image from "next/image";
import { ContactIcon } from "../../assets/icons";
import { OtherProductProps } from "../../types/types";
import { cn } from "../../utils/fn";
import useOtherRealEstate from "./useOtherRealEstate";





export default function OtherRealEstate(props: OtherProductProps) {
    const { real_estate, openRealEstate } = useOtherRealEstate(props)

    return (
        <div className=" py-4 px-2 shadow-comp_lg rounded-lg">
            <div className='flex justify-between w-full'>
                <div className="flex gap-2 items-center">
                    <div><Image src={real_estate.image} alt={"author avatar"} width={64} height={64} className={"h-[64px] rounded-md cursor-pointer"} onClick={openRealEstate} /></div>
                    <div >
                        <h3 className="font-bold text-blue-500 cursor-pointer" onClick={openRealEstate}>{real_estate.name}</h3>
                        <div>{real_estate.price} frs-cfa</div>
                    </div>
                </div>
            </div>
        </div>
    )
}