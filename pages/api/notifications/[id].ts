import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import NotificationsModel from "../../../database/NotificationsModel";

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const notificationModel = new NotificationsModel();
	const userId = getId();
	const notifications = await notificationModel.getMany(userId);
	res.status(200).json(notifications);

	updateUnseenNotifications();

	function getId() {
		return req.query.id?.toString() || "";
	}
	function updateUnseenNotifications() {
		const notificationsIds = notifications
			.filter((notification) => !notification.seen)
			.map((notification) => {
				return notification.id;
			});
		notificationModel.update(notificationsIds, { seen: true });
	}
});

export default apiRoutes;
