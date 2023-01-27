import { Posts } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import CommentsModel from "../../../database/CommentsModel";
import NotificationsModel from "../../../database/NotificationsModel";
import PostModel from "../../../database/PostsModel";
import ServerSocket, { NextApiResponseWithSocket } from "../../../socket.io/ServerSocket";

const apiRoute = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).send(`Method ${req.method} is not allowed`);
	},
});

apiRoute.post(async (req: NextApiRequest, res: NextApiResponseWithSocket) => {
	const serverSocket = new ServerSocket(res);
	const commentModel = new CommentsModel();
	const postModel = new PostModel();
	const notificationModel = new NotificationsModel();
	const post = (await postModel.getOne(req.body.postId, ["authorBusiness"])) as unknown as Posts & { authorBusiness: { authorId: string } };
	if (!commentIsComplete()) throw new Error("comment data is not complete");
	await commentModel.create({
		postId: req.body.postId,
		authorId: req.body.authorId,
		text: req.body.text,
	});
	res.status(200).send(true);
	createNotification();

	function commentIsComplete() {
		if (!req.body.postId) return false;
		if (!req.body.authorId) return false;
		if (!req.body.text) return false;
		return true;
	}
	function createNotification() {
		notificationModel.createCommentNotification({
			receiverId: post?.authorBusiness?.authorId || post?.authorUserId || "",
			triggerId: req.body.authorId,
			seen: false,
			type: "comment",
			postId: req.body.postId,
		});
		serverSocket.sendEvent(post.authorUserId || post.authorBusiness.authorId, "comment");
	}
});

export default apiRoute;
