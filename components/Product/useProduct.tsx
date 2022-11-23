import { ProductProps } from "../../types/types";



export default function useProduct({avatar , name , location , website , image , description , price , _id , amount, brand} : ProductProps ){

    return {avatar , name , location , website , image , description , price , amount , brand}
}