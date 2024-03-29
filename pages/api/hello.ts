import axios from "axios";
import next, { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { prisma } from "../../database/prismaClient";
import UserModel from "../../database/UserModel";
import { storageEngine } from "../../storage/storage";
import { addMediaToRequestObject } from "../../utils/fn";

const apiRoute = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).json({ error: `Method ${req.method} is not allowed` });
	},
});

apiRoute.use(storageEngine());
apiRoute.use(addMediaToRequestObject);

apiRoute.post((req: NextApiRequest & { files: object; images: object }, res: NextApiResponse) => {
	res.status(200).json({ data: req.images });
});
apiRoute.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const user = await axios.get("https://google.com");
	res.status(200).json(user.data);
});

export default apiRoute;

export const config = {
	api: {
		bodyParser: false,
	},
};
