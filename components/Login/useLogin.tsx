import { useEffect, useRef, useState } from "react";
import { ROUTES } from "../../assets/constant";
import { authApiReturn, LogInProps, SignUpProps } from "../../types/types";
import { useNavigate, useNotifiers } from "../../utils/hooks";
import jwt_decode from "jwt-decode"
import { useMutation } from "react-query";
import axios from "axios";
import useStore from "../../store/useStore";
import { setCookie } from "cookies-next"


export default function useLogin({ closeAuth }: LogInProps) {
    const { setUser, user } = useStore()
    const { navigate } = useNavigate()
    const { setWarning } = useNotifiers()
    const isLoading = useRef(false)
    const mutator = useMutation<{ data: authApiReturn }, Error, any>("user", (data: any) => {
        return axios.post("/api/user/", data)
    })

    useEffect(() => {
        try {
            (function (google) {
                google.accounts.id.initialize({
                    client_id: "665597880201-i3ec550sc06r2alt3pg78jnopek859mb.apps.googleusercontent.com",
                    callback: Login
                })
                google.accounts.id.renderButton(
                    document.getElementById("google_button"),
                    {
                        width: 250,
                        text: "Log in with Google"
                    }
                )
                // @ts-ignore
            })(google)

        } catch (err) {
            console.log(err)
        }
    }, [])

    useEffect(() => {
        if (mutator.isSuccess) handleSuccess()
    }, [mutator.data?.data, mutator.isSuccess])

    if (mutator.isError) handleError()
    if (mutator.isLoading) isLoading.current = true

    return { closeAuth, goToHome, isLoading }

    function goToHome() {
        navigate(ROUTES.home)
    }
    function Login(data: any) {
        const credentials: { email: string } = jwt_decode(data.credential)
        const formData = new FormData()
        formData.append("email", credentials.email)
        mutator.mutate(formData)
    }
    function handleSuccess() {
        if (!mutator.data?.data) return
        setUser({ id: mutator.data.data.userId })
        setCookie("token", mutator.data.data.token)
        navigate(ROUTES.home)
        mutator.reset()
    }
    function handleError() {
        isLoading.current = false
        setWarning({ content: "please Sign up with this email" })
        mutator.reset()
    }
}

