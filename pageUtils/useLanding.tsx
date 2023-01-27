import axios from "axios";
import { useState, useRef } from "react";
import { useNavigate } from "../utils/hooks";




export default function () {
    const { navigate } = useNavigate()
    const [auth, setAuth] = useState<null | string>(null)
    const image = useRef<FormData>()

    return { getImage, testApi, navigate, auth, closeAuth, openSignUp, openLogIn }

    function closeAuth() {
        setAuth(null)
    }
    function openSignUp() {
        setAuth("signUp")
    }
    function openLogIn() {
        setAuth("logIn")
    }

    function getImage(e: any) {
        const formData = new FormData()
        for (let i = 0; i < e.target.files.length; i++) {
            const image = e.target.files[i];

            formData.append("profileImage", image)
            console.log("one file")
        }
        image.current = formData
    }
    async function testApi() {
        console.log(image.current)
        const res = await axios.post("/api/posts", image.current)
        console.log(res.data)
    }
}