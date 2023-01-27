import { NextApiResponse } from "next";
import { Server, Socket } from "socket.io";
import type { Server as HTTPServer } from "http";
import type { Socket as NetSocket } from "net";
import type { Server as IOServer } from "socket.io";
import { prisma } from "../database/prismaClient";
import UserModel from "../database/UserModel";

interface SocketServer extends HTTPServer {
	io?: IOServer | undefined;
}

interface SocketWithIO extends NetSocket {
	server: SocketServer;
}

export interface NextApiResponseWithSocket extends NextApiResponse {
	socket: SocketWithIO;
}

const userModel = new UserModel();

export default class ServerSocket {
	io: IOServer | undefined;
	constructor(res: NextApiResponseWithSocket, initializeSocket: boolean = false) {
		if (!initializeSocket) {
			this.io = res.socket.server.io;
			return;
		}
		if (res.socket?.server?.io) {
			this.io = res.socket.server.io;
			return;
		}
		this.io = new Server(res.socket.server);
		res.socket.server.io = this.io;
		this.io.on("connection", (socket: Socket) => {
			const socketInstance = socket as unknown as Socket & { userId: string };
			console.log("user connected : " + socket.id);

			socket.on("set-user-socket-id", async (userId: string) => {
				await userModel.update(userId, { socketId: socket.id });
				socketInstance.userId = userId;
			});
			socket.on("disconnect", async () => {
				console.log("user disconnected");
				await userModel.update(socketInstance.userId, { socketId: "" });
			});
		});

		return;
	}

	async sendEvent(userId: string, type: string, data?: any) {
		const socketId = await getSocketId(userId);
		this.io?.to(socketId).emit(type, data);

		async function getSocketId(userId: string): Promise<string> {
			const user = await userModel.getOne(userId);
			return user?.socketId || "";
		}
	}
}
