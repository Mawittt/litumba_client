import { MyServiceProps } from "../../types/types"
import Button from "../Button/Button"
import MyService from "../MyService/MyService"
import useMyServices from "./useMyServices"




export default function MyServices(props: { services: MyServiceProps[] }) {
    const { services, more } = useMyServices(props)
    return (
        <div className="w-full shadow-comp_lg h-fit p-2 rounded-lg">
            <h3 className="font-bold">My Services</h3>
            {services.map((job, index) => <MyService {...job} key={index} />)}
        </div>
    )
}