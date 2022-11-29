import { set } from "immer/dist/internal"
import { useEffect, useState } from "react"
import { ROUTES } from "../../assets/constant"
import { useNavigate, usePage } from "../../utils/hooks"



export default function useLeftSideBar(){
    const {page} = usePage()
    const {navigate} = useNavigate()
    return { page , isHome , isJobs , isBusiness , isMarketPlace , isRealEstate , isCulturalGroups , isLitumbaHub , navigate}

    function isHome(){
        const className : string = page.includes(ROUTES.home.replace("/","")) ? "page-option-selected" : "page-option"
        return className
    }
    function isJobs(){
        const className : string = page.includes(ROUTES.jobs.index.replace("/","")) ? "page-option-selected" : "page-option"
        return className
    }
    function isBusiness(){
        const className : string = page.includes(ROUTES.businesses.index.replace("/","")) ? "page-option-selected" : "page-option"
        return className
    }
    function isMarketPlace(){
        const className : string = page.includes(ROUTES.market_place.products.index.replace("/","")) || page.includes(ROUTES.market_place.services.index.replace("/","")) ? "page-option-selected" : "page-option"
        return className
    }
    function isRealEstate(){
        const className : string = page.includes(ROUTES.real_estate.index.replace("/","")) ? "page-option-selected" : "page-option"
        return className
    }
    function isCulturalGroups(){
        const className : string = page.includes(ROUTES.cultural_groups.index.replace("/","")) ? "page-option-selected" : "page-option"
        return className
    }
    function isLitumbaHub(){
        const className : string = page.includes(ROUTES.litumba_hub.index.replace("/","")) ? "page-option-selected" : "page-option"
        return className
    }
}