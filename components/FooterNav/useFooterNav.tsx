import { Router } from "next/router"
import { useState } from "react"
import { ROUTES } from "../../assets/constant"



export default function useFooterNav(){
    const [page, setPage]  = useState<String>(ROUTES.home)

    return {toggle_additional_icons,isHome , isJobs, isBusiness, isMarketPlace , isRealEstate, isCulturalGroups ,isLitumbaHub,
            navigateToHome,navigateToJobs, navigateToBusiness,navigateToMarketPlace,navigateToRealEstate,navigateToCulturalGroups,
            navigateToLitumbaHub}

    function toggle_additional_icons(){
        const more_icons = document.getElementById("more-icons")
        more_icons?.classList.toggle("open_additional_icons")
    }
    function isHome(){
        return page.includes(ROUTES.home)
    }
    function isJobs(){
        return page.includes(ROUTES.jobs.index)
    }
    function isBusiness(){
        return page.includes(ROUTES.business.index)
    }
    function isMarketPlace(){
        return page.includes(ROUTES.market_place.products.index) || page.includes(ROUTES.market_place.services.index)
    }
    function isRealEstate(){
        return page.includes(ROUTES.real_estate.index)
    }
    function isCulturalGroups(){
        return page.includes(ROUTES.cultural_groups.index)
    }
    function isLitumbaHub(){
        return page.includes(ROUTES.litumba_hub.index)
    }   
    function navigateToHome(){
        setPage(ROUTES.home)
    }
    function navigateToJobs(){
        setPage(ROUTES.jobs.index)
    }
    function navigateToBusiness(){
        setPage(ROUTES.business.index)
    }
    function navigateToMarketPlace(){
        setPage(ROUTES.market_place.products.index)
    }
    function navigateToRealEstate(){
        setPage(ROUTES.real_estate.index)
    }
    function navigateToCulturalGroups(){
        setPage(ROUTES.cultural_groups.index)
    }
    function navigateToLitumbaHub(){
        setPage(ROUTES.litumba_hub.index)
    }
}