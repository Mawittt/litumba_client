import { useState } from "react";
import { useNavigate } from "../utils/hooks";




export default function(){
    const {navigate} = useNavigate()
    const [auth,setAuth] = useState<null | string>(null)

    return {navigate,auth , closeAuth, openSignUp ,openLogIn}

    function closeAuth(){
        setAuth(null)
    }
    function openSignUp(){
        setAuth("signUp")
    }
    function openLogIn(){
        setAuth("logIn")
    }
}