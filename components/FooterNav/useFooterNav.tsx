import { Router } from "next/router"
import { useState } from "react"
import { ROUTES } from "../../assets/constant"
import { useNavigate, usePage } from "../../utils/hooks"



export default function useFooterNav() {
    const { page } = usePage()
    const { navigate } = useNavigate()

    return {
        toggle_additional_icons, isHome, isJobs, isBusiness, isMarketPlace, isRealEstate, isCulturalGroups, isLitumbaHub,
        navigateToHome, navigateToJobs, navigateToBusiness, navigateToMarketPlace, navigateToRealEstate, navigateToCulturalGroups,
        navigateToLitumbaHub
    }

    function toggle_additional_icons() {
        let displaying = false

        return () => {
            const keyframes = [
                {
                    transform: "translateX(0%) translateY(-100%)"
                },
                {
                    transform: "translateX(100%) translateY(-100%)"
                }
            ]
            const more_icons = document.getElementById("more-icons")
            if (!more_icons) return
            if (displaying) {
                more_icons.animate(
                    keyframes, {
                    fill: "forwards",
                    duration: 500,
                    easing: "ease-out"
                })
                displaying = false
            } else {
                more_icons.animate(
                    keyframes, {
                    direction: "reverse",
                    fill: "forwards",
                    duration: 500,
                    easing: "ease-in"
                })
                displaying = true
            }
        }
    }
    function isHome() {
        return page.includes(ROUTES.home.replace("/", ""))
    }
    function isJobs() {
        return page.includes(ROUTES.jobs.index.replace("/", ""))
    }
    function isBusiness() {
        return page.includes(ROUTES.businesses.index.replace("/", ""))
    }
    function isMarketPlace() {
        return page.includes(ROUTES.market_place.products.index.replace("/", "")) || page.includes(ROUTES.market_place.services.index.replace("/", ""))
    }
    function isRealEstate() {
        return page.includes(ROUTES.real_estate.index.replace("/", ""))
    }
    function isCulturalGroups() {
        return page.includes(ROUTES.cultural_groups.index.replace("/", ""))
    }
    function isLitumbaHub() {
        return page.includes(ROUTES.litumba_hub.index.replace("/", ""))
    }
    function navigateToHome() {
        navigate(ROUTES.home)
    }
    function navigateToJobs() {
        navigate(ROUTES.jobs.index)
    }
    function navigateToBusiness() {
        navigate(ROUTES.businesses.index)
    }
    function navigateToMarketPlace() {
        navigate(ROUTES.market_place.products.index)
    }
    function navigateToRealEstate(closeIcons?: Function) {
        closeIcons?.()
        navigate(ROUTES.real_estate.index)
    }
    function navigateToCulturalGroups(closeIcons?: Function) {
        closeIcons?.()
        navigate(ROUTES.cultural_groups.index)
    }
    function navigateToLitumbaHub(closeIcons?: Function) {
        closeIcons?.()
        navigate(ROUTES.litumba_hub.index)
    }
}