import { JobProps } from "../../types/types";



export default function useJob({avatar , title , location , time , description , tags , brand , _id } : JobProps) {

    return {avatar , title , location ,time,description ,tags , brand }
}