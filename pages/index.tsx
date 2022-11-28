import { ROUTES } from "../assets/constant";
import SignUp from "../components/SignUp/SignUp";
import Button from "../components/Button/Button";
import useLanding from "../pageUtils/useLanding";
import Login from "../components/Login/Login";

export default function Home() {
    const {navigate , closeAuth , openSignUp ,openLogIn, auth} = useLanding()
	return (
		<div className="w-full h-screen flex flex-col justify-center items-center gap-4">
            <div className="font-bold text-2xl w-[95vw] max-w-[500px] text-center">
                Welcome to Litumba, as of now the landing page isn&apos;t implemented yet, how ever you can get a view of the app through the entry points below
            </div>
            <Button label="Sign Up ui" onClick={openSignUp} />
            <Button label="Log In ui" onClick={openLogIn} />
            <Button label="home ui" onClick={()=>navigate(ROUTES.home)} />
            <div>
                {auth === "signUp" && <SignUp closeAuth={closeAuth} />}
                {auth === "logIn" && <Login closeAuth={closeAuth} />}
            </div>
        </div>
	);
}

Home.getLayout = function getLayout(page: any){
    return page
}