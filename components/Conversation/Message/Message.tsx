import { MessageProps } from "../../../types/types"
import { cn } from "../../../utils/fn"
import useMessage from "./useMessage"




export default function Message(props: MessageProps) {
    const { message } = useMessage(props)
    return (
        <div className={cn(
            "w-full flex  cursor-pointer my-2",
            message.self ? "justify-end" : "justify-start"
        )}>
            <div className={cn(
                "py-1 px-4 w-fit rounded-2xl",
                message.self ? "bg-blue-500 text-white" : " bg-gray-200"
            )}>
                <div className="font-semibold">{message.text}</div>
                <div className="text-sm">{message.time}</div>
            </div>
        </div>
    )
}