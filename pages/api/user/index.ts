import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { storageEngine } from "../../../storage/storage";
import { addMediaToRequestObject } from "../../../utils/fn";

const apiRoutes = nextConnect({
	onNoMatch(req: NextApiRequest, res: NextApiResponse) {
		res.status(405).send(`Method ${req.method} is not allowed`);
	},
});

apiRoutes.use(storageEngine());
apiRoutes.use(addMediaToRequestObject);

export default apiRoutes;

export const config = {
	api: {
		bodyParser: false,
	},
};
