import { useNavigate } from "../../utils/hooks"





export default function useAssetTopController(){
    
    const {navigate , router} = useNavigate()

    return { openCreate , openFilters}
    
    function openFilters(){
        navigate(router.pathname + "/filters")
    }
    function openCreate(){
        navigate(router.pathname + "/create")
    }
}