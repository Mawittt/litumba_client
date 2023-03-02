import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { Socket } from "socket.io-client"
import { getCookie } from "cookies-next"
import { ROUTES } from "../assets/constant"
import { useNavigate } from "../utils/hooks"
import axios from "axios"
import useStore from "../store/useStore"
import { setUser } from "../store/slice"

let socket: undefined | Socket

export default function useApp() {
    const router = useRouter()
    const { navigate } = useNavigate()

    useEffect(() => {
        window.addEventListener("resize", updateHeight)
        function updateHeight() {
            const app = document.getElementById("__next")
            if (!app) return
            app.style.height = window.innerHeight + "px"
        }
        updateHeight()

        return window.removeEventListener('resize', updateHeight)
    }, [])

    useEffect(() => {
        const pageComponent = document.getElementById("page-component")
        pageComponent?.scrollTo(0, 0)
    }, [router.pathname])



    return {}
}