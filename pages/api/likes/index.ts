import { Posts } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import LikesModel from "../../../database/LikesModel";
import NotificationsModel from "../../../database/NotificationsModel";
import PostModel from "../../../database/PostsModel";
import ServerSocket, { NextApiResponseWithSocket } from "../../../socket.io/ServerSocket";

const apiRoute = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).send(`Method ${req.method} is not allowed`);
	},
});

apiRoute.post(async (req: NextApiRequest, res: NextApiResponseWithSocket) => {
	if (!isLikeDataComplete()) throw new Error("the sent is not complete");
	const likeModel = new LikesModel();
	const postModel = new PostModel();
	const notificationModel = new NotificationsModel();
	const like = await likeModel.exists(req.body.authorId, req.body.postId);
	const post = (await postModel.getOne(req.body.postId, ["authorBusiness"])) as unknown as Posts & { authorBusiness: { authorId: string } };
	const serverSocket = new ServerSocket(res);

	if (like) {
		await likeModel.delete(req.body.authorId, req.body.postId);
		res.status(200).send(false);
		await deleteNotification();
	} else {
		await likeModel.create({
			authorId: req.body.authorId,
			postId: req.body.postId,
		});
		res.status(200).send(true);
		await createNotification();
	}

	serverSocket.sendEvent(post.authorUserId || post.authorBusiness.authorId || "", "like", "some data");

	function isLikeDataComplete() {
		if (!req.body.authorId) return false;
		if (!req.body.postId) return false;

		return true;
	}
	async function deleteNotification() {
		notificationModel.deleteLikeNotification(post?.authorBusiness?.authorId || post?.authorUserId || "", req.body.authorId, req.body.postId);
	}
	async function createNotification() {
		notificationModel.createLikeNotification({
			receiverId: post?.authorBusiness?.authorId || post?.authorUserId || "",
			triggerId: req.body.authorId,
			seen: false,
			type: "like",
			postId: req.body.postId,
		});
	}
});

export default apiRoute;
