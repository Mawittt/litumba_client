import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ROUTES } from "../../assets/constant";
import { authApiReturn, SignUpFormProps, SignUpProps } from "../../types/types";
import { useNavigate, useNotifiers } from "../../utils/hooks";
import jwt_decode from "jwt-decode"
import useStore from "../../store/useStore";
import { useMutation } from "react-query";
import axios from "axios";
import { setCookie } from "cookies-next"




export default function useSignUP({ closeAuth }: SignUpProps) {
    const { setUser, user, } = useStore()
    const [slide, setSlide] = useState(1)
    const { navigate } = useNavigate()
    const { handleSubmit, register, getValues, setValue } = useForm<SignUpFormProps>({
        defaultValues: {
            firstName: "",
            lastName: '',
            profileImage: null,
            coverImage: null,
            city: "",
            profession: "",
            description: "",
            phone: "",
        }
    })
    const [profile, setProfile] = useState("")
    const [cover, setCover] = useState("")
    const { setWarning } = useNotifiers()
    const mutator = useMutation<{ data: authApiReturn }, Error, any>("user", (user: any) => {
        return axios.post("/api/user/", user)
    })
    const isLoading = useRef(false)

    useEffect(() => {
        if (mutator.isSuccess) handleSuccess()
    }, [mutator.data?.data, mutator.isSuccess])

    if (mutator.error) isLoading.current = false
    if (mutator.isLoading) isLoading.current = true

    return { isLoading, closeAuth, slide, right, left, createAccount, goToHome, handleSubmit, register, profile, cover, setImage, SignUp }

    function right() {
        if (slide >= 5) return
        if (!formOneIsFilled()) return handleFormNotField()
        if (!formTwoIsFilled()) return handleFormNotField()
        if (!formThreeIsFilled()) return handleFormNotField()
        if (!formFourIsFilled()) return handleFormNotField()
        setSlide(slide + 1)

        function handleFormNotField() {
            setWarning({ content: "please fill all spaces" })
        }
        function formOneIsFilled() {
            if (slide !== 1) return true
            if (!getValues("firstName")) return false
            if (!getValues("lastName")) return false
            return true
        }
        function formTwoIsFilled() {
            if (slide !== 2) return true
            if (!getValues("profileImage")) return false
            if (!getValues("coverImage")) return false
            return true
        }
        function formThreeIsFilled() {
            if (slide !== 3) return true
            if (!getValues("city")) return false
            if (!getValues("country")) return false
            return true
        }
        function formFourIsFilled() {
            if (slide !== 4) return true
            if (!getValues('profession')) return false
            if (!getValues("description")) return false
            return true
        }
    }
    function left() {
        if (slide <= 1) return
        setSlide(slide - 1)
    }
    function createAccount() {
        alert("created account")
    }
    function goToHome() {
        navigate(ROUTES.home)
    }
    function SignUp(data: any) {
        const credentials: { email: string } = jwt_decode(data.credential)
        const values = getValues()
        const formData = new FormData()

        formData.append("firstName", values.firstName)
        formData.append("lastName", values.lastName)
        if (values.profileImage) formData.append("profileImage", values.profileImage)
        if (values.coverImage) formData.append("coverImage", values.coverImage)
        formData.append("country", values.country)
        formData.append("city", values.city)
        formData.append("profession", values.profession)
        formData.append("description", values.description)
        formData.append("phone", values.phone)
        formData.append("email", credentials.email)

        mutator.mutate(formData)
    }
    function setImage(type: "profile" | "cover", image: React.ChangeEvent<HTMLInputElement>) {
        if (!image?.target?.files?.[0]) return
        const fileReader = new FileReader()
        fileReader.onload = () => {
            if (!fileReader.result) return
            if (!image.target.files) return
            if (type === "profile") {
                setProfile(fileReader.result.toString())
                setValue("profileImage", image.target.files[0])
            }
            if (type === "cover") {
                setCover(fileReader.result.toString())
                setValue("coverImage", image.target.files[0])
            }
        }
        fileReader.readAsDataURL(image.target.files[0])
    }
    function handleSuccess() {
        if (!mutator.data?.data) return
        setUser({ id: mutator.data.data.userId })
        setCookie("token", mutator.data.data.token)
        navigate(ROUTES.home)
        mutator.reset()
    }
}
