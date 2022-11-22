import { useEffect, useState } from "react"


export function usePage(){
    const [page,setPage] = useState("")

    useEffect(()=>{
     setPage(window.location.pathname)   
    })

    return {page}
}