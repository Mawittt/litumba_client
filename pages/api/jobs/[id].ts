import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import JobsModel from "../../../database/JobsModel";

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const jobId = getId();
	const jobModel = new JobsModel();
	const job = await jobModel.getOne(jobId, ["authorUser", { field: "authorBusiness", includes: ["author"] }]);
	res.status(200).json(job);

	function getId() {
		return req.query.id?.toString() || "";
	}
});

apiRoutes.patch(async (req: NextApiRequest, res: NextApiResponse) => {
	const jobModel = new JobsModel();
	const jobId = getId();
	await jobModel.update(jobId, req.body);

	res.status(200).send(true);

	function getId() {
		return req.query.id?.toString() || "";
	}
});

export default apiRoutes;
