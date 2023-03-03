import { QueryClient } from "react-query";
import { io, Socket } from "socket.io-client";

export default class ClientSocket {
	socket: Socket;
	userId: string;
	queryClient: QueryClient | undefined;

	constructor() {
		fetch("http://localhost:3000/api/socket");

		this.socket = io("/", { transports: ["websocket", "polling"], autoConnect: false });
		this.userId = "";

		this.socket.on("connect", () => {
			this.socket.emit("set-user-socket-id", this.userId);
			console.log("connected " + this.socket.id);

			this.socket.on("like", () => {
				this.queryClient?.invalidateQueries("user");
				console.log("like event received");
			});
			this.socket.on("comment", () => {
				this.queryClient?.invalidateQueries("user");
			});
			this.socket.on("follow", () => {
				this.queryClient?.invalidateQueries("user");
			});
			this.socket.on("review", () => {
				this.queryClient?.invalidateQueries("user");
			});
			this.socket.on("message", (peerId) => {
				this.queryClient?.invalidateQueries("messages/newMessages");
				this.queryClient?.invalidateQueries(["conversations", { peerId }]);
			});
		});
	}

	connect(userId: string, queryClient: QueryClient) {
		if (this.socket.connected) this.socket.disconnect();
		this.userId = userId;
		this.queryClient = queryClient;
		this.socket.connect();
	}
}
