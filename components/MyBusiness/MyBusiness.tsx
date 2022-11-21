import Image from "next/image";
import { MenuIcon} from "../../assets/icons";
import { MyBusinessProps } from "../../types/types";
import useMyBusiness from "./useMyBusiness";


export default function MyBusiness(props : MyBusinessProps) {
    const {image, name, assets, openBusiness} = useMyBusiness(props)
    return (
        <div className="h-fit w-full max-w-sm flex p-[5px] gap-3 ">
            <Image src={image} alt="brand avatar one" width={64} height={64} onClick={openBusiness} className="rounded-lg h-[64px]"/>
            <div className="flex w-full justify-between items-center">
                <div>
                    <div className="font-semibold" onClick={openBusiness}>{name}</div>
                    <div className=" text-bc_5"><span>assets:</span> <strong>{assets}</strong></div>
                </div>
                <MenuIcon onClick={openBusiness}/>
            </div>
        </div>
    )
}