import { Router } from "next/router"
import { useState } from "react"
import { ROUTES } from "../../assets/constant"
import { usePage } from "../../utils/hooks"



export default function useFooterNav(){
    const {page} = usePage()

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
        navigateTo(ROUTES.home)
    }
    function navigateToJobs(){
        navigateTo(ROUTES.jobs.index)
    }
    function navigateToBusiness(){
        navigateTo(ROUTES.business.index)
    }
    function navigateToMarketPlace(){
        navigateTo(ROUTES.market_place.products.index)
    }
    function navigateToRealEstate(){
        navigateTo(ROUTES.real_estate.index)
    }
    function navigateToCulturalGroups(){
        navigateTo(ROUTES.cultural_groups.index)
    }
    function navigateToLitumbaHub(){
        navigateTo(ROUTES.litumba_hub.index)
    }
    function navigateTo(page : string){
        console.log("navigating to " + page)
    }
}