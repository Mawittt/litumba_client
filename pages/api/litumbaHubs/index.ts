import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import LitumbaHubsModel from "../../../database/LitumbaHubsModel";
import ServicesModel from "../../../database/ServicesModel";

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const litumbaHubModel = new LitumbaHubsModel();
	const search = getSearch();
	const filters = getFilters();
	const cursor = getCursor();
	const span = 4;
	const skip = getSkip();
	const litumbaHubs = await litumbaHubModel.getMany(search, filters, skip, span, ["authorBusiness", "authorUser"]);
	const count = await litumbaHubModel.getCount(search, filters);
	const isMore = getIsMore();

	res.status(200).json({ litumbaHubs, count, isMore, span });

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
		return parseInt(req.query.cursor?.toString() || "0");
	}
	function getSkip() {
		return cursor * span;
	}
	function getIsMore() {
		return count > span + skip;
	}
});

export default apiRoutes;
