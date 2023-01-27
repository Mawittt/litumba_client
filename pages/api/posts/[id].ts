import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { getIncludeObject } from "../../../database/helpers";
import PostModel from "../../../database/PostsModel";

const apiRoute = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).json({ error: `method ${req.method} is not allowed` });
	},
});

apiRoute.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const id = req.query.id?.toString() || "";
	const postModel = new PostModel();
	const post = await postModel.getOne(id, [
		{ field: "comments", includes: ["author"], orderBy: { field: "createdAt", value: "desc" } },
		"authorBusiness",
		"authorUser",
	]);
	res.status(200).json(post);
});

export default apiRoute;

export const config = {
	api: {
		bodyParser: true,
	},
};
