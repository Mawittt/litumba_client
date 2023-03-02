import useFooterNav from "./useFooterNav"
import { BusinessesIcon, CulturalGroupsIcon, HomeIcon, JobsIcon, LitumbaHubIcon, MarketPlaceIcon, MoreIcon, RealEstateIcon } from "../../assets/icons";


export default function FooterNav() {

    const { toggle_additional_icons, isHome, isJobs, isBusiness, isMarketPlace, isRealEstate, isCulturalGroups, isLitumbaHub,
        navigateToHome, navigateToJobs, navigateToBusiness, navigateToMarketPlace, navigateToRealEstate, navigateToCulturalGroups,
        navigateToLitumbaHub } = useFooterNav()

    const toggle_function = toggle_additional_icons()


    return (
        <div className="flex w-full bg-white relative justify-between items-end py-1 px-2 text-blue-500 font-bold border-t-2 border-gray-300">
            <div className="foot-nav-option">
                <HomeIcon selected={isHome()} onClick={navigateToHome} className="" />
                <span>Home</span>
            </div>
            <div className="foot-nav-option">
                <JobsIcon selected={isJobs()} onClick={navigateToJobs} className={""} />
                <span>Jobs</span>
            </div>
            <div className="foot-nav-option">
                <BusinessesIcon selected={isBusiness()} onClick={navigateToBusiness} className={""} />
                <span>Businesses</span>
            </div>
            <div className="foot-nav-option">
                <MarketPlaceIcon selected={isMarketPlace()} onClick={navigateToMarketPlace} />
                <span>Market</span>
            </div>
            <div className="sm:hidden">
                <MoreIcon onClick={toggle_function} />
            </div>
            <div className="sm:foot-nav-option hidden ">
                <RealEstateIcon selected={isRealEstate()} onClick={() => navigateToRealEstate()} />
                <span>Estate</span>
            </div>
            <div className="sm:foot-nav-option hidden foot-nav-option">
                <CulturalGroupsIcon selected={isCulturalGroups()} onClick={() => navigateToCulturalGroups()} />
                <span>C.Groups</span>
            </div>
            <div className="sm:foot-nav-option hidden foot-nav-option" >
                <LitumbaHubIcon selected={isLitumbaHub()} onClick={() => navigateToLitumbaHub()} />
                <span>Hub</span>
            </div>
            <div id="more-icons" className={" sm:hidden rounded-lg transition-all duration-500 flex absolute w-fit gap-6 top-0 right-0 bg-white border-t-2 border-gray-300 items-center px-2 py-2 pb-4 justify-around translate-y-[-100%] translate-x-full"}>
                <div className="foot-nav-option">
                    <RealEstateIcon selected={isRealEstate()} onClick={() => navigateToRealEstate(toggle_function)} />
                    <span>Estate</span>
                </div>
                <div className="foot-nav-option">
                    <CulturalGroupsIcon selected={isCulturalGroups()} onClick={() => navigateToCulturalGroups(toggle_function)} />
                    <span>C.Groups</span>
                </div>
                <div className="foot-Nav-option">
                    <LitumbaHubIcon selected={isLitumbaHub()} onClick={() => navigateToLitumbaHub(toggle_function)} />
                    <span>Hub</span>
                </div>
            </div>
        </div>
    )
}