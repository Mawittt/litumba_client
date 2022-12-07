import MyBusinesses from "../MyBusinesses/MyBusinesses";
import MyJobs from "../MyJobs/MyJobs";
import MyProducts from "../MyProducts/MyProducts";
import MyServices from "../MyServices/MyServices";
import ProfilePreview from "../ProfilePreview/ProfilePreview";


export default function RightNavBar(){

    return(
        <div className="flex flex-col gap-[30px] pt-2 w-full">
            <ProfilePreview />
            <MyBusinesses />
            <MyJobs />
            <MyServices />
            <MyProducts />
        </div>
    )
}