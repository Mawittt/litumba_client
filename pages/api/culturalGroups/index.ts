import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import CulturalGroupsModel from "../../../database/CulturalGroup";
import { storageEngine } from "../../../storage/storage";
import { addMediaToRequestObject } from "../../../utils/fn";

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.use(storageEngine());
apiRoutes.use(addMediaToRequestObject);

apiRoutes.post(async (req: NextApiRequest & { media: { cover: string; logo: string } }, res: NextApiResponse) => {
	req.body.cover = { url: req.media.cover };
	req.body.logo = { url: req.media.logo };
	req.body.members = parseInt(req.body.members);
	const culturalGroupModel = new CulturalGroupsModel();
	await culturalGroupModel.create(req.body);
	res.status(200).json(req.body);
});

apiRoutes.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const culturalGroupModel = new CulturalGroupsModel();
	const search = req.query.search?.toString() || "";
	const cursor = parseInt(req.query.cursor?.toString() || "0");
	const span = 8;
	const skip = getSkip();
	const culturalGroups = await culturalGroupModel.getMany(search, skip, span);
	const count = await culturalGroupModel.getCount(search);
	const isMore = getIsMore();

	res.status(200).json({ culturalGroups, count, isMore, span });

	function getSkip() {
		return span * cursor;
	}
	function getIsMore() {
		return count > skip + span;
	}
});

export default apiRoutes;

export const config = {
	api: {
		bodyParser: false,
	},
};
