import { useEffect, useState } from "react"






export default function useProductServiceToggle(){
    const [isProducts , setProducts] = useState(false)
    const [isServices , setServices] = useState(false)
    useEffect(()=>{
        setProducts(window.location.pathname.includes("products"))
        setServices(window.location.pathname.includes("services"))
    },[])
    return {isServices, isProducts , showProducts, showServices}
    function showProducts(){
        console.log("showing products")
    }
    function showServices(){
        console.log("showing services")
    }

}