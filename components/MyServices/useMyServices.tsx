import { useState } from "react"
import { brand_avatar_1, brand_avatar_2, brand_avatar_3 } from "../../assets/avatars"
import { MyServiceProps } from "../../types/types"



export default function useMyServices({ services }: { services: MyServiceProps[] }) {
    const more = true
    return { services, more }
}