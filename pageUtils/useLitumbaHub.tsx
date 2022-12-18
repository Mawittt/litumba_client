import { useForm } from "react-hook-form"
import { brand_avatar_1, brand_avatar_2, brand_avatar_3 } from "../assets/avatars"
import { LitumbaHubSearchFormProps, ServiceProps } from "../types/types"




export default function useLitumbaHub(){
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
        
    ]

    return {services , searchLitumbaHub }

    function searchLitumbaHub(data : LitumbaHubSearchFormProps){
        if(dataIsEmpty(data)) return
        console.log(data)
        function dataIsEmpty(data : LitumbaHubSearchFormProps){
            if(data.searchString) return false
            return true
        }
    }
}