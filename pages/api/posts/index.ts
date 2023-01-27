import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import PostModel from "../../../database/PostsModel";
import { storageEngine } from "../../../storage/storage";
import { addMediaToRequestObject } from "../../../utils/fn";

const apiRoute = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).json({ error: `method ${req.method} is not allowed` });
	},
});

apiRoute.use(storageEngine());
apiRoute.use(addMediaToRequestObject);

apiRoute.post(async (req: NextApiRequest & { media: { [propName: string]: string }; files: object }, res: NextApiResponse) => {
	const postModel = new PostModel();
	await postModel.create({
		authorUserId: req.body.userId,
		text: req.body.postText || "",
		image: { url: req.media.postImage || "" },
		video: { url: req.media.postVideo || "" },
	});
	res.status(200).json({ data: { body: req.body, media: req.media } });
});

apiRoute.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const postModel = new PostModel();
	const currentCursor: number = getCurrentCursor();
	const span = getSpan() || 2;
	const skip = getSkip() || 0;
	const posts = await postModel.getMany(skip, span, ["authorUser", "authorBusiness", "likes"]);
	const count = await postModel.getCount();
	const isMore = getIsMore();

	res.status(200).json({ posts, nextCursor: currentCursor + 1, isMore });

	function getCurrentCursor() {
		if (typeof req.query.cursor !== "string") return 0;
		return parseInt(req.query.cursor);
	}
	function getSpan() {
		if (typeof req.query.span !== "string") return null;
		return parseInt(req.query.span);
	}
	function getSkip() {
		if (typeof req.query.cursor !== "string") return 0;
		const cursor = parseInt(req.query.cursor);
		return span * cursor;
	}
	function getIsMore() {
		return Boolean(count > span + skip);
	}
});

export default apiRoute;

export const config = {
	api: {
		bodyParser: false,
	},
};
