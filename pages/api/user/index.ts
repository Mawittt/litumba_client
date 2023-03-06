import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import UserModel from "../../../database/UserModel";
import { storageEngine } from "../../../storage/storage";
import { addMediaToRequestObject } from "../../../utils/fn";
import jwt from "jsonwebtoken";
import { Users } from "@prisma/client";

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.use(storageEngine());
apiRoutes.use(addMediaToRequestObject);

apiRoutes.post(async (req: NextApiRequest & { media: { profileImage: string; coverImage: string } }, res: NextApiResponse) => {
	const userModel = new UserModel();
	const existentUser = await userModel.getOneByEmail(req.body.email);
	const token = jwt.sign({ email: req.body.email }, process.env.NEXTAUTH_SECRET || "");
	let userId: string = "";

	if (!existentUser) {
		if (!req.body.firstName) {
			res.status(400).send("sorry you need to create an account");
			return;
		}
		await create_user_and_set_user_id();
	} else {
		await set_new_token_and_set_user_id(existentUser);
	}

	res.status(200).json({ token, userId });

	async function create_user_and_set_user_id() {
		const user = await userModel.create({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			profileImage: { url: req.media.profileImage },
			coverImage: { url: req.media.coverImage },
			country: req.body.country,
			city: req.body.city,
			profession: req.body.profession,
			phone: req.body.phone || "",
			email: req.body.email,
			password: req.body.password || "",
			jwtToken: [token],
			description: req.body.description,
			online: false,
			privacy: {
				emailOnProfile: true,
				phoneOnProfile: true,
			},
		});
		userId = user.id;
	}
	async function set_new_token_and_set_user_id(existentUser: Users) {
		const user = await userModel.update(existentUser.id, {
			jwtToken: [token],
		});
		userId = user.id;
	}
});

export default apiRoutes;

export const config = {
	api: {
		bodyParser: false,
	},
};
