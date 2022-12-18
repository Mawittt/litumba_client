import Image from "next/image";
import { ROUTES } from "../../assets/constant";
import { BusinessesIcon, CulturalGroupsIcon, HomeIcon, JobsIcon, LitumbaHubIcon, MarketPlaceIcon, RealEstateIcon } from "../../assets/icons";
import { logo_light } from "../../assets/logos";
import useLeftSideBar from "./useLeftSideBar";






export default function LeftSideBar() {
    const {page , isHome , isJobs , isBusiness , isMarketPlace ,isCulturalGroups , isRealEstate , isLitumbaHub , navigate} = useLeftSideBar()
    return (
        <div className="bg-bc_5 text-white w-full max-w-sm  h-screen px-[20px] py-[10px] relative flex flex-col gap-[30px]">
            <Image src={logo_light} alt="litumba logo" />
            <div className="flex flex-col">
                <h3 className="font-bold">Pages</h3>
                <div className={isHome()} onClick={()=>navigate(ROUTES.home)}>
                    <div className="pt-[10px] w-[30px]">
                        <HomeIcon />
                    </div>
                    <span>Home</span>
                </div>
                <div className={isJobs()} onClick={()=>navigate(ROUTES.jobs.index)}>
                    <div className="pt-[10px] w-[30px]">
                        <JobsIcon />
                    </div>
                    <span>Jobs</span>
                </div>
                <div className={isBusiness()} onClick={()=>navigate(ROUTES.businesses.index)}>
                    <div className="pt-[10px] w-[30px]">
                        <BusinessesIcon />
                    </div>
                    <span>Businesses</span>
                </div>
                <div className={isMarketPlace()} onClick={()=>navigate(ROUTES.market_place.products.index)}>
                    <div className="pt-[10px] w-[30px]">
                        <MarketPlaceIcon />
                    </div>
                    <span>Market place</span>
                </div>
                <div className={isRealEstate()} onClick={()=>navigate(ROUTES.real_estate.index)}>
                    <div className="pt-[10px] w-[30px]">
                        <RealEstateIcon />
                    </div>
                    <span>Real estate</span>
                </div>
                <div className={isCulturalGroups()} onClick={()=>navigate(ROUTES.cultural_groups.index)}>
                    <div className="pt-[10px] w-[30px]">
                        <CulturalGroupsIcon />
                    </div>
                    <span>Cultural groups</span>
                </div>
                <div className={isLitumbaHub()} onClick={()=>navigate(ROUTES.litumba_hub.index)}>
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