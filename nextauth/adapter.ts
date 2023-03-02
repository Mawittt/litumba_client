import { Adapter } from "next-auth/adapters";
import UserModel from "../database/UserModel";

/** @return { import("next-auth/adapters").Adapter } */
export default function MyAdapter(): Adapter {
	return {
		async createUser(...user) {
			const userModel = new UserModel();

			console.log(user);
			return {
				id: "",
				email: "mawit@gmail.com",
				emailVerified: new Date(),
			};
		},
		async getUser(id) {
			console.log(id);
			return null;
		},
		async getUserByEmail(email) {
			console.log(email);
			return null;
		},
		async getUserByAccount({ providerAccountId, provider }) {
			console.log(provider);
			return null;
		},
		async updateUser(user) {
			return {
				id: "",
				email: "",
				emailVerified: new Date(),
			};
		},
		async createSession({ sessionToken, userId, expires }) {
			// console.log([sessionToken, userId, expires]);
			console.log(userId);
			return {
				sessionToken: sessionToken,
				userId: userId,
				expires: expires,
			};
		},
		async getSessionAndUser(sessionToken) {
			console.log(sessionToken);
			return {
				user: {
					id: "",
					email: "mawit@gmail.com",
					name: "something",
					emailVerified: new Date(),
				},
				session: {
					sessionToken: sessionToken,
					userId: "",
					expires: new Date(),
				},
			};
		},
		async updateSession({ sessionToken }) {
			return {
				sessionToken: sessionToken,
				userId: "",
				expires: new Date(),
			};
		},
		async createVerificationToken({ identifier, expires, token }) {
			return {
				token: token,
				identifier: identifier,
				expires: expires,
			};
		},
		async useVerificationToken({ identifier, token }) {
			return {
				token: token,
				identifier: identifier,
				expires: new Date(),
			};
		},

		async deleteSession(sessionToken) {
			return;
		},
		async deleteUser(userId) {
			return;
		},
		async linkAccount(account) {
			return;
		},
		async unlinkAccount({ providerAccountId, provider }) {
			return;
		},
	};
}
