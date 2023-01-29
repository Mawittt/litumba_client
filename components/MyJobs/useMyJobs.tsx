import { brand_avatar_1 } from "../../assets/avatars"
import { MyJobProps } from "../../types/types"



export default function useMyJobs({ jobs }: { jobs: MyJobProps[] }) {
    return { jobs }
}