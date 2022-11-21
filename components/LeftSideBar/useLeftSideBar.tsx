import { ROUTES } from "../../assets/constant"



export default function useLeftSideBar(){
    const page = ROUTES.market_place.products.filters
    return { page , isHome , isJobs , isBusiness , isMarketPlace , isRealEstate , isCulturalGroups , isLitumbaHub}

    function isHome(){
        const className : string = page.includes(ROUTES.home) ? "page-option-selected" : "page-option"
        return className
    }
    function isJobs(){
        const className : string = page.includes(ROUTES.jobs.index) ? "page-option-selected" : "page-option"
        return className
    }
    function isBusiness(){
        const className : string = page.includes(ROUTES.business.index) ? "page-option-selected" : "page-option"
        return className
    }
    function isMarketPlace(){
        const className : string = page.includes(ROUTES.market_place.products.index) || page.includes(ROUTES.market_place.services.index) ? "page-option-selected" : "page-option"
        return className
    }
    function isRealEstate(){
        const className : string = page.includes(ROUTES.real_estate.index) ? "page-option-selected" : "page-option"
        return className
    }
    function isCulturalGroups(){
        const className : string = page.includes(ROUTES.cultural_groups.index) ? "page-option-selected" : "page-option"
        return className
    }
    function isLitumbaHub(){
        const className : string = page.includes(ROUTES.litumba_hub.index) ? "page-option-selected" : "page-option"
        return className
    }
}