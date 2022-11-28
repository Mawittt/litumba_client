import { useState } from "react";
import { ROUTES } from "../../assets/constant";
import { SignUpProps } from "../../types/types";
import { useNavigate } from "../../utils/hooks";




export default function useSignUP({closeAuth} : SignUpProps){
    const [slide , setSlide] = useState(1)
    const {navigate} = useNavigate()

    return {closeAuth , slide , right , left , createAccount , goToHome}

    function right(){
        if(slide >= 5 ) return
        setSlide(slide + 1)
    }
    function left(){
        if(slide <= 1) return
        setSlide(slide - 1)
    }
    function createAccount(){
        alert("created account")
    }
    function goToHome(){
        navigate(ROUTES.home)
    }
}
