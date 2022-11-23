import { brand_avatar_1, brand_avatar_2, brand_avatar_3 } from "../assets/avatars"
import { ServiceProps } from "../types/types"




export default function useServices(){

    const services : ServiceProps[] = [
        {
            avatar : brand_avatar_3,
            title : "Consultations",
            location : "Doala Cameroon",
            website : "crowninterprise.com",
            description : "We are a componay that deals with food and leather, we offer consultation services as we donate the reference of an altimate proportions",
            tags : ['50,000' , "consultancy"],
            _id : 1
        },
        {
            avatar : brand_avatar_1,
            title : "Design",
            location : "Douala Cameroon",
            website : "crowninterprise.com",
            description : "We are a componay that deals with food and leather, we offer consultation services as we donate the reference of an altimate proportions",
            tags : ['50,000' , "consultancy"],
            _id : 2
        },
        {
            avatar : brand_avatar_2,
            title : "Guidance",
            location : "Doala Cameroon",
            website : "crowninterprise.com",
            description : "We are a componay that deals with food and leather, we offer consultation services as we donate the reference of an altimate proportions",
            tags : ['50,000' , "consultancy"],
            _id : 3
        },
        {
            avatar : brand_avatar_3,
            title : "Consultations",
            location : "Doala Cameroon",
            website : "crowninterprise.com",
            description : "We are a componay that deals with food and leather, we offer consultation services as we donate the reference of an altimate proportions",
            tags : ['50,000' , "consultancy"],
            _id : 4
        },
        {
            avatar : brand_avatar_1,
            title : "Design",
            location : "Douala Cameroon",
            website : "crowninterprise.com",
            description : "We are a componay that deals with food and leather, we offer consultation services as we donate the reference of an altimate proportions",
            tags : ['50,000' , "consultancy"],
            _id : 5
        },
        {
            avatar : brand_avatar_2,
            title : "Guidance",
            location : "Doala Cameroon",
            website : "crowninterprise.com",
            description : "We are a componay that deals with food and leather, we offer consultation services as we donate the reference of an altimate proportions",
            tags : ['50,000' , "consultancy"],
            _id : 6
        },
    ]

    return {services}
}