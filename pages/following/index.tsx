import Button from "../../components/Button/Button"
import Follow from "../../components/Follow/Follow"
import useFollowed from "../../pageUtils/useFollowed"




export default function Followers(){
    const {followers , more} = useFollowed()
    return(
        <div className="py-4 px-2 flex flex-col gap-2">
            {followers.map(follower=> <Follow key={follower._id} {...follower} />)}
            {more &&  <Button label="more" full />}
        </div>
    )
}