import { brand_avatar_1 } from "../../assets/avatars"
import { MyJobProps } from "../../types/types"



export default function useMyJobs() {
    const jobs: MyJobProps[] = [
        {
            image: brand_avatar_1,
            title: "Manager",
            applicants: 5
        },
        {
            image: brand_avatar_1,
            title: "Assistant",
            applicants: 18
        },
    ]
    return { jobs }
}