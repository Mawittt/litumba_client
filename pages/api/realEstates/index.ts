import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import RealEstatesModel from "../../../database/RealEstateModel";
import { storageEngine } from "../../../storage/storage";
import { addMediaToRequestObject } from "../../../utils/fn";

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.use(storageEngine());
apiRoutes.use(addMediaToRequestObject);

apiRoutes.post(async (req: NextApiRequest & { media: { previews: string | string[] } }, res: NextApiResponse) => {
	setImages();
	handleNumberInputs();
	const realEstateModel = new RealEstatesModel();
	await realEstateModel.create(req.body);

	res.status(200).json(true);

	function setImages() {
		if (typeof req.media.previews === "string") {
			req.body.previews = [{ url: req.media.previews }];
		} else {
			req.body.previews = req.media.previews.map((preview) => {
				return { url: preview };
			});
		}
	}
	function handleNumberInputs() {
		req.body.price = parseInt(req.body.price);
	}
});

apiRoutes.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const realEstateModel = new RealEstatesModel();
	const filter = getFilters();
	const search = getSearch();
	const cursor = getCursor();
	const span = 4;
	const skip = getSkip();
	const realEstates = await realEstateModel.getMany(search, filter, skip, span, ["authorBusiness", "authorUser"]);
	const count = await realEstateModel.getCount(search, filter);
	const isMore = getIsMore();
	res.status(200).json({ realEstates, count, isMore, span });
	function getSearch() {
		return req.query.search?.toString() || "";
	}
	function getFilters() {
		const filters = { ...req.query };
		delete filters.search;
		delete filters.cursor;
		return filters;
	}
	function getCursor() {
		if (!req.query.cursor) return 0;
		return parseInt(req.query.cursor.toString()) || 0;
	}
	function getSkip() {
		return cursor * span;
	}
	function getIsMore() {
		return count > span + skip;
	}
});

export default apiRoutes;

export const config = {
	api: {
		bodyParser: false,
	},
};
