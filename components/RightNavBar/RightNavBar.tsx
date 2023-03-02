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
        <div className="flex flex-col gap-[30px] my-6">
            {!isSuccess ? <div className="flex flex-col items-center mt-6 w-[300px]">
                <Loader />
                <p className="mt-2">Loading information</p>
            </div> : <>
                <ProfilePreview  {...profilePreview} />
                {!!businesses.length && <MyBusinesses businesses={businesses} />}
                {!!jobs.length && <MyJobs jobs={jobs} />}
                {!!services.length && <MyServices services={services} />}
                {!!products.length && <MyProducts products={products} />}
            </>}
        </div>
    )
}