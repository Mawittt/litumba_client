import { useState } from "react"
import { brand_avatar_1, brand_avatar_2, brand_avatar_3 } from "../../assets/avatars"
import { MyServiceProps } from "../../types/types"



export default function useMyServices(){
    const services: MyServiceProps[] = [
        {
            image: brand_avatar_1,
            title: "Designer",
            interested: 5
        },
        {
            image: brand_avatar_3,
            title: "Web development",
            interested: 1
        },
        {
            image: brand_avatar_2,
            title: "Mentorship",
            interested: 3
        },
    ]

    const more = true
    return { services , more }
}