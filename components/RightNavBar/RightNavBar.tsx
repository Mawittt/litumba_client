import Loader from "../../assets/Loader";
import MyBusinesses from "../MyBusinesses/MyBusinesses";
import MyJobs from "../MyJobs/MyJobs";
import MyProducts from "../MyProducts/MyProducts";
import MyServices from "../MyServices/MyServices";
import ProfilePreview from "../ProfilePreview/ProfilePreview";
import useRightNavBar from "./useRightNavBar";


export default function RightNavBar() {
    const { profilePreview, isSuccess, businesses, jobs, services, products } = useRightNavBar()
    return (
        <div className="flex bg-white flex-col gap-[30px] pt-2 w-full">
            {!isSuccess ? <div className="flex flex-col items-center mt-6 w-[300px]">
                <Loader />
                <p className="mt-2">Loading information</p>
            </div> : <>
                <ProfilePreview  {...profilePreview} />
                <MyBusinesses businesses={businesses} />
                <MyJobs jobs={jobs} />
                <MyServices services={services} />
                <MyProducts products={products} />
            </>}
        </div>
    )
}