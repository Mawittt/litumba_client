import { ToggleButtonProps } from "../../types/types";
import { cn } from "../../utils/fn";
import useToggleButton from "./useToggleButton";







export default function ToggleButton(props: ToggleButtonProps) {
    const { toggle, setToggle, attributes, className, value } = useToggleButton(props)
    return (
        <label className={cn("inline-flex relative items-center mr-5 cursor-pointer", className)}  >
            <input
                type="checkbox"
                className="sr-only peer"
                {...attributes}
                checked={value}
            />
            <div
                className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"
            ></div>
        </label>
    )
}