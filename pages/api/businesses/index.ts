import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import BusinessesModel from "../../../database/BusinessesModel";
import { storageEngine } from "../../../storage/storage";
import { addMediaToRequestObject } from "../../../utils/fn";

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.use(storageEngine());
apiRoutes.use(addMediaToRequestObject);

apiRoutes.post(async (req: NextApiRequest & { media: { logo: string; coverImage: string } }, res: NextApiResponse) => {
	const businessModel = new BusinessesModel();
	await businessModel.create({
		authorId: req.body.authorId,
		logo: { url: req.media.logo },
		coverImage: { url: req.media.coverImage },
		name: req.body.name,
		country: req.body.country,
		city: req.body.city,
		description: req.body.description,
		niche: req.body.niche,
		phone: req.body.phone || "",
		email: req.body.email || "",
		website: req.body.website || "",
	});

	res.status(200).json(true);
});

apiRoutes.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const businessModel = new BusinessesModel();
	const search = getSearchQuery();
	const cursor = getCursor();
	const span = 4;
	const skip = getSkip();
	const filters = getFilters();
	const businesses = await businessModel.getMany(search, filters, skip, span);
	const count = await businessModel.getCount();
	const isMore = getIsMore();
	res.status(200).json({ businesses, count, isMore, span });

	function getSearchQuery() {
		return req.query.search?.toString() || "";
	}
	function getCursor() {
		if (typeof req.query.cursor !== "string") return 0;
		return parseInt(req.query.cursor);
	}
	function getSkip() {
		return cursor * span;
	}
	function getFilters() {
		const filters = { ...req.query };
		delete filters.search;
		delete filters.cursor;
		return filters;
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
