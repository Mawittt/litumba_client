import { prisma } from "./prismaClient";

interface CommentCreateEntries {
	authorId: string;
	postId: string;
	text: string;
}

export default class CommentsModel {
	async create(data: CommentCreateEntries) {
		return await prisma.comments.create({
			data: data,
		});
	}
}
