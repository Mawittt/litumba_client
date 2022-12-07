import Router, { useRouter } from "next/router"
import { useEffect, useState } from "react"


export function usePage() {
    const [page, setPage] = useState("")

    useEffect(() => {
        setPage(window.location.pathname.replace("/" , ""))
    })

    return { page }
}

export function useNavigate() {
    const router = useRouter()
    return { navigate , router}

    function navigate(url: string) {
        Router.push(url)
    }
}

export function useOwner(){
    const self = true

    return self
}

export function useMenuToggle(){

    return {closeMenu, openMenu}

    function openMenu(){
        if(window.innerWidth >= 640) return
        const menu = document.getElementById("app_menu")
        if(!menu) return
        menu.style.position = "fixed"
        menu.style.display = "block"
    }
    function closeMenu(){
        if(window.innerWidth >= 640) return
        const menu = document.getElementById("app_menu")
        if(!menu) return
        menu.style.position = "relative"
        menu.style.display = "none"
    }
}