import { Router } from "next/router"
import { useState } from "react"
import { ROUTES } from "../../assets/constant"
import { useNavigate, usePage } from "../../utils/hooks"



export default function useFooterNav(){
    const {page} = usePage()
    const  {navigate} = useNavigate()

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
        return page.includes(ROUTES.businesses.index)
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
        navigate(ROUTES.home)
    }
    function navigateToJobs(){
        navigate(ROUTES.jobs.index)
    }
    function navigateToBusiness(){
        navigate(ROUTES.businesses.index)
    }
    function navigateToMarketPlace(){
        navigate(ROUTES.market_place.products.index)
    }
    function navigateToRealEstate(){
        navigate(ROUTES.real_estate.index)
    }
    function navigateToCulturalGroups(){
        navigate(ROUTES.cultural_groups.index)
    }
    function navigateToLitumbaHub(){
        navigate(ROUTES.litumba_hub.index)
    }
}