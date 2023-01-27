import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import ServicesModel from "../../../database/ServicesModel";

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const serviceModel = new ServicesModel();
	const serviceId = getServiceId();
	const service = await serviceModel.getOne(serviceId, [
		{ field: "authorBusiness", includes: ["author"] },
		"authorUser",
		"caseStudies",
		{ field: "reviews", includes: ["author"] },
	]);
	res.status(200).json(service);

	function getServiceId() {
		return req.query.id?.toString() || "";
	}
});

apiRoutes.patch(async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.body.price) req.body.price = parseInt(req.body.price);
	const serviceModel = new ServicesModel();
	const serviceId = getId();
	await serviceModel.update(serviceId, req.body);
	res.status(200).json({ body: req.body });

	function getId() {
		return req.query.id?.toString() || "";
	}
});

export default apiRoutes;
