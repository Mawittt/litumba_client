import { BackIcon } from "../../assets/icons"
import { sign_up_names_image } from "../../assets/images"
import { LogInProps } from "../../types/types"
import Button from "../Button/Button"
import useLogin from "./useLogin"


export default function Login(props: LogInProps) {
    const { closeAuth , goToHome} = useLogin(props)
    return (
        <div className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center ">
            <div className="relative w-[95%] h-[95%] max-[640px]:w-[100vw] bg-white max-[640px]:h-[100vh] max-[640px]:max-h-[100vh] max-w-[793px] max-h-[545px] shadow-comp_lg box-border overflow-hidden rounded-md">
                <div className=" absolute z-[1] right-[5px] top-4 bg-white shadow-icon w-[35px] h-[35px] rounded-full  flex justify-center items-center hover:cursor-pointer" onClick={closeAuth}><BackIcon /></div>
                <img src={sign_up_names_image} width="100%" alt="authentication background" className="top-0 h-[105%] absolute object-cover" />
                <div className="grid grid-rows-[auto_minmax(0px,max-content)_minmax(0px,max-content)] py-4  px-2 w-[450px] h-full max-[640px]:w-[100%] max-[640px]:h-[100%]  max-[640px]:bg-white bg-[linear-gradient(90deg,white_80%,#00000000)] relative">
                    <div className="flex flex-col items-center gap-[20%] w-full h-full overflow-auto max-w-[350px]">
                        <h3 className="font-bold text-2xl">Log in</h3>
                        <div className="mt-4">
                            <div className="flex flex-col gap-2 max-w-[300px]">
                                <div className="font-bold">phone</div>
                                <input type="text" className="text-input" />
                            </div>
                            <div className="flex flex-col gap-2 max-w-[300px]">
                                <div className="font-bold">email</div>
                                <input type="text" className="text-input" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-6 max-w-[350px]">
                        <Button label="Login" onClick={goToHome} />
                    </div>
                </div>
            </div>
        </div>
    )
}
