import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import FollowsModel from "../../../database/FollowsModel";
import NotificationsModel from "../../../database/NotificationsModel";
import ServerSocket, { NextApiResponseWithSocket } from "../../../socket.io/ServerSocket";

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.post(async (req: NextApiRequest, res: NextApiResponseWithSocket) => {
	const followModel = new FollowsModel();
	const notificationModel = new NotificationsModel();
	const followExists = await followModel.exists(req.body.followerId, req.body.followeeId);
	const serverSocket = new ServerSocket(res);

	if (followExists) {
		followModel.delete(req.body.followerId, req.body.followeeId);
		deleteNotification();
		res.status(200).send(false);
	} else {
		followModel.create({
			followeeId: req.body.followeeId,
			followerId: req.body.followerId,
		});
		createNotification();
		res.status(200).send(true);
	}

	serverSocket.sendEvent(req.body.followeeId, "follow");

	async function createNotification() {
		await notificationModel.crateFollowNotification({
			receiverId: req.body.followeeId,
			triggerId: req.body.followerId,
			seen: false,
			type: "follow",
		});
	}
	async function deleteNotification() {
		await notificationModel.deleteFollowNotification(req.body.followeeId, req.body.followerId);
	}
});

export default apiRoutes;
