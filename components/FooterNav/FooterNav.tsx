import useFooterNav from "./useFooterNav"
import { BusinessesIcon, CulturalGroupsIcon, HomeIcon, JobsIcon, LitumbaHubIcon, MarketPlaceIcon, MoreIcon, RealEstateIcon } from "../../assets/icons";


export default function FooterNav (){
    
    const {toggle_additional_icons , isHome , isJobs , isBusiness , isMarketPlace , isRealEstate , isCulturalGroups , isLitumbaHub,
            navigateToHome,navigateToJobs,navigateToBusiness,navigateToMarketPlace,navigateToRealEstate,navigateToCulturalGroups,
            navigateToLitumbaHub} = useFooterNav()
    

    return(
        <div className="flex w-full bg-white h-[50px] relative justify-around items-center pt-[10px]">
            <HomeIcon selected={isHome()} onClick={navigateToHome}/>
             <JobsIcon selected={isJobs()} onClick={navigateToJobs}/>
             <BusinessesIcon selected={isBusiness()} onClick={navigateToBusiness}/>
             <MarketPlaceIcon selected={isMarketPlace()} onClick={navigateToMarketPlace}/>
             <div className="sm:hidden">
             <MoreIcon  onClick={toggle_additional_icons}/>
             </div>
             <div className="sm:block hidden">
             <RealEstateIcon selected={isRealEstate()} onClick={navigateToRealEstate}/>
             </div>
             <div className="sm:block hidden">
             <CulturalGroupsIcon selected={isCulturalGroups()} onClick={navigateToCulturalGroups}/>
             </div>
             <div className="sm:block hidden">
             <LitumbaHubIcon selected={isLitumbaHub()} onClick={navigateToLitumbaHub}/>
             </div>
             <div id="more-icons" className={" sm:hidden rounded-[50px] transition-all duration-500 flex absolute w-[150px] top-[-50px] bg-white h-[50px] right-[-150px] items-center px-[5px] justify-around"}>
             <RealEstateIcon selected={isRealEstate()} onClick={navigateToRealEstate}/>
             <CulturalGroupsIcon selected={isCulturalGroups()} onClick={navigateToCulturalGroups}/>
             <LitumbaHubIcon selected={isLitumbaHub()} onClick={navigateToLitumbaHub}/>
             </div>
             <div className="w-"></div>
        </div>
    )
}