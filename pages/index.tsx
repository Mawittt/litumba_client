import SignUp from "../components/SignUp/SignUp";
import useLanding from "../pageUtils/useLanding";
import Login from "../components/Login/Login";
import Image from "next/image";
import { Businesses, culturalGroups, heroBg, jobs, mission, products, realEstates, section, services } from "../assets/landingPageStock";
import { logo_light } from "../assets/logos";
import Head from "next/head";


export default function Home() {
    const { closeAuth, openSignUp, openLogIn, auth, introduceHeroSection } = useLanding()
    return (
        <div id="homepage" className=" bg-blue-50 h-screen overflow-hidden">
            <div id="heroSection" className="w-screen h-screen relative bg-black overflow-hidden">
                <Image fill src={heroBg} alt="hero background" className="object-cover brightness-75 opacity-0 transition-all duration-500 " onLoad={introduceHeroSection} id="backgroundImage" />
                <Image src={logo_light} alt={"logo"} height={71} width={56} className="absolute top-[-72px] left-6 " id="logo" />
                <div className=" text-white absolute m-auto top-0 left-0 bottom-0 right-0 w-fit h-fit flex flex-col items-center">
                    <h1 id="header" className=" opacity-0 ingrid-font-style text-[6rem] m-0 max-[595px]:text-[15vw] ">Litumba - we be family</h1>
                    <p id="lead" className=" opacity-0 w-fit max-w-[700px] text-[1.5rem] text-center max-[689px]:max-w-[90vw] max-[595px]:text-[1.3rem]">Welcome to Litumba, the online platform for Bakwerians to connect, network, and grow together socially and economically.</p>
                    <div id="cta" className="opacity-0 mt-[75px] text-[2rem] max-[689px]:text-[1.5rem]">
                        <button onClick={openSignUp} className="px-[30px] py-[5px] max-[689px]:py-[5px] max-[689px]:px-[20px] rounded-lg mr-[50px] bg-blue-500  ring-2 ring-blue-500">Join us</button>
                        <button onClick={openLogIn} className="px-[30px] py-[5px] max-[689px]:py-[5px] max-[689px]:px-[20px] rounded-lg ring-blue-500 ring-2 ">log in</button>
                    </div>
                </div>
                <svg width="37" height="24" viewBox="0 0 57 44" fill="none" xmlns="http://www.w3.org/2000/svg" className=" absolute bottom-4 m-auto left-0 right-0">
                    <path d="M30.99 42.2946C29.8013 44.0636 27.1987 44.0636 26.01 42.2946L0.896528 4.92328C-0.442705 2.93036 0.985445 0.25 3.38654 0.25L53.6135 0.25C56.0146 0.25 57.4427 2.93037 56.1035 4.92328L30.99 42.2946Z" fill="white" />
                </svg>
            </div>
            <div id="services" className=" py-8 px-4 flex flex-col items-center justify-center h-fit overflow-hidden relative">
                <div className="absolute h-[200%] bg-red-500 w-full opacity-10 flex origin-center rotate-45">
                    <div className="bg-blue-200 w-[20%] h-full flex flex-col">
                        <div className="bg-blue-500 rounded-lg my-2 mx-2 flex-grow"></div>
                        <div className="bg-blue-500 rounded-lg my-2 mx-2 h-[16%]"></div>
                        <div className="bg-blue-500 rounded-lg my-2 mx-2 flex-grow"></div>
                        <div className="bg-blue-500 rounded-lg my-2 mx-2 h-[16%]"></div>
                    </div>
                    <div className="bg-green-200 w-[20%] h-full flex flex-col">
                        <div className="bg-green-500 rounded-lg my-2 mx-2 h-[16%]"></div>
                        <div className="bg-green-500 rounded-lg my-2 mx-2 flex-grow"></div>
                        <div className="bg-green-500 rounded-lg my-2 mx-2 h-[16%]"></div>
                        <div className="bg-green-500 rounded-lg my-2 mx-2 flex-grow"></div>
                    </div>
                    <div className="bg-red-200 w-[20%] h-full flex flex-col">
                        <div className="bg-red-500 rounded-lg my-2 mx-2 flex-grow"></div>
                        <div className="bg-red-500 rounded-lg my-2 mx-2 h-[16%]"></div>
                        <div className="bg-red-500 rounded-lg my-2 mx-2 flex-grow"></div>
                        <div className="bg-red-500 rounded-lg my-2 mx-2 h-[16%]"></div>
                    </div>
                    <div className="bg-gray-200 w-[20%] h-full flex flex-col">
                        <div className="bg-gray-500 rounded-lg my-2 mx-2 flex-grow"></div>
                        <div className="bg-gray-500 rounded-lg my-2 mx-2 h-[16%]"></div>
                        <div className="bg-gray-500 rounded-lg my-2 mx-2 flex-grow"></div>
                        <div className="bg-gray-500 rounded-lg my-2 mx-2 h-[16%]"></div>
                    </div>
                    <div className="bg-blue-200 w-[20%] h-full flex flex-col">
                        <div className="bg-blue-500 rounded-lg my-2 mx-2 flex-grow"></div>
                        <div className="bg-blue-500 rounded-lg my-2 mx-2 h-[16%]"></div>
                        <div className="bg-blue-500 rounded-lg my-2 mx-2 flex-grow"></div>
                        <div className="bg-blue-500 rounded-lg my-2 mx-2 h-[16%]"></div>
                    </div>
                </div>
                <h3 className="text-[2rem] font-bold text-blue-500">Our offers</h3>
                <div className="relative max-w-[1050px] max-[973px]:justify-around flex flex-wrap justify-between items-between">
                    <div data-delay="0" className="card opacity-0 max-[892px]:w-[300px] max-sm:w-[200px] max-sm:text-[0.8rem] mx-2 max-w-[90vw]  flex flex-col items-center max-[973px]:w-[400px] w-[300px] my-8 bg-white shadow-comp_lg rounded-lg px-4 py-4">
                        <Image src={jobs} width={236.72} height={232.32} alt="jobs image" className="max-sm:w-[136.72px] max-sm:w-[232.32px]" />
                        <div className="font-bold text-[1.5rem] text-blue-500 text-center">Jobs</div>
                        <p>Litumba offers you the opportunity to post and find jobs within the Bakwerian lands. this is to reduce the rate of unemployment and make human resources to businesses</p>
                    </div>
                    <div data-delay="100" className="card opacity-0 max-[892px]:w-[300px] max-sm:w-[200px] max-sm:text-[0.8rem] mx-2 max-w-[90vw]  flex flex-col items-center max-[973px]:w-[400px] w-[300px] my-8 bg-white shadow-comp_lg rounded-lg px-4 py-4">
                        <Image src={Businesses} width={236.72} height={232.32} alt="services image" className="max-sm:w-[136.72px] max-sm:w-[232.32px]" />
                        <div className="font-bold text-[1.5rem] text-blue-500 text-center">Businesses</div>
                        <p>Here, you also have the possibility of giving more visibility to your brand and business by creating a representative on the Litumba platform , this will generate a lot of traffic.</p>
                    </div>
                    <div data-delay="200" className="card opacity-0 max-[892px]:w-[300px] max-sm:w-[200px] max-sm:text-[0.8rem] mx-2 max-w-[90vw]  flex flex-col items-center max-[973px]:w-[400px] w-[300px] my-8 bg-white shadow-comp_lg rounded-lg px-4 py-4">
                        <Image src={products} width={236.72} height={232.32} alt="products image" className="max-sm:w-[136.72px] max-sm:w-[232.32px]" />
                        <div className="font-bold text-[1.5rem] text-blue-500 text-center">Products</div>
                        <p>Products are also given attention, you have the possibility of posting different products that you might need to sell and also find others which you might buy from around you.</p>
                    </div>
                    <div data-delay="300" className="card opacity-0 max-[892px]:w-[300px] max-sm:w-[200px] max-sm:text-[0.8rem] mx-2 max-w-[90vw]  flex flex-col items-center max-[973px]:w-[400px] w-[300px] my-8 bg-white shadow-comp_lg rounded-lg px-4 py-4">
                        <Image src={services} width={236.72} height={232.32} alt="services image" className="max-sm:w-[136.72px] max-sm:w-[232.32px]" />
                        <div className="font-bold text-[1.5rem] text-blue-500 text-center">Services</div>
                        <p>With Litumba, you can make available your services to the Bakwerian family , and also find talent for your needs, Litumba is a platform of exchange , find business opportunities . </p>
                    </div>
                    <div data-delay="400" className="card opacity-0 max-[892px]:w-[300px] max-sm:w-[200px] max-sm:text-[0.8rem] mx-2 max-w-[90vw]  flex flex-col items-center max-[973px]:w-[400px] w-[300px] my-8 bg-white shadow-comp_lg rounded-lg px-4 py-4">
                        <Image src={realEstates} width={236.72} height={232.32} alt="real estate image" className="max-sm:w-[136.72px] max-sm:w-[232.32px]" />
                        <div className="font-bold text-[1.5rem] text-blue-500 text-center">Real Estate</div>
                        <p>Bakwerians need more power on their lands and estate properties, here at Litumba you make public your real estate deals so that other Bakwerians can profit from them.</p>
                    </div>
                    <div data-delay="500" className="card opacity-0 max-[892px]:w-[300px] max-sm:w-[200px] max-sm:text-[0.8rem] mx-2 max-w-[90vw]  flex flex-col items-center max-[973px]:w-[400px] w-[300px] my-8 bg-white shadow-comp_lg rounded-lg px-4 py-4">
                        <Image src={culturalGroups} width={236.72} height={232.32} alt="cultural groups image" className="max-sm:w-[136.72px] max-sm:w-[232.32px]" />
                        <div className="font-bold text-[1.5rem] text-blue-500 text-center">Cultural Groups</div>
                        <p>Without forgetting Culture, we have space for cultural groups, here, cultural groups can notify their existence and by so doing, gain more members and partners.</p>
                    </div>
                </div>
            </div>
            <div className={`relative w-full min-h-[30vw] h-fit bg-[] flex justify-center items-center `}>
                <Image src={section} fill alt="mission background" className="object-cover brightness-50 bg-fixed " />
                <p className="max-w-[90%] max-sm:text-[1rem] w-[800px] text-[2rem] text-white text-center relative">Let&apos;s get connected to each other,lets join as a family and grow beyond boundaries.</p>
            </div>
            <div id="mission" className="py-8 px-4">
                <h3 className="text-[2.5rem] text-blue-500 text-center mb-6">Our mission</h3>
                <div className="flex justify-center items-center max-[805px]:flex-col-reverse">
                    <div>
                        <div data-delay="0" className=" opacity-0 point my-4 py-4 px-2 shadow-comp_lg  bg-white border-r-[10px] border-blue-500  max-w-[500px] rounded-r-lg rounded-l-sm" >
                            <h3 className="text-blue-500 text-[2rem]">Connect us</h3>
                            <p>We want to connect our people across the Bakwere land and make it possible for our brothers and sisters to have access to all resources available for them.</p>
                        </div>
                        <div data-delay="100" className=" opacity-0 point my-4 py-4 px-2 shadow-comp_lg  bg-white border-r-[10px] border-red-500  max-w-[500px] rounded-r-lg rounded-l-sm" >
                            <h3 className="text-blue-500 text-[2rem]">Networking</h3>
                            <p>among our priorities is the ability of our users to network among them selves and create new alliances for our social and economic growth.</p>
                        </div>
                        <div data-delay="200" className=" opacity-0 point my-4 py-4 px-2 shadow-comp_lg  bg-white border-r-[10px] border-yellow-500  max-w-[500px] rounded-r-lg rounded-l-sm" >
                            <h3 className="text-blue-500 text-[2rem]">Cultural awareness</h3>
                            <p>In addition to the cultural groups that allow for the representations of our divers cultural groups in the platform, Litumba is also going to have a catalog where a lot will be made available about the Bakwerian culture and history.</p>
                        </div>
                        <div data-delay="300" className=" opacity-0 point my-4 py-4 px-2 shadow-comp_lg  bg-white border-r-[10px] border-green-500  max-w-[500px] rounded-r-lg rounded-l-sm" >
                            <h3 className="text-blue-500 text-[2rem]">Real estate </h3>
                            <p>At Litumba we also want to promote the acquisition of real estate properties by the Bakwerians in order to give more land power to the Bakwerian people</p>
                        </div>
                    </div>
                    <Image src={mission} width={468.2} height={704.75} alt="mission img" className="ml-[50px] w-[368.2px] h-[504.2px] object-cover object-center max-[805px]:w-[90vw] max-[805px]:h-[40vw] max-[805px]:ml-0 max-[805px]:mb-6" />
                </div>
            </div>
            <div className="h-[200px] bg-gray-900 py-8 flex flex-col justify-between items-center">
                <button onClick={openSignUp} className="px-[50px] py-[10px] max-[689px]:py-[5px] max-[689px]:px-[20px] rounded-lg  bg-blue-500  ring-2 ring-blue-500 w-fit text-white text-[1.8rem]">Join us</button>
                <p className="text-sm text-gray-200">@copy write - Litumba v1.0.0</p>
            </div>

            <div>
                {auth === "signUp" && <SignUp closeAuth={closeAuth} />}
                {auth === "logIn" && <Login closeAuth={closeAuth} />}
            </div>
        </div>
    );
}

Home.getLayout = function getLayout(page: any) {
    return page
}