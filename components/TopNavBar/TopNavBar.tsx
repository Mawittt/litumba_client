import Image from "next/image";
import { BackIcon, MenuIcon } from "../../assets/icons";
import { logo_blue } from "../../assets/logos";
import useTopNavBar from "./useTopNavBar";



export default function TopNavBar() {
    const { openMenu, openProfile, isBack, image, route, goBack } = useTopNavBar()

    return <div className="flex items-center justify-between max-w-[1148px] px-4 w-full" >
        <div className="flex">
            <Image src={logo_blue} alt="profile_image" width={34} height={34} priority className="" onClick={openProfile} />
            <div className=" font-bold sm:text-lg ml-2">{route}</div>
        </div>
        {isBack() ? <BackIcon onClick={goBack} className="" /> : <MenuIcon className="sm:hidden" onClick={openMenu} />}
    </div>

}