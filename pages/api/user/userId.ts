import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import UserModel from "../../../database/UserModel";
import jwt from "jsonwebtoken";

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const userModel = new UserModel();
	const decodedToken = jwt.verify(req.query.token?.toString() || "", process.env.NEXTAUTH_SECRET || "") as unknown as { email: string };
	const user = await userModel.getOneByEmail(decodedToken.email);
	res.status(200).send(user?.id);
});

export default apiRoutes;
