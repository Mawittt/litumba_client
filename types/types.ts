import { MouseEventHandler } from "react"


export interface IconProps{
    selected? : boolean,
    onClick? : MouseEventHandler,
    className? :  string | undefined
}