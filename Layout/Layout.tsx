import { AppProps } from "next/app";



export default function Layout({Component} : AppProps){

    return (
        <div>
            this is the top of my layout
            <Component />
        </div>
    )
}