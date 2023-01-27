import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import ConversationsModel from "../../../database/ConversationsModel";
import MessagesModel from "../../../database/MessagesModel";
import ServerSocket, { NextApiResponseWithSocket } from "../../../socket.io/ServerSocket";

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(200).send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.post(async (req: NextApiRequest, res: NextApiResponseWithSocket) => {
	const serverSocket = new ServerSocket(res);
	const conversationModel = new ConversationsModel();
	const messageModel = new MessagesModel();
	const conversationId = await getConversationId();
	const message = await messageModel.create({
		authorId: req.body.userId,
		receiverId: req.body.peerId,
		conversationId: conversationId,
		text: req.body.text,
	});
	const conversation = await conversationModel.getOne(req.body.userId, req.body.peerId);

	serverSocket.sendEvent(req.body.peerId, "message", req.body.userId);
	res.status(200).json(conversation);

	async function getConversationId() {
		const existingConversation = await conversationModel.getOne(req.body.userId, req.body.peerId);
		let newConversation;
		if (!existingConversation) {
			newConversation = await conversationModel.create({
				usersIds: [req.body.userId, req.body.peerId],
			});
		}

		return existingConversation?.id || newConversation?.id || "";
	}
});

export default apiRoutes;
