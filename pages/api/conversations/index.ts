import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import ConversationsModel from "../../../database/ConversationsModel";

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.post(async (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json(req.body);
});

apiRoutes.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const conversationsModel = new ConversationsModel();
	const userId = getId();
	const conversations = await conversationsModel.getMany(userId);
	res.status(200).json(conversations);

	function getId() {
		return req.query.userId?.toString() || "";
	}
});

export default apiRoutes;
