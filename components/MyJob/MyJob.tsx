import Image from "next/image";
import { MenuIcon } from "../../assets/icons";
import { MyJobProps } from "../../types/types";
import useMyJob from "./useMyJob";



export default function MyJob(props : MyJobProps){
   const {image , title, applicants , openJob} = useMyJob(props)

    return(
        <div className="flex h-fit w-full gap-3 p-2">
            <Image src={image} alt="job image" width={64} height={64} 
                className={"h-[64px] rounded-lg cursor-pointer" }
                 onClick={openJob} 
            />
            <div className="flex justify-between w-full items-center">
                <div>
                    <div className="font-bold cursor-pointer" onClick={openJob}>{title}</div>
                    <div className=" text-bc_5"><span>Applicants:</span> <span className="font-bold">{applicants}</span></div>
                </div>
                <div className="cursor-pointer">
                    <MenuIcon  onClick={openJob}/>
                </div>
            </div>
        </div>
    )
}