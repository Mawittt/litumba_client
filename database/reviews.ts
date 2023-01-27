import { prisma } from "./prismaClient";

interface CreateInterface {
	serviceId: string;
	authorId: string;
	stars: 1 | 2 | 3 | 4 | 5;
	description: string;
}

export default class ReviewsModel {
	async create(data: CreateInterface) {
		return await prisma.reviews.create({
			data: data,
		});
	}
}
