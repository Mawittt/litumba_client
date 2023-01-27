import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import MessagesModel from "../../../../database/MessagesModel";

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const messagesModel = new MessagesModel();
	const userId = getId();
	const newMessagesCount = await messagesModel.getNewMessagesCount(userId);

	res.status(200).send(newMessagesCount);

	function getId() {
		return req.query.id?.toString() || "";
	}
});

export default apiRoutes;
