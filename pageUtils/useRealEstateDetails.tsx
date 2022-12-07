import { ROUTES } from "../assets/constant";
import { business_image_1, realEstate_1, realEstate_2, realEstate_3, shoe_image, shoe_image_1, shoe_image_2, shoe_image_3 } from "../assets/images";
import { OtherRealEstateProps, RealEstateDetailsProps } from "../types/types";
import { useNavigate, useOwner } from "../utils/hooks";




export default function useRealEstateDetails(){
    const details : RealEstateDetailsProps ={
        selectedPreview : realEstate_1,
        previews : [realEstate_1, realEstate_2 , realEstate_3, business_image_1],
        name : "Duplex house",
        description : "start off your day with these footwears, comfortable and light weight for your convinience, these shoes starts at a price of only 6000frs . you can get them from our whole sales plateform online",
        price : "6,000 frs-cfa",
        location: "Douala-Cameroon",
        amount : "3",
        available : true,
        _id : 1
    }

    const otherRealEstate : OtherRealEstateProps[] = [
        {
            image : realEstate_1,
            name : "villa 4 rooms",
            price : "3000 frs-cfa",
            _id : 1
        },
        {
            image : realEstate_2,
            name : "duplex",
            price : "3000 frs-cfa",
            _id : 2
        },
        {
            image : realEstate_3,
            name : "mansion",
            price : "3000 frs-cfa",
            _id : 3
        },
    ]

    const {navigate , router} = useNavigate()

    const self = useOwner()

    return {details , otherRealEstate , openRealEstateEditor , openConversation , openBrand , goBack , self}

    function openConversation(){
        navigate(ROUTES.conversations + "/conversation_id")
    }
    function openBrand(){
        navigate(ROUTES.businesses.index + "/business_id")
    }
    function goBack(){
        router.back()
    }
    function openRealEstateEditor(){
        navigate(ROUTES.real_estate.update)
    }
}