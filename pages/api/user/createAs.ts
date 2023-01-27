import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import UserModel from "../../../database/UserModel";

interface Author {
	avatar: string;
	name: string;
	id: string;
	isBusiness: boolean;
}

interface Business {
	logo: { url: string };
	name: string;
	id: string;
}

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const userModel = new UserModel();
	const userId = getId();
	const user = await userModel.getOne(userId, ["businesses"]);
	if (!user) throw new Error("no such user");

	const authors: Author[] = [
		{
			avatar: user.profileImage.url,
			name: user.firstName + " " + user.lastName,
			id: user.id,
			isBusiness: false,
		},
	];

	user.businesses.map((business) => {
		authors.push({
			avatar: business.logo.url,
			name: business.name,
			id: business.id,
			isBusiness: true,
		});
	});

	res.status(200).json(authors);

	function getId() {
		return req.query.id?.toString() || "";
	}
});

export default apiRoutes;
