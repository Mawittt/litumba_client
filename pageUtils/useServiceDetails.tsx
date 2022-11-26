import { title } from "process";
import { avatar_1, avatar_2, brand_avatar_1 } from "../assets/avatars";
import { business_image_1, consulting_image_1, consulting_image_2, consulting_image_3 } from "../assets/images";
import { ReviewProps, ServiceDetailsProps, UseCaseProps } from "../types/types";







export default function useServiceDetails(){

    const details : ServiceDetailsProps = {
        cover : business_image_1,
        avatar : brand_avatar_1,
        author : "Crown enterprise",
        email : "crownenterprise@gmail.com",
        website: "crownenterprise.com",
        title : "Cunsulting",
        description : "Start off your day with these footwears, comfortable and light weight for your convinience, these shoes starts at a price of only 6000frs . you can get them from our whole sales plateform online",
        price : "50,000 frs-cfa",
        niche : "nitch",
        available : true,
        _id : 1
    }

    const useCases : UseCaseProps[] = [
        {
            image : consulting_image_1,
            title : "benue project",
            description : "in this project we worked hand in hand with the benue company to help them innovate thier resources and bring solutions to thies interprise-customer problems",
            _id : 1
        },
        {
            image : consulting_image_2,
            title : "condiva project",
            description : "n this project we worked hand in hand with the benue company to help them innovate thier resources and bring solutions to thies interprise-customer problems",
            _id : 1
        },
        {
            image : consulting_image_3,
            title : "Mtn project",
            description : "n this project we worked hand in hand with the benue company to help them innovate thier resources and bring solutions to thies interprise-customer problems",
            _id : 1
        }
    ]

    const reviews : ReviewProps[] = [
        {
            avatar : avatar_2,
            name : "martinez rudof",
            time : "5 days",
            stars : 5,
            comment : "this company gives the best services, i just cant recomend them enough. they just do great jobs and thats so cool",
            _id : 1
        },
        {
            avatar : avatar_1,
            name : "Alex young",
            time : "1 week",
            stars : 4,
            comment : "this company gives the best services, i just cant recomend them enough. they just do great jobs and thats so cool",
            _id : 1
        }
    ]

    return {details , useCases , reviews}
}