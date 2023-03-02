import { cn } from "../../utils/fn"
import useAppSetup from "./useAppSetup"



export default function AppSetup() {
    const { isLandingPage } = useAppSetup()


    return (
        <div className={cn("fixed z-20 bg-white top-[0] left-[0] w-[100vw] h-[100vh] flex justify-center ", isLandingPage.current ? "hidden" : "")} id="preloader">
            <div className="mt-[200px] flex flex-col items-center">
                <svg width="100" height="84" viewBox="0 0 70 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 15.3847C0 15.0539 0.268226 14.7856 0.599099 14.7856H13.2688C13.5997 14.7856 13.8679 15.0539 13.8679 15.3847V53.9999H0.599099C0.268226 53.9999 0 53.7317 0 53.4008V15.3847Z" fill="#2F8CE9" />
                    <path d="M35.6602 0H49.5281V53.4009C49.5281 53.7318 49.2599 54 48.929 54H35.6602V0Z" fill="#2F8CE9" />
                    <path d="M13.8682 53.9999V40.4999H33.7408C34.0716 40.4999 34.3399 40.7682 34.3399 41.099V53.9999H13.8682Z" fill="#2F8CE9" />
                    <path d="M49.5283 13.5001V6.10352e-05L69.4009 6.10352e-05C69.7318 6.10352e-05 70 0.268287 70 0.59916V12.901C70 13.2318 69.7318 13.5001 69.4009 13.5001L49.5283 13.5001Z" fill="#2F8CE9" />
                    <path d="M15.7876 13.5001C15.4567 13.5001 15.1885 13.2318 15.1885 12.901V0.599161C15.1885 0.268287 15.4567 6.10352e-05 15.7876 6.10352e-05L35.6602 6.10352e-05V13.5001L15.7876 13.5001Z" fill="#2F8CE9" />
                    <path d="M0 13.5001L0 0.599161C0 0.268287 0.268226 6.10352e-05 0.599099 6.10352e-05H13.8679L13.8679 12.901C13.8679 13.2318 13.5997 13.5001 13.2688 13.5001H0Z" fill="#202020" />
                </svg>
                <div className="w-[110px] relative overflow-hidden h-1 mt-2 rounded-full">
                    <div id="preload-bar" className="absolute  bg-[#2F8CE9] w-full h-1 "></div>
                </div>
                <p className="mt-6 text-gray-400 font-semibold">Litumba - We are family</p>
            </div>
        </div>
    )
}