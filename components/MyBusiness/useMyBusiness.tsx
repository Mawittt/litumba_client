import { brand_avatar_1 } from "../../assets/avatars"
import { MyBusinessProps } from "../../types/types"




export default function useMyBusiness( {image , name , assets} : MyBusinessProps){
    image = image || brand_avatar_1
    name = name || "Crown Enterprise"
    assets = assets || 23

    return {image, name, assets, openBusiness}

    function openBusiness(){
        console.log("opening business")
    }
}