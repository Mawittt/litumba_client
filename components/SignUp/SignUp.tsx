import Image from "next/image"
import { AddImageIcon, BackIcon, LeftArrowIcon, RightIcon } from "../../assets/icons"
import { sign_up_names_image } from "../../assets/images"
import { SignUpProps } from "../../types/types"
import AuthenticationSlideIndicator from "../AuthenticationSlideIndicator/AuthenticationSlideIndicator"
import Button from "../Button/Button"
import useSignUP from "./useSignUp"





export default function SignUp(props: SignUpProps) {
    const { closeAuth, left, right, slide, createAccount , goToHome } = useSignUP(props)
    return (
        <div className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center ">
            <div className="relative w-[95%] h-[95%] max-[640px]:w-[100vw] max-[640px]:h-[100vh] max-[640px]:max-h-[100vh] max-w-[793px] max-h-[545px] shadow-comp_lg bg-white box-border overflow-hidden rounded-md">
                <div className=" absolute z-[1] right-[5px] top-4 bg-white shadow-icon w-[35px] h-[35px] rounded-full  flex justify-center items-center hover:cursor-pointer" onClick={closeAuth}><BackIcon /></div>
                <img src={sign_up_names_image} width="100%" alt="authentication background" className="top-0 h-[105%] absolute object-cover" />
                <div className="grid grid-rows-[auto_minmax(0px,max-content)_minmax(0px,max-content)] py-4  px-2 w-[450px] h-full max-[640px]:w-[100%] max-[640px]:h-[100%]  max-[640px]:bg-white bg-[linear-gradient(90deg,white_80%,#00000000)] relative">

                    {slide === 1 && <SlideOne />}

                    {slide === 2 && <SlideTwo />}

                    {slide === 3 && <SlideThree />}

                    {slide === 4 && <SlideFour />}

                    {slide === 5 && <SlideFive />}


                    <div className="w-full max-w-[350px]">
                        <AuthenticationSlideIndicator slide={slide} />
                    </div>
                    <div className="flex justify-center gap-6 max-w-[350px]">
                        <Button icon={<LeftArrowIcon />} onClick={left} />
                        {slide === 5 ? <Button label="Create account" onClick={goToHome} /> : <Button icon={<RightIcon />} onClick={right} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

function SlideOne() {
    return (
        <div className="gid grid-row-[minmax(0,max-content)_auto] items-center w-full h-full overflow-auto max-w-[350px]">
            <h3 className="font-bold text-2xl">Hi there! the community would love to know your names</h3>
            <div className="mt-4">
                <div className="flex flex-col gap-2 max-w-[300px]">
                    <div className="font-bold">First name</div>
                    <input type="text" className="text-input" />
                </div>
                <div className="flex flex-col gap-2 max-w-[300px]">
                    <div className="font-bold">Middle name</div>
                    <input type="text" className="text-input" />
                </div>
                <div className="flex flex-col gap-2 max-w-[300px]">
                    <div className="font-bold">Last name</div>
                    <input type="text" className="text-input" />
                </div>
            </div>
        </div>
    )
}
function SlideTwo() {
    return (
        <div className="gid grid-row-[minmax(0,max-content)_auto] items-center w-full  overflow-auto max-w-[350px]">
            <h3 className="font-bold text-2xl">Give your account a face so others can recognize you</h3>
            <div className="mt-4 flex flex-col  gap-4 items-center   ">
                <div>
                    <Button label="Profile image" icon={<AddImageIcon />} />
                </div>
                <div>
                    <Button label="Cover Image" icon={<AddImageIcon />} />
                </div>
            </div>
        </div>
    )
}
function SlideThree() {
    return (
        <div className="gid grid-row-[minmax(0,max-content)_auto] items-center w-full h-full overflow-auto max-w-[350px]">
            <h3 className="font-bold text-2xl">oh nice! Now where are you currently?</h3>
            <div className="mt-4">
                <div className="flex flex-col gap-2 max-w-[300px]">
                    <div className="font-bold">Country </div>
                    <input type="text" className="text-input" />
                </div>
                <div className="flex flex-col gap-2 max-w-[300px]">
                    <div className="font-bold">City</div>
                    <input type="text" className="text-input" />
                </div>
            </div>
        </div>
    )
}
function SlideFour() {
    return (
        <div className="gid grid-row-[minmax(0,max-content)_auto] items-center w-full h-full overflow-auto max-w-[350px]">
            <h3 className="font-bold text-2xl">Nearly done! please just tell us more about yourself.</h3>
            <div className="mt-4">
                <div className="flex flex-col gap-2 max-w-[300px]">
                    <div className="font-bold">Profession </div>
                    <input type="text" className="text-input" />
                </div>
                <div className="flex flex-col gap-2 max-w-[300px]">
                    <div className="font-bold">Describe yourself</div>
                    <textarea className="text-input h-[150px] rounded-lg"  />
                </div>
            </div>
        </div>
    )
}
function SlideFive() {
    return (
        <div className="gid grid-row-[minmax(0,max-content)_auto] items-center w-full h-full overflow-auto max-w-[350px]">
            <h3 className="font-bold text-2xl">Finally how do we contact you! lets setup security too.</h3>
            <div className="mt-4">
                <div className="flex flex-col gap-2 max-w-[300px]">
                    <div className="font-bold">Phone</div>
                    <input type="text" className="text-input" />
                </div>
                <div className="flex flex-col gap-2 max-w-[300px]">
                    <div className="font-bold">Email</div>
                    <input type="text" className="text-input" />
                </div>
                <div className="flex flex-col gap-2 max-w-[300px]">
                    <div className="font-bold">Password</div>
                    <input type="text" className="text-input" />
                </div>
            </div>
        </div>
    )
}