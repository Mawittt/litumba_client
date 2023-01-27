import { prisma } from "./prismaClient";

interface CreateInterface {
	followerId: string;
	followeeId: string;
}

export default class FollowsModel {
	async create(data: CreateInterface) {
		return await prisma.follows.create({
			data: data,
		});
	}
	async delete(followerId: string, followeeId: string) {
		return await prisma.follows.deleteMany({
			where: {
				followeeId,
				followerId,
			},
		});
	}
	async exists(followerId: string, followeeId: string) {
		const follows = await prisma.follows.findMany({
			where: {
				followerId,
				followeeId,
			},
		});
		return Boolean(follows.length);
	}
	async getFollowers(userId: string) {
		return await prisma.follows.findMany({
			where: {
				followeeId: userId,
			},
			include: {
				follower: true,
			},
		});
	}
	async getFollowees(userId: string) {
		return await prisma.follows.findMany({
			where: {
				followerId: userId,
			},
			include: {
				followee: true,
			},
		});
	}
}
