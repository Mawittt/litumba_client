import { MessageProps } from "../../../types/types"
import { cn } from "../../../utils/fn"
import useMessage from "./useMessage"




export default function Message(props: MessageProps) {
    const { message } = useMessage(props)
    return (
        <div className={cn(
            "w-full flex  cursor-pointer" ,
            message.self ? "justify-end" : "justify-start"
        )}>
            <div className={cn(
                "py-1 px-2 w-fit rounded-2xl",
                message.self ? "bg-blue-500 text-white" : "ring-1 ring-blue-500 text-blue-500"
            )}>
                <div>{message.text}</div>
                <div className="text-sm">{message.time}</div>
            </div>
        </div>
    )
}