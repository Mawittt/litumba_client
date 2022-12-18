import { avatar_3, brand_avatar_1, brand_avatar_2 } from "../assets/avatars"
import { BusinessProps, BusinessSearchFormProps } from "../types/types"




export default function useBusinesses(){
    const businesses : BusinessProps[] = [
        {
            avatar : brand_avatar_1,
            name : "Sign ventures",
            email : "signventures@gmail.com",
            website : "signventures.com",
            description : "We are a company that deals with food and leather, we need some sort of online presence and so we are looking for a qualified web marketer",
            tags : ["food" , "textile" , "Douala-cameroon"],
            _id : 1
        },
        {
            avatar : brand_avatar_2,
            name : "Crown Enterprise",
            email : "crownenterprise@gmail.com",
            website : "crownEnterprise.com",
            description : "We are a company that deals with food and leather, we need some sort of online presence and so we are looking for a qualified web marketer",
            tags : ["food" , "textile" , "Douala"],
            _id : 2
        },
        {
            avatar : avatar_3,
            name : "Aloa Price",
            email : "aloaprice@gmail.com",
            website : "aloaprice.com",
            description : "We are a company that deals with food and leather, we need some sort of online presence and so we are looking for a qualified web marketer",
            tags : ["food", "textile" , "Douala-cameroon"],
            _id : 3
        },
        {
            avatar : brand_avatar_1,
            name : "Sign ventures",
            email : "signventures@gmail.com",
            website : "signventures.com",
            description : "We are a company that deals with food and leather, we need some sort of online presence and so we are looking for a qualified web marketer",
            tags : ["food" , "textile" , "Douala-cameroon"],
            _id : 4
        },
        {
            avatar : brand_avatar_2,
            name : "Crown Enterprise",
            email : "crownenterprise@gmail.com",
            website : "crownEnterprise.com",
            description : "We are a company that deals with food and leather, we need some sort of online presence and so we are looking for a qualified web marketer",
            tags : ["food" , "textile" , "Douala"],
            _id : 5
        },
        {
            avatar : avatar_3,
            name : "Aloa Price",
            email : "aloaprice@gmail.com",
            website : "aloaprice.com",
            description : "We are a company that deals with food and leather, we need some sort of online presence and so we are looking for a qualified web marketer",
            tags : ["food", "textile" , "Douala-cameroon"],
            _id : 6
        },
    ]
    return {businesses , searchBusiness}

    function searchBusiness(data : BusinessSearchFormProps){
        if(dataIsEmpty(data)) return
        console.log(data)

        function dataIsEmpty(data : BusinessSearchFormProps){
            if(data.searchString) return false
            return true
        }
    }
}