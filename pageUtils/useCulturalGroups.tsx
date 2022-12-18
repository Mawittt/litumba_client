import { group_image_1 } from "../assets/images"
import { CulturalGroupSearchFormProps } from "../types/types"





export default function useCulturalGroups(){

    const groups = [
        {
            image : group_image_1,
            name : "Mockpe group",
            location : "Buea Cameroon",
            members : 53,
            _id : 1
        },
        {
            image : group_image_1,
            name : "Mockpe group",
            location : "Buea Cameroon",
            members : 53,
            _id : 2
        },
        {
            image : group_image_1,
            name : "Mockpe group",
            location : "Buea Cameroon",
            members : 53,
            _id : 3
        },
        {
            image : group_image_1,
            name : "Mockpe group",
            location : "Buea Cameroon",
            members : 53,
            _id : 4
        },
        {
            image : group_image_1,
            name : "Mockpe group",
            location : "Buea Cameroon",
            members : 53,
            _id : 5
        },
        {
            image : group_image_1,
            name : "Mockpe group",
            location : "Buea Cameroon",
            members : 53,
            _id : 6
        }
    ]


    return {groups , searchGroup}

    function searchGroup(data : CulturalGroupSearchFormProps){
        if(dataIsEmpty(data)) return
        console.log(data)

        function dataIsEmpty(data : CulturalGroupSearchFormProps){

            if(data.searchString) return false
            return true
        }
    }
}