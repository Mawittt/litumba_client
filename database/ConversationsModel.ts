import { prisma } from "./prismaClient";

interface CreateInterface {
	usersIds: [string, string];
}

export default class ConversationsModel {
	async create(data: CreateInterface) {
		const conversation = await prisma.conversations.create({
			data: data,
		});

		await prisma.users.updateMany({
			where: {
				id: {
					in: data.usersIds,
				},
			},
			data: {
				conversationsIds: {
					push: conversation.id,
				},
			},
		});

		return conversation;
	}
	async getOne(userId: string, peerId: string) {
		return await prisma.conversations.findFirst({
			where: {
				usersIds: {
					hasEvery: [userId, peerId],
				},
			},
			include: {
				messages: true,
			},
		});
	}
	async delete(conversationId: string) {
		return await prisma.conversations.delete({
			where: {
				id: conversationId,
			},
		});
	}
	async getMany(userId: string) {
		return await prisma.conversations.findMany({
			where: {
				usersIds: {
					has: userId,
				},
			},
			include: {
				messages: {
					where: {
						seen: false,
						receiverId: userId,
					},
				},
				users: true,
			},
		});
	}
}
