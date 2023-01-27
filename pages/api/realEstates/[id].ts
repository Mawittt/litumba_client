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

apiRoutes.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const realEstateModel = new RealEstatesModel();
	const realEstateId = getId();
	const realEstate = await realEstateModel.getOne(realEstateId, [{ field: "authorBusiness", includes: ["author"] }, "authorUser"]);
	const authorId = getAuthorId();
	const otherEstates = await realEstateModel.getOtherRealEstates(realEstateId, authorId);

	res.status(200).json({ realEstate, otherEstates });

	function getId() {
		return req.query.id?.toString() || "";
	}
	function getAuthorId() {
		return realEstate?.authorBusinessId || realEstate?.authorUserId || "";
	}
});

apiRoutes.patch(async (req: NextApiRequest & { media: { previews: string | string[] } }, res: NextApiResponse) => {
	setPreviews();
	handleNumberInputs();
	const realEstateModel = new RealEstatesModel();
	const realEstateId = getId();
	await realEstateModel.update(realEstateId, req.body);
	res.status(200).json(true);

	function setPreviews() {
		const previews = [];
		if (req.body.previews) {
			if (typeof req.body.previews === "string") {
				previews.push({ url: req.body.previews });
			} else {
				req.body.previews.map((image: string) => {
					previews.push({ url: image });
				});
			}
		}
		if (req.media.previews) {
			if (typeof req.media.previews === "string") {
				previews.push({ url: req.media.previews });
			} else {
				req.media.previews.map((image: string) => {
					previews.push({ url: image });
				});
			}
		}
		req.body.previews = previews;
	}
	function handleNumberInputs() {
		if (req.body.price) req.body.price = parseInt(req.body.price);
	}
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
