import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import JobsModel from "../../../database/JobsModel";

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.post(async (req: NextApiRequest, res: NextApiResponse) => {
	const jobModel = new JobsModel();
	await jobModel.create({
		authorUserId: req.body.authorUserId,
		authorBusinessId: req.body.authorBusinessId,
		title: req.body.title,
		description: req.body.description,
		pricing: req.body.price,
		urgency: req.body.urgency,
		niche: req.body.niche,
		expertise: req.body.expertise,
		schedule: req.body.schedule,
		country: req.body.country,
		city: req.body.city,
	});

	res.status(200).send(true);
});

apiRoutes.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const search = getSearchQuery();
	const cursor = getCursor();
	const span = 4;
	const skip = getSkip();
	const filters = getFilters();
	const jobModel = new JobsModel();
	const jobs = await jobModel.getMany(search, filters, skip, span, ["authorBusiness", "authorUser"]);
	const count = await jobModel.getCount(search, filters);
	const isMore = getIsMore();

	res.status(200).json({ jobs, count, isMore, span });

	function getSearchQuery() {
		return req.query.search?.toString() || "";
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
	function getCursor() {
		if (typeof req.query.cursor !== "string") return 0;
		return parseInt(req.query.cursor);
	}
	function getIsMore() {
		return count > skip + span;
	}
});
export default apiRoutes;
