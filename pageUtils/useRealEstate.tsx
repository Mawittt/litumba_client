import { avatar_1, brand_avatar_2, brand_avatar_3 } from "../assets/avatars"
import { realEstate_1, realEstate_2, realEstate_3 } from "../assets/images"
import { ProductProps, RealEstateDetailsProps, RealEstateSearchFormProps } from "../types/types"





export default function useRealEstate(){
    const products : ProductProps[] = [
        {
            avatar : brand_avatar_2,
            name : "4 rooms apartment",
            location : "Douala-cameroon",
            website : "crownenteprise.com",
            image : realEstate_1,
            description : "start off your day on a good foot, with these foot wears hyper confort",
            price : 6000,
            amount : 2,
            _id : 1,
            brand : true
        },
        {
            avatar : avatar_1,
            name : "2 rooms apartment",
            location : "Douala-cameroon",
            website : "crownenteprise.com",
            image : realEstate_2,
            description : "start off your day on a good foot, with these foot wears hyper confort",
            price : 2000,
            amount : 5,
            _id : 2,
            brand : false
        },
        {
            avatar : brand_avatar_3,
            name : "duplex",
            location : "Douala-cameroon",
            website : "crownenteprise.com",
            image : realEstate_3,
            description : "start off your day on a good foot, with these foot wears hyper confort",
            price : 2000,
            amount : 7,
            _id : 3,
            brand : true
        },
        {
            avatar : brand_avatar_2,
            name : "4 rooms apartment",
            location : "Douala-cameroon",
            website : "crownenteprise.com",
            image : realEstate_1,
            description : "start off your day on a good foot, with these foot wears hyper confort",
            price : 6000,
            amount : 2,
            _id : 1,
            brand : true
        },
        {
            avatar : avatar_1,
            name : "2 rooms apartment",
            location : "Douala-cameroon",
            website : "crownenteprise.com",
            image : realEstate_2,
            description : "start off your day on a good foot, with these foot wears hyper confort",
            price : 2000,
            amount : 5,
            _id : 2,
            brand : false
        },
        {
            avatar : brand_avatar_3,
            name : "duplex",
            location : "Douala-cameroon",
            website : "crownenteprise.com",
            image : realEstate_3,
            description : "start off your day on a good foot, with these foot wears hyper confort",
            price : 2000,
            amount : 7,
            _id : 3,
            brand : true
        },
    ]
    return {products , searchRealEstate}

    function searchRealEstate(data : RealEstateSearchFormProps){
        if(dataIsEmpty(data)) return
        console.log(data)

        function dataIsEmpty(data : RealEstateSearchFormProps){
            if(data.searchString) return false
            return true
        }
    }
}