import { useState } from "react"
import { ToggleButtonProps } from "../../types/types"





export default function useToggleButton({ attributes, className, onClick, value }: ToggleButtonProps) {
    attributes = attributes || {}
    className = className || ""
    onClick = onClick || function () { }

    const [toggle, setToggle] = useState(true)
    return { toggle, setToggle, attributes, className, onClick, value }
}