import Loader from "../../assets/Loader"
import Button from "../../components/Button/Button"
import Notification from "../../components/Notification/Notification"
import useNotifications from "../../pageUtils/useNotifications"



export default function Notifications() {

    const { notifications, more, isSuccess } = useNotifications()

    return (
        <div className="flex flex-col gap-2 px-2 py-4">
            {!isSuccess ? <div className="mt-6 flex flex-col items-center"><Loader /><p className="mt-2">Loading Notifications</p></div> : notifications.map(notification => <Notification key={notification._id} {...notification} />)}
        </div>
    )
}