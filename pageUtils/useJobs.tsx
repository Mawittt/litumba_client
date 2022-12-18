import { avatar_1, avatar_3, brand_avatar_1, brand_avatar_2 } from "../assets/avatars"
import { JobProps, TopAssetsSearchFormProps } from "../types/types"


export default function useJobs(){
    const jobs : JobProps[]= [
        {
            avatar : brand_avatar_1,
            title : "Web Marketer",
            location : "Douala cameroon",
            time : "2 hours",
            description : "We are a company that deals with food and leather, we need some sort of online presence and so we are looking for a qualified web marketer",
            tags : ["25k-50k" , "Web marketing" , "Beginner"],
            brand : true,
            _id : 1
        },
        {
            avatar : avatar_1,
            title : "Web Marketer",
            location : "Douala cameroon",
            time : "2 hours",
            description : "We are a company that deals with food and leather, we need some sort of online presence and so we are looking for a qualified web marketer",
            tags : ["25k-50k" , "Web marketing" , "Beginner"],
            brand : false,
            _id : 2
        },
        {
            avatar : avatar_3,
            title : "Web Marketer",
            location : "Douala cameroon",
            time : "2 hours",
            description : "We are a company that deals with food and leather, we need some sort of online presence and so we are looking for a qualified web marketer",
            tags : ["25k-50k" , "Web marketing" , "Beginner"],
            brand : false,
            _id : 3
        },
        {
            avatar : brand_avatar_2,
            title : "Web Marketer",
            location : "Douala cameroon",
            time : "2 hours",
            description : "We are a company that deals with food and leather, we need some sort of online presence and so we are looking for a qualified web marketer",
            tags : ["25k-50k" , "Web marketing" , "Beginner"],
            brand : true,
            _id : 4
        },
    ]

    return {jobs , searchJobs}

    function searchJobs( searchData : TopAssetsSearchFormProps){
        if(searchIsEmpty(searchData)) return
        console.log(searchData)

        function searchIsEmpty(searchData : TopAssetsSearchFormProps){
            if(searchData.searchString) return false
            return true
        }
    }
}