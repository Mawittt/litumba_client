import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import ConversationsModel from "../../../database/ConversationsModel";
import MessagesModel from "../../../database/MessagesModel";
import UserModel from "../../../database/UserModel";

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const userModel = new UserModel();
	const conversationModel = new ConversationsModel();
	const peerId = getPeerId();
	const userId = getUserId();
	const peer = await userModel.getOne(peerId);
	const conversation = await conversationModel.getOne(userId, peerId);
	await updateMessagesSeenStatus();

	res.status(200).json({ peer, conversation });

	function getPeerId() {
		return req.query.peerId?.toString() || "";
	}
	function getUserId() {
		return req.query.id?.toString() || "";
	}
	async function updateMessagesSeenStatus() {
		if (!conversation) return;
		const messagesModel = new MessagesModel();
		const messagesIds = conversation.messages.map((message) => message.id);
		await messagesModel.updateMessagesSeenStatus(messagesIds);
	}
});

export default apiRoutes;
