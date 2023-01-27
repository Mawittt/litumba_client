import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import BusinessesModel from "../../../database/BusinessesModel";
import { storageEngine } from "../../../storage/storage";
import { addMediaToRequestObject } from "../../../utils/fn";

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.use(storageEngine());
apiRoutes.use(addMediaToRequestObject);

apiRoutes.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const businessId = getId();
	const businessModel = new BusinessesModel();
	const business = await businessModel.getOne(businessId, ["jobs", "products", "products", "services", "realEstates", "author"]);

	res.status(200).json(business);

	function getId() {
		return req.query.id?.toString() || "";
	}
});

apiRoutes.patch(async (req: NextApiRequest & { media: { coverImage?: string; logo?: string } }, res: NextApiResponse) => {
	const businessModel = new BusinessesModel();
	const businessId = getId();
	arrangeImages();

	await businessModel.update(businessId, req.body);

	res.status(200).json({ businessId, body: req.body, media: req.media });

	function getId() {
		return req.query.id?.toString() || "";
	}
	function arrangeImages() {
		if (req.media.coverImage) {
			req.body.coverImage = { url: req.media.coverImage };
		} else {
			req.body.coverImage = { url: req.body.coverImage };
		}
		if (req.media.logo) {
			req.body.logo = { url: req.media.logo };
		} else {
			req.body.logo = { url: req.body.logo };
		}
	}
});

export default apiRoutes;

export const config = {
	api: {
		bodyParser: false,
	},
};
