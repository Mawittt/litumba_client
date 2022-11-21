import Image from "next/image";
import { BackIcon, MenuIcon } from "../../assets/icons";
import useTopNavBar from "./useTopNavBar";



export default function TopNavBar(){
    const {openMenu,openProfile,isBack,image,route, goBack} = useTopNavBar()

return <div className="flex bg-white justify-between items-center px-[11px] py-[15px] sm:justify-center shadow-comp_lg" >
    <Image src={image} alt="profile_image" width={34} height={34} priority className="w-[34px] sm:hidden"  onClick={openProfile}/>
    <div className=" font-bold">{route}</div>
    {isBack() ? <BackIcon onClick={goBack} className="sm:absolute right-0 mr-5"/> : <MenuIcon className="sm:hidden" onClick={openMenu}/>}
</div>
    
}