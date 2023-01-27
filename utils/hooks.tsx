import Router, { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { AlertProps, ConfirmationProps, PromptProps, WarningProps } from "../types/types"


export function usePage() {
    const [page, setPage] = useState("")

    useEffect(() => {
        setPage(window.location.pathname.replace("/", ""))
    })

    return { page }
}
export function useNavigate() {
    const router = useRouter()
    return { navigate, router, getQueryString }

    function navigate(url: string | number) {
        if (typeof (url) === "number") return router.back()
        Router.push(url)
    }

    function getQueryString(obj: any) {
        obj = removeEmptyAttributes(obj)

        return '?' + Object
            .keys(obj)
            .map(key => { return `${key}=${encodeURIComponent(obj[key])}`; })
            .join('&')
        function removeEmptyAttributes(obj: any) {
            return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null && v !== '' && v !== undefined));
        }
    }
}
export function useOwner() {
    const self = true
    return self
}
export function useMenuToggle() {

    return { closeMenu, openMenu }

    function openMenu() {
        if (window.innerWidth >= 640) return
        const menu = document.getElementById("app_menu")
        if (!menu) return
        menu.style.position = "fixed"
        menu.style.display = "block"
    }
    function closeMenu() {
        if (window.innerWidth >= 640) return
        const menu = document.getElementById("app_menu")
        if (!menu) return
        menu.style.position = "relative"
        menu.style.display = "none"
    }
}
export function useNotifiers() {
    return { setAlert, setWarning, setPrompt, setConfirmation }

    function setAlert(data: AlertProps) {
        alert(data.content)
    }
    function setWarning(warning: WarningProps) {
        alert(warning.content)
    }
    function setPrompt(prompt: PromptProps) {
        alert(prompt.content)
    }
    function setConfirmation(confirmation: ConfirmationProps) {
        alert(confirmation.content)
    }
}
