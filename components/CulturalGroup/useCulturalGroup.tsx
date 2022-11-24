import { CulturalGroupsProps } from "../../types/types"




export default function useCulturalGroup( {image , name , location , members , _id} : CulturalGroupsProps){

    return { image , name , location , members}
}