import { ButtonProps } from "../../types/types"
import useButton from "./useButton"

function cn(...classes : string[]){
    return classes.filter(Boolean).join(' ')
}

export default function Button(props : ButtonProps){
    const {label , className , onClick , icon , full} = useButton(props) 
    return (
        <button 
        className={
            cn("border-blue-500 border-solid  border-[1.5px] rounded-lg px-[10px] py-[5px] font-semibold text-blue-500",className,full ? " w-full" : " "
            )
        } 
        onClick={onClick}>
            {label}
            {icon}
        </button>
    )
}