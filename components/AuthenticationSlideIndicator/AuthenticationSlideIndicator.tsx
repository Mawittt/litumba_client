import { AuthenticationSlideIndicatorProps } from "../../types/types"
import { cn } from "../../utils/fn"
import useAuthenticationSlideIndicator from "./useAuthenticationSlideIndicator"




export default function AuthenticationSlideIndicator(props: AuthenticationSlideIndicatorProps) {
    const { slide } = useAuthenticationSlideIndicator(props)
    return (
        <div className="flex gap-2 w-full justify-center py-4">
            <span className={cn(
                "w-4 h-4 rounded-full  block border-[2px] border-solid border-blue-500",
                slide === 1 ? "bg-blue-500" : "bg-white"
            )}></span>
            <span className={cn(
                "w-4 h-4 rounded-full  block border-[2px] border-solid border-blue-500",
                slide === 2 ? "bg-blue-500" : "bg-white"
            )}></span>
            <span className={cn(
                "w-4 h-4 rounded-full  block border-[2px] border-solid border-blue-500",
                slide === 3 ? "bg-blue-500" : "bg-white"
            )}></span>
            <span className={cn(
                "w-4 h-4 rounded-full  block border-[2px] border-solid border-blue-500",
                slide === 4 ? "bg-blue-500" : "bg-white"
            )}></span>
            <span className={cn(
                "w-4 h-4 rounded-full  block border-[2px] border-solid border-blue-500",
                slide === 5 ? "bg-blue-500" : "bg-white"
            )}></span>
        </div>
    )
}