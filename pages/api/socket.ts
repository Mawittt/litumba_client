import { NextApiRequest } from "next";
import ServerSocket, { NextApiResponseWithSocket } from "../../socket.io/ServerSocket";

export default function SocketHandler(req: NextApiRequest, res: NextApiResponseWithSocket) {
	new ServerSocket(res, true);
	res.end();
}
