import { useRouter } from "next/router";
import { brand_avatar_1 } from "../assets/avatars";
import { business_image_1 } from "../assets/images";
import { JobDetailsProps } from "../types/types";






export default function useJobDetails(){

    const router = useRouter()

    const _id = router.query._id
    const details : JobDetailsProps  = {
        cover : business_image_1,
        avatar : brand_avatar_1,
        author : "Crown Enterprise",
        email : "crownenterprise@gmail.com",
        website : "crownenterprise.com" ,
        time : "23 hours",
        location : "Douala-Cameroon",
        title : "Web marketer",
        description : "We are a componay that deals with food and leather, we need some sort of online presence and so we are looking for a qualified web marcketer, the skills of this web marcketer should be exeptional as we dont deal with small clients.",
        price : " > 50.000 frs",
        niche : "Web marketing ",
        urgency : "2 weeks",
        type : "remote",
        level : "expert",
        schedule : "full-time",
        available : true,
        _id : 1
    }


    return {details}

}