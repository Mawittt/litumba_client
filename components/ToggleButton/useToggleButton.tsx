import { useState } from "react"





export default function useToggleButton(){
    const [toggle, setToggle] = useState(true)
    return {toggle, setToggle}
}