import { useEffect, useState } from "react"
import { ROUTES } from "../../assets/constant"
import { useNavigate } from "../../utils/hooks"






export default function useProductServiceToggle(){
    const [isProducts , setProducts] = useState(false)
    const [isServices , setServices] = useState(false)
    useEffect(()=>{
        setProducts(window.location.pathname.includes("products"))
        setServices(window.location.pathname.includes("services"))
    },[])

    const {navigate} = useNavigate()

    return {isServices, isProducts , showProducts, showServices}
    function showProducts(){
        navigate(ROUTES.market_place.products.index)
    }
    function showServices(){
        navigate(ROUTES.market_place.services.index)
    }

}