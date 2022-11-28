import Button from "../../components/Button/Button"
import Notification from "../../components/Notification/Notification"
import useNotifications from "../../pageUtils/useNotifications"



export default function Notifications(){

    const {notifications, more} = useNotifications()

    return(
        <div className="flex flex-col gap-2 px-2 py-4">
            {notifications.map(notification=><Notification key={notification._id} {...notification} />)}
            {more && <Button label="more" full />}
        </div>
    )
}