import { avatar_1, brand_avatar_1, brand_avatar_2, brand_avatar_3 } from "../assets/avatars";
import { shoe_image, shoe_image_1, shoe_image_2 } from "../assets/images";
import { ProductProps, ProductSearchFormProps } from "../types/types";



export default function useProducts(){
    const products : ProductProps[] = [
        {
            avatar : brand_avatar_2,
            name : "air-max shoes",
            location : "Douala-cameroon",
            website : "crownenteprise.com",
            image : shoe_image,
            description : "start off your day on a good foot, with these foot wears hyper confort",
            price : 6000,
            amount : 2,
            _id : 1,
            brand : true
        },
        {
            avatar : avatar_1,
            name : "air-max-5 shoes",
            location : "Douala-cameroon",
            website : "crownenteprise.com",
            image : shoe_image_1,
            description : "start off your day on a good foot, with these foot wears hyper confort",
            price : 2000,
            amount : 5,
            _id : 2,
            brand : false
        },
        {
            avatar : brand_avatar_3,
            name : "balanciaga shoes",
            location : "Douala-cameroon",
            website : "crownenteprise.com",
            image : shoe_image_2,
            description : "start off your day on a good foot, with these foot wears hyper confort",
            price : 2000,
            amount : 7,
            _id : 3,
            brand : true
        },
        {
            avatar : brand_avatar_2,
            name : "air-max shoes",
            location : "Douala-cameroon",
            website : "crownenteprise.com",
            image : shoe_image,
            description : "start off your day on a good foot, with these foot wears hyper confort",
            price : 6000,
            amount : 2,
            _id : 4,
            brand : true
        },
        {
            avatar : avatar_1,
            name : "air-max-5 shoes",
            location : "Douala-cameroon",
            website : "crownenteprise.com",
            image : shoe_image_1,
            description : "start off your day on a good foot, with these foot wears hyper confort",
            price : 2000,
            amount : 5,
            _id : 5,
            brand : false
        },
        {
            avatar : brand_avatar_3,
            name : "balanciaga shoes",
            location : "Douala-cameroon",
            website : "crownenteprise.com",
            image : shoe_image_2,
            description : "start off your day on a good foot, with these foot wears hyper confort",
            price : 2000,
            amount : 7,
            _id : 6,
            brand : true
        }
    ]
    return {products , searchProduct}

    function searchProduct(data : ProductSearchFormProps){
        if(dataIsEmpty(data)) return
        console.log(data)

        function dataIsEmpty(data : ProductSearchFormProps){
            if(data.searchString) return false
            return true
        }
    }
}