import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import ProductsModel from "../../../database/ProductsModel";
import { storageEngine } from "../../../storage/storage";
import { addMediaToRequestObject } from "../../../utils/fn";

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.use(storageEngine());
apiRoutes.use(addMediaToRequestObject);

apiRoutes.post(async (req: NextApiRequest & { media: { previews: string[] } }, res: NextApiResponse) => {
	const productModel = new ProductsModel();
	await productModel.create({
		previews: getPreviews(),
		name: req.body.name,
		price: parseInt(req.body.price),
		quantity: parseInt(req.body.quantity),
		description: req.body.description,
		niche: req.body.niche,
		brand: req.body.brand,
		country: req.body.country,
		city: req.body.city,
		authorUserId: req.body.authorUserId,
		authorBusinessId: req.body.authorBusinessId,
	});

	res.status(200).json(true);

	function getPreviews() {
		if (typeof req.media.previews === "string") return [{ url: req.media.previews }];
		return req.media.previews.map((preview) => {
			return { url: preview };
		});
	}
});

apiRoutes.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const productModel = new ProductsModel();
	const cursor = getCursor();
	const span = 4;
	const skip = getSkip();
	const search = getSearch();
	const filters = getFilters();
	const products = await productModel.getMany(search, filters, skip, span, ["authorBusiness", "authorUser"]);
	const count = await productModel.getCount(search, filters);
	const isMore = getIsMore();

	res.status(200).json({ products, count, isMore, span });

	function getCursor() {
		if (typeof req.query.cursor !== "string") return 0;
		return parseInt(req.query.cursor);
	}
	function getSkip() {
		return cursor * span;
	}
	function getSearch() {
		return req.query.search?.toString() || "";
	}
	function getFilters() {
		const filters = req.query;
		delete filters.cursor;
		delete filters.search;
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
