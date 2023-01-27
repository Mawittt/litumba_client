import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import MessagesModel from "../../../database/MessagesModel";
import UserModel from "../../../database/UserModel";
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
	const userModel = new UserModel();
	const userId = getId();
	const user = await userModel.getOne(userId, ["businesses", "services", "jobs", "followers", "products", "notifications"]);
	res.status(200).json(user);

	function getId() {
		return req.query.id?.toString() || "";
	}
});

apiRoutes.post(async (req: NextApiRequest & { media: { profileImage?: string; coverImage?: string } }, res: NextApiResponse) => {
	res.status(200).json({ body: req.body, media: req.media, query: req.query });
});

export default apiRoutes;

export const config = {
	api: {
		bodyParser: false,
	},
};
