import { brand_avatar_1} from "../assets/avatars"
import { ROUTES } from "../assets/constant"
import { business_image_1, shoe_image, shoe_image_1, shoe_image_2 } from "../assets/images"
import { BusinessDetailsProps, JobProps, ProductProps, ServiceProps } from "../types/types"
import { useNavigate, useOwner } from "../utils/hooks"





export default function useBusinessDetails(){
    const details : BusinessDetailsProps= {
        cover : business_image_1,
        avatar : brand_avatar_1,
        name : "Crown enterprise",
        email : "crownenterprice@gmail.com",
        website : "crownenterprise.com",
        location : "Doala-Cameroon",
        description : "the Crown enterprise is a company that offers the best .services as related to domestic analyses and augmented troublesiaca. souround yoursefl with people that can do better than you.",
        phone : "678528755",
        niche : "Food",
        available : true,
        _id : 1
    }

    const services : ServiceProps[] =[
        {
            avatar : brand_avatar_1,
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
            avatar : brand_avatar_1,
            title : "Guidance",
            location : "Doala Cameroon",
            website : "crowninterprise.com",
            description : "We are a componay that deals with food and leather, we offer consultation services as we donate the reference of an altimate proportions",
            tags : ['50,000' , "consultancy"],
            _id : 3
        },
    ]

    const products : ProductProps[]=[
        {
            avatar : brand_avatar_1,
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
            avatar : brand_avatar_1,
            name : "air-max-5 shoes",
            location : "Douala-cameroon",
            website : "crownenteprise.com",
            image : shoe_image_1,
            description : "start off your day on a good foot, with these foot wears hyper confort",
            price : 2000,
            amount : 5,
            _id : 2,
            brand : true
        },
        {
            avatar : brand_avatar_1,
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

    const {navigate , router} = useNavigate()

    const self = useOwner()


    return {details , openBusinessEditor , services ,products , jobs , gotoConversation , goBack , self}


    function gotoConversation(){
        navigate(ROUTES.conversations + "/conversation_id")
    }
    function goBack(){
        router.back()
    }
    function openBusinessEditor(){
        navigate(ROUTES.businesses.update)
    }
}