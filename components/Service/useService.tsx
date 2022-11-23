import { ServiceProps } from "../../types/types";




export default function useService({avatar, title , location , website , description, tags , _id} : ServiceProps){

    return {avatar, title , location , website , description, tags}
}