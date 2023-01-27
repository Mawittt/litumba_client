import { getIncludeObject, IncludesObjectParam } from "./helpers";
import { prisma } from "./prismaClient";

interface PostCreationEntries {
	authorUserId?: string;
	authorBusinessId?: string;
	image: { url: string };
	video: { url: string };
	text: string;
}

interface PostUpdateEntries {
	text?: string;
	image?: { url: string };
	video?: { url: string };
}
type IncludeStrings = "likes" | "comments" | "authorUser" | "authorBusiness";
type IncludesType = (IncludeStrings | IncludesObjectParam)[];

export default class PostModel {
	async create(data: PostCreationEntries) {
		await prisma.posts.create({
			data: data,
		});

		return true;
	}
	async update(id: string, data: PostUpdateEntries) {
		await prisma.posts.update({
			where: {
				id: id,
			},
			data: data,
		});
	}
	async getMany(skip: number, span: number, includes?: IncludesType) {
		const include = includes ? getIncludeObject(includes) : {};
		include._count = true;
		return await prisma.posts.findMany({
			skip,
			take: span,
			include,
			orderBy: { createdAt: "desc" },
		});
	}
	async getOne(postId: string, includes?: IncludesType) {
		const include = includes ? getIncludeObject(includes) : {};
		include._count = true;
		return await prisma.posts.findUnique({
			where: {
				id: postId,
			},
			include,
		});
	}
	async delete(PostId: string) {
		await prisma.posts.delete({
			where: {
				id: PostId,
			},
		});
	}
	async getCount() {
		return await prisma.posts.count();
	}
}
