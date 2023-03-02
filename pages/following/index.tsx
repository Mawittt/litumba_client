import Loader from "../../assets/Loader"
import Button from "../../components/Button/Button"
import Follow from "../../components/Follow/Follow"
import useFollowed from "../../pageUtils/useFollowed"




export default function Followers() {
    const { followers, isSuccess } = useFollowed()
    return (
        <div className=" px-2 flex flex-col gap-2 mx-4 my-6 ">
            {!isSuccess ? <div className="mt-6 flex flex-col items-center"><Loader /><p className="mt-2">Loading follows</p></div> : followers.map(follower => <Follow key={follower._id} {...follower} />)}
            {isSuccess && !followers.length && <div className="text-center py-6 bg-white shadow-comp_lg rounded-lg font-bold text-lg">You have not followed anyone yet</div>}
        </div>
    )
}