import { url } from "inspector";
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

apiRoutes.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const productModel = new ProductsModel();
	const productId = getId();
	const product = await productModel.getOne(productId, [{ field: "authorBusiness", includes: ["author"] }, "authorUser"]);
	const authorId = getAuthorId();
	const otherProducts = await productModel.getFromSameAuthor(authorId, productId);

	res.status(200).json({ product, otherProducts });

	function getId() {
		return req.query.id?.toString() || "";
	}
	function getAuthorId() {
		return product?.authorBusinessId || product?.authorUserId || "";
	}
});

apiRoutes.patch(async (req: NextApiRequest & { media: { previews: string[] | string } }, res: NextApiResponse) => {
	setPreviews();
	setNumberFields();
	const productModel = new ProductsModel();
	const productId = getId();
	await productModel.update(productId, req.body);

	res.status(200).send(true);

	function setPreviews() {
		req.body.previews = [...getImages(req.body.previews), ...getImages(req.media.previews)];

		function getImages(images: string | string[]): { url: string }[] {
			if (!images) return [];
			if (typeof images === "string") return [{ url: images }];
			return images.map((image) => {
				return { url: image };
			});
		}
	}
	function getId() {
		return req.query.id?.toString() || "";
	}
	function setNumberFields() {
		if (req.body.price) req.body.price = parseInt(req.body.price);
		if (req.body.quantity) req.body.quantity = parseInt(req.body.quantity);
	}
});

export default apiRoutes;

export const config = {
	api: {
		bodyParser: false,
	},
};
