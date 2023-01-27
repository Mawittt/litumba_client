import next, { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
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
	const userModel = new UserModel();
	await userModel.create({
		firstName: "Dorine",
		lastName: "Dozy",
		profileImage: { url: "https://profile-assets.showwcase.com/160x/1658752874812.jpg" },
		coverImage: { url: "image" },
		country: "Cameroon",
		city: "Buea",
		profession: "software Engineer",
		description: "I am a person that loves software engineering and loves to do great things",
		phone: "672205985",
		email: "mawitgad@gmail.com",
		online: true,
		privacy: {
			phoneOnProfile: true,
			emailOnProfile: true,
		},
	});
	res.status(200).send("done");
});

export default apiRoute;

export const config = {
	api: {
		bodyParser: false,
	},
};
