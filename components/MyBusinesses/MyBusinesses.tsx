import MyBusiness from "../MyBusiness/MyBusiness";
import useMyBusinesses from "./useMyBusinesses";





export default function MyBusinesses() {
    const { businesses } = useMyBusinesses()
    return (
        <div className="w-full shadow-comp_lg h-fit p-2 rounded-lg">
            <h3 className="font-bold">My businesses</h3>
            {businesses.map((business, index) => <MyBusiness {...business} key={index} />)}
        </div>
    )
} 