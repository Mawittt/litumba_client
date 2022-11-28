import { useState } from "react";
import { ROUTES } from "../../assets/constant";
import { LogInProps, SignUpProps } from "../../types/types";
import { useNavigate } from "../../utils/hooks";


export default function useLogin({closeAuth} : LogInProps){
    const {navigate} = useNavigate()
    return {closeAuth , goToHome}

    function goToHome(){
        navigate(ROUTES.home)
    }
}
