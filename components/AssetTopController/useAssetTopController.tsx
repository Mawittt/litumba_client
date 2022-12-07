import { ROUTES } from "../../assets/constant"
import { useNavigate } from "../../utils/hooks"





export default function useAssetTopController(){
    
    const {navigate , router} = useNavigate()

    return { openCreate , openFilters , isGroups , isLitumbaHub}
    
    function openFilters(){
        navigate(router.pathname + "/filters")
    }
    function openCreate(){
        navigate(router.pathname + "/create")
    }
    function isGroups(){
        return router.pathname.includes(ROUTES.cultural_groups.index)
    }
    function isLitumbaHub(){
        return router.pathname.includes(ROUTES.litumba_hub.index)
    }
}