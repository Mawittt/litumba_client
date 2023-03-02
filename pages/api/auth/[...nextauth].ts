import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import MyAdapter from "../../../nextauth/adapter";

export default NextAuth({
	// adapter: MyAdapter(),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
		}),
	],
	callbacks: {
		jwt(data) {
			console.log(data);
			return data.token;
		},
		session(data) {
			return data.session;
		},
	},
});
