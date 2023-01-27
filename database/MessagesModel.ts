import { prisma } from "./prismaClient";

interface CreateInterface {
	authorId: string;
	receiverId: string;
	conversationId: string;
	text: string;
}

export default class MessagesModel {
	async create(data: CreateInterface) {
		return await prisma.messages.create({
			data: data,
		});
	}
	async delete(messageId: string) {
		return await prisma.messages.delete({
			where: {
				id: messageId,
			},
		});
	}
	async getNewMessagesCount(userId: string) {
		return prisma.messages.count({
			where: {
				receiverId: userId,
				seen: false,
			},
		});
	}
	async updateMessagesSeenStatus(messagesIds: string[]) {
		return await prisma.messages.updateMany({
			where: {
				id: { in: messagesIds },
			},
			data: {
				seen: true,
			},
		});
	}
}
