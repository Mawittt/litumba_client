import { MyBusinessProps } from "../../types/types";
import MyBusiness from "../MyBusiness/MyBusiness";
import useMyBusinesses from "./useMyBusinesses";





export default function MyBusinesses(props: { businesses: MyBusinessProps[] }) {
    const { businesses } = useMyBusinesses(props)
    return (
        <div className="w-full shadow-comp_lg h-fit p-2 rounded-lg bg-white">
            <h3 className="font-bold">My businesses</h3>
            {businesses.map((business, index) => <MyBusiness {...business} key={index} />)}
        </div>
    )
} 