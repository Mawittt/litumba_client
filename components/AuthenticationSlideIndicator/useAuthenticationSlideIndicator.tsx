import { useState } from "react"
import { AuthenticationSlideIndicatorProps } from "../../types/types"





export default function useAuthenticationSlideIndicator({slide = 0} : AuthenticationSlideIndicatorProps){
    return { slide }
}