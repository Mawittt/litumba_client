import { Services } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import NotificationsModel from "../../../database/NotificationsModel";
import ReviewsModel from "../../../database/reviews";
import ServicesModel from "../../../database/ServicesModel";
import ServerSocket, { NextApiResponseWithSocket } from "../../../socket.io/ServerSocket";

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.post(async (req: NextApiRequest, res: NextApiResponseWithSocket) => {
	const notificationModel = new NotificationsModel();
	const reviewModel = new ReviewsModel();
	const serverSocket = new ServerSocket(res);
	req.body.stars = parseInt(req.body.stars);
	await reviewModel.create(req.body);
	res.status(200).send(true);
	createReviewNotification();

	async function createReviewNotification() {
		const serviceModel = new ServicesModel();
		const service = (await serviceModel.getOne(req.body.serviceId, ["authorBusiness"])) as unknown as Services & {
			authorBusiness: { authorId: string };
		};
		await notificationModel.createReviewNotification({
			receiverId: service?.authorUserId || service.authorBusiness.authorId,
			triggerId: req.body.authorId,
			seen: false,
			serviceId: req.body.serviceId,
			type: "review",
		});
		serverSocket.sendEvent(service.authorUserId || service.authorBusiness.authorId, "review");
	}
});

export default apiRoutes;
