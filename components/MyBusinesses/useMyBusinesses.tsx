import { brand_avatar_1, brand_avatar_2 } from "../../assets/avatars"
import { MyBusinessProps } from "../../types/types"



export default function useMyBusinesses(){
    const businesses : MyBusinessProps[] = [
        {
            image : brand_avatar_1,
            name : "Crown Enterprise",
            assets : 23
        },
        {
            image : brand_avatar_2,
            name : "Metallic Sign",
            assets : 53
        },
    ]
    return {businesses}
}