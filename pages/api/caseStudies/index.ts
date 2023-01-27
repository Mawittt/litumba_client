import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { NextRequest } from "next/server";
import CaseStudiesModel from "../../../database/CaseStudiesModel";
import { storageEngine } from "../../../storage/storage";
import { addMediaToRequestObject } from "../../../utils/fn";

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.use(storageEngine());
apiRoutes.use(addMediaToRequestObject);

apiRoutes.post(async (req: NextApiRequest & { media: { preview: string } }, res: NextApiResponse) => {
	if (req.media.preview) req.body.preview = { url: req.media.preview };
	const caseStudy = new CaseStudiesModel();
	await caseStudy.create({
		serviceId: req.body.serviceId,
		title: req.body.title,
		description: req.body.description,
		preview: req.body.preview,
	});
	res.status(200).json(req.body);
});

apiRoutes.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const caseStudyModel = new CaseStudiesModel();
	const caseId = getCaseId();
	const caseStudy = await caseStudyModel.getOne(caseId);
	res.status(200).json(caseStudy);

	function getCaseId() {
		return req.query.id?.toString() || "";
	}
});

apiRoutes.patch(async (req: NextApiRequest & { media: { preview: { url: string } } }, res: NextApiResponse) => {
	if (req.media.preview) {
		req.body.preview = { url: req.media.preview };
	} else {
		req.body.preview = { url: req.body.preview };
	}

	const caseStudyModel = new CaseStudiesModel();
	const caseId = getId();
	await caseStudyModel.update(caseId, req.body);
	res.status(200).json(true);

	function getId() {
		return req.query.id?.toString() || "";
	}
});

export default apiRoutes;

export const config = {
	api: {
		bodyParser: false,
	},
};
