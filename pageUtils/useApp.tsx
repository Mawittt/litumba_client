import { useRouter } from "next/router"
import { useEffect } from "react"




export default function useApp(){
    const router = useRouter()
    useEffect(()=>{
        window.addEventListener("resize",updateHeight)
        function updateHeight(){
            const app = document.getElementById('app')
            if(!app) return
            app.style.height = window.innerHeight + "px"
        }
        updateHeight()
        
        return window.removeEventListener('resize',updateHeight)
    },[])

    useEffect(()=>{
        const pageComponent = document.getElementById("page-component")
        pageComponent?.scrollTo(0,0)
    },[router.pathname])

    return {}
}