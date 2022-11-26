import { StarIcon } from "../../assets/icons"
import { StarsProps } from "../../types/types"
import useStars from "./useStars"




export default function Stars(props : StarsProps){
    const {number} = useStars(props)

    return(
        <div className="flex justify-around w-full items-center max-w-[150px]">
           <StarIcon selected={number >= 1}/>
           <StarIcon selected={number >= 2}/>
           <StarIcon selected={number >= 3}/>
           <StarIcon selected={number >= 4}/>
           <StarIcon selected={number >= 5}/>
        </div>
    )
}