import { brand_avatar_1 } from "../../assets/avatars"
import { ROUTES } from "../../assets/constant"
import { MyBusinessProps } from "../../types/types"
import { useNavigate } from "../../utils/hooks"




export default function useMyBusiness( {image , name , assets} : MyBusinessProps){
    image = image || brand_avatar_1
    name = name || "Crown Enterprise"
    assets = assets || 23

    const {navigate} = useNavigate()

    return {image, name, assets, openBusiness}

    function openBusiness(){
        navigate(ROUTES.businesses.index + "/business_id")
    }
}