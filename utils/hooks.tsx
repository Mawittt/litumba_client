import Router, { useRouter } from "next/router"
import { useEffect, useState } from "react"
import useStore from "../store/useStore"
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
export function useOwner(ownerId: string) {
    const { user } = useStore()
    return ownerId === user.id
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
        openNotifier(data.content, "notifier-alert")
    }
    function setWarning(warning: WarningProps) {
        openNotifier(warning.content, "notifier-warning")
    }
    function setPrompt(prompt: PromptProps) {
        openNotifier(prompt.content, "notifier-alert")
    }
    function setConfirmation(confirmation: ConfirmationProps) {
        openNotifier(confirmation.content, "notifier-confirmation")
    }
    function openNotifier(message: string, elementId: string) {
        const keyframes = [
            { transform: "translateY(-120%)" },
            { transform: "translateY(50px)" }
        ]
        const openOptions: KeyframeAnimationOptions = {
            duration: 300,
            easing: "cubic-bezier(0.220, 0.555, 0.470, 1.255)",
            fill: "forwards"
        }
        const closeOptions: KeyframeAnimationOptions = {
            duration: 300,
            easing: "cubic-bezier(0.220, 0.555, 0.470, 1.255)",
            fill: "forwards",
            direction: "reverse"
        }
        const confirmation = document.getElementById(elementId)
        if (!confirmation) return

        setText()
        confirmation.animate(keyframes, openOptions)
        close_notifier_after_delay()


        function setText() {
            if (confirmation?.lastChild) confirmation.lastChild.textContent = message
        }
        function close_notifier_after_delay() {
            setTimeout(() => {
                confirmation?.animate(keyframes, closeOptions)
            }, 6000);
        }

    }
}
