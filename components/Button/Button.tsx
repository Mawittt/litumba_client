import { ButtonProps } from "../../types/types"
import { cn } from "../../utils/fn"
import useButton from "./useButton"



export default function Button(props: ButtonProps) {
    const { label, className, onClick, icon, full, colored } = useButton(props)
    return (
        <button
            className={
                cn("border-blue-500 border-solid  border-[1.5px] rounded-lg px-[10px] py-[5px] font-semibold flex ",
                    className,
                    full ? " w-full" : " ",
                    colored ? " text-white bg-blue-500" : "text-blue-500 bg-white",
                    icon ? "" : "justify-center"
                )
            }
            onClick={onClick}>
            <div className="max-h-[24px]">
                {icon}
            </div>
            {label}
        </button>
    )
}