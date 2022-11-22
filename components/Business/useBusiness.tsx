import { BusinessProps } from "../../types/types";





export default function useBusiness({avatar, name , email , website , description , tags , _id} : BusinessProps){

    return {avatar, name , email , website , description , tags }
}