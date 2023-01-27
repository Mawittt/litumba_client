import { title } from "process";
import { prisma } from "./prismaClient";

interface LikesCreateEntries {
	postId: string;
	authorId: string;
}

export default class LikesModel {
	async create(data: LikesCreateEntries) {
		await prisma.likes.create({
			data: data,
		});

		return true;
	}

	async exists(authorId: string, postId: string): Promise<boolean> {
		const count = await prisma.likes.count({
			where: {
				AND: [
					{
						authorId,
					},
					{
						postId,
					},
				],
			},
		});
		return Boolean(count);
	}

	async delete(authorId: string, postId: string) {
		await prisma.likes.deleteMany({
			where: {
				AND: [
					{
						authorId,
					},
					{
						postId,
					},
				],
			},
		});

		return true;
	}
}
