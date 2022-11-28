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