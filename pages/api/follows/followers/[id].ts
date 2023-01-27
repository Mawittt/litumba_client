import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import FollowsModel from "../../../../database/FollowsModel";

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const followsModel = new FollowsModel();
	const userId = getId();
	const followers = await followsModel.getFollowers(userId);

	res.status(200).json(followers);

	function getId() {
		return req.query.id?.toString() || "";
	}
});

export default apiRoutes;
