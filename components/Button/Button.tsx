import { ButtonProps } from "../../types/types"
import { cn } from "../../utils/fn"
import useButton from "./useButton"



export default function Button(props: ButtonProps) {
    const { label, className, onClick, icon, full, colored, inputLabel } = useButton(props)
    return (
        <button
            className={
                cn("border-blue-500 border-solid  border-[1.5px] rounded-lg px-[0px] py-[0px] font-semibold cursor-pointer ",
                    className,
                    full ? " w-full" : " ",
                    colored ? " text-white bg-blue-500" : "text-blue-500 bg-white",
                )
            }
            onClick={onClick}>
            <label 
                htmlFor={inputLabel} 
                className={
                    cn("w-full h-full px-[10px] py-[5px] flex cursor-pointer",
                        icon ? "" : "justify-center"
                    )}
            >
                <div className="max-h-[24px]">
                    {icon}
                </div>
                {label}
            </label>
        </button>
    )
}