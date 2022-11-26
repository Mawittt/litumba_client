import { avatar_1, brand_avatar_1, brand_avatar_2, brand_avatar_3 } from "../assets/avatars";
import { person_cover_image, shoe_image, shoe_image_1, shoe_image_2 } from "../assets/images";
import { BusinessProps, JobProps, ProductProps, UserProfileProps } from "../types/types";





export default function useUserProfile(){

    const details : UserProfileProps = {
        cover : person_cover_image,
        avatar : avatar_1,
        name : "Ana Price",
        email : "anaprice@gmail.com",
        profession : "Model",
        location : "Douala-Cameroon",
        description : "I am a bakwerian . living in san francisco. i love eating Eru and watafufu. i came from Buea to Los Angeles in 2017. and since then i have been working as a model",
        phone : "675228664",
        country : "USA",
        city : "los Angeles",
        available : true,
        _id : 1

    }

    const businesses : BusinessProps[] =  [
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
    ]

    const products : ProductProps[]=[
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
    ]

    const jobs : JobProps[] = [
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
    ] 

    return {details , businesses ,products , jobs}
}