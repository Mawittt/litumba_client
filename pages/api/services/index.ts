import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import ServicesModel from "../../../database/ServicesModel";

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.post(async (req: NextApiRequest, res: NextApiResponse) => {
	const serviceModel = new ServicesModel();
	await serviceModel.create({
		authorBusinessId: req.body.authorBusinessId,
		authorUserId: req.body.authorUserId,
		name: req.body.name,
		price: parseInt(req.body.price),
		description: req.body.description,
		niche: req.body.niche,
		country: req.body.country,
		city: req.body.city,
		hub: "Regular",
	});
	res.status(200).json({ body: req.body });
});

apiRoutes.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const serviceModel = new ServicesModel();
	const cursor = getCursor();
	const span = 4;
	const skip = getSkip();
	const search = getSearch();
	const filters = getFilters();
	const services = await serviceModel.getMany(search, filters, skip, span, ["authorBusiness", "authorUser"]);
	const count = await serviceModel.getCount(search, filters);
	const isMore = getIsMore();

	res.status(200).json({ services, count, isMore, span });

	function getCursor() {
		if (typeof req.query.cursor !== "string") return 0;
		return parseInt(req.query.cursor);
	}
	function getSkip() {
		return 4 * cursor;
	}
	function getSearch() {
		return req.query.search?.toString() || "";
	}
	function getFilters() {
		delete req.query.search;
		delete req.query.cursor;
		return req.query;
	}
	function getIsMore() {
		return Boolean(count > span + skip);
	}
});

export default apiRoutes;
