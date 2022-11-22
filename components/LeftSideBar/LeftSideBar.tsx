import Image from "next/image";
import { BusinessesIcon, CulturalGroupsIcon, HomeIcon, JobsIcon, LitumbaHubIcon, MarketPlaceIcon, RealEstateIcon } from "../../assets/icons";
import { logo_light } from "../../assets/logos";
import useLeftSideBar from "./useLeftSideBar";






export default function LeftSideBar() {
    const {page , isHome , isJobs , isBusiness , isMarketPlace ,isCulturalGroups , isRealEstate , isLitumbaHub} = useLeftSideBar()
    return (
        <div className="bg-bc_5 text-white w-full max-w-sm h-screen px-[20px] py-[10px] relative flex flex-col gap-[30px]">
            <Image src={logo_light} alt="litumba logo" />
            <div className="flex flex-col">
                <h3 className="font-bold">Pages</h3>
                <div className={isHome()}>
                    <div className="pt-[10px] w-[30px]">
                        <HomeIcon />
                    </div>
                    <span>Home</span>
                </div>
                <div className={isJobs()}>
                    <div className="pt-[10px] w-[30px]">
                        <JobsIcon />
                    </div>
                    <span>Jobs</span>
                </div>
                <div className={isBusiness()}>
                    <div className="pt-[10px] w-[30px]">
                        <BusinessesIcon />
                    </div>
                    <span>Businesses</span>
                </div>
                <div className={isMarketPlace()}>
                    <div className="pt-[10px] w-[30px]">
                        <MarketPlaceIcon />
                    </div>
                    <span>Market place</span>
                </div>
                <div className={isRealEstate()}>
                    <div className="pt-[10px] w-[30px]">
                        <RealEstateIcon />
                    </div>
                    <span>Real estate</span>
                </div>
                <div className={isCulturalGroups()}>
                    <div className="pt-[10px] w-[30px]">
                        <CulturalGroupsIcon />
                    </div>
                    <span>Cultural groups</span>
                </div>
                <div className={isLitumbaHub()}>
                    <div className="pt-[10px] w-[30px]">
                        <LitumbaHubIcon />
                    </div>
                    <span>Litumba hub</span>
                </div>
            </div>
            <div className="text-sm absolute bottom-5 mx-auto w-fit left-0 right-0">
                version 1.0.0 a
            </div>
        </div>
    )
}