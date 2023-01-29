import { Users } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { isGeneratorFunction } from "util/types";
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
	const user = await userModel.getOne(userId, [
		{ field: "businesses", includes: ["_count"] },
		"services",
		"jobs",
		"followers",
		"products",
		"notifications",
	]);
	res.status(200).json(user);

	function getId() {
		return req.query.id?.toString() || "";
	}
});

apiRoutes.post(async (req: NextApiRequest & { media: { profileImage?: string; coverImage?: string } }, res: NextApiResponse) => {
	const userModel = new UserModel();
	const userId = getId();
	await userModel.update(userId, getValidUserObject());

	res.status(200).json(true);

	function getValidUserObject() {
		return {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			country: req.body.country,
			city: req.body.city,
			description: req.body.description,
			profession: req.body.profession,
			phone: req.body.phone,
			email: req.body.email,
			privacy: {
				emailOnProfile: getEmailOnProfile(),
				phoneOnProfile: getPhoneOnProfile(),
			},
			coverImage: getCoverImage(),
			profileImage: getProfileImage(),
		};
	}
	function getEmailOnProfile() {
		if (req.body.emailOnProfile === "true") return true;
		return false;
	}
	function getPhoneOnProfile() {
		if (req.body.phoneOnProfile == "true") return true;
		return false;
	}
	function getCoverImage() {
		if (req.media.coverImage) return { url: req.media.coverImage };
		return { url: req.body.coverImage };
	}
	function getProfileImage() {
		if (req.media.profileImage) return { url: req.media.profileImage };
		return { url: req.body.profileImage };
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
