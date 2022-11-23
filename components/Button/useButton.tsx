import { ButtonProps } from "../../types/types";



export default function useButton( {label , onClick , icon , className , full , colored} : ButtonProps){
    className = className || " "
    return {label , onClick , icon , className , full , colored}
}