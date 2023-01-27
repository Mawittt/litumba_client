import Button from "../../components/Button/Button"
import Follow from "../../components/Follow/Follow"
import useFollowers from "../../pageUtils/useFollowers"




export default function Followers() {
    const { followers } = useFollowers()
    return (
        <div className="py-4 px-2 flex flex-col gap-2">
            {followers.map(follower => <Follow key={follower._id} {...follower} />)}
        </div>
    )
}