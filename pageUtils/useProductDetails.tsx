import { ROUTES } from "../assets/constant";
import { shoe_image, shoe_image_1, shoe_image_2, shoe_image_3 } from "../assets/images";
import { OtherProductProps, ProductDetailsProps } from "../types/types";
import { useNavigate } from "../utils/hooks";




export default function useProductDetails(){
    const details : ProductDetailsProps ={
        selectedPreview : shoe_image,
        previews : [shoe_image, shoe_image_1 , shoe_image_2, shoe_image_3],
        name : "Air-max shoes",
        description : "start off your day with these footwears, comfortable and light weight for your convinience, these shoes starts at a price of only 6000frs . you can get them from our whole sales plateform online",
        price : "6,000 frs-cfa",
        location: "Douala-Cameroon",
        amount : "3",
        available : true,
        _id : 1
    }

    const otherProducts : OtherProductProps[] = [
        {
            image : shoe_image_1,
            name : "jordan_10",
            price : "3000 frs-cfa",
            _id : 1
        },
        {
            image : shoe_image_2,
            name : "jordan_10",
            price : "3000 frs-cfa",
            _id : 2
        },
        {
            image : shoe_image_3,
            name : "jordan_10",
            price : "3000 frs-cfa",
            _id : 3
        },
    ]

    const {navigate , router} = useNavigate()

    return {details , otherProducts , openConversation , openBrand , goBack}

    function openConversation(){
        navigate(ROUTES.conversations + "/conversation_id")
    }

    function openBrand(){
        navigate(ROUTES.businesses.index + "/business_id")
    }

    function goBack(){
        router.back()
    }
}