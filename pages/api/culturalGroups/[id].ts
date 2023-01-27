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

apiRoutes.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const culturalGroupModel = new CulturalGroupsModel();
	const culturalGroupId = getId();
	const culturalGroup = await culturalGroupModel.getOne(culturalGroupId);
	res.status(200).json(culturalGroup);

	function getId() {
		return req.query.id?.toString() || "";
	}
});

apiRoutes.patch(async (req: NextApiRequest & { media: { logo: string; cover: string } }, res: NextApiResponse) => {
	setImages();
	handleNumberInputs();
	const culturalGroup = new CulturalGroupsModel();
	const groupId = getId();
	await culturalGroup.update(groupId, req.body);

	res.status(200).json(true);

	function setImages() {
		if (req.media.cover) {
			req.body.cover = { url: req.media.cover };
		} else {
			req.body.cover = { url: req.body.cover };
		}
		if (req.media.logo) {
			req.body.logo = { url: req.media.logo };
		} else {
			req.body.logo = { url: req.body.logo };
		}
	}
	function getId() {
		return req.query.id?.toString() || "";
	}
	function handleNumberInputs() {
		req.body.members = parseInt(req.body.members.toString() || "0");
	}
});

export default apiRoutes;

export const config = {
	api: {
		bodyParser: false,
	},
};
