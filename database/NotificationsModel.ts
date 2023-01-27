import { prisma } from "./prismaClient";

interface NotificationType {
	receiverId: string;
	triggerId: string;
	seen: boolean;
}
interface ReviewNotification extends NotificationType {
	serviceId: string;
	type: "review";
}
interface FollowNotification extends NotificationType {
	type: "follow";
}
interface LikeNotification extends NotificationType {
	type: "like";
	postId: string;
}
interface commentNotification extends NotificationType {
	type: "comment";
	postId: string;
}

export default class NotificationsModel {
	async createReviewNotification(data: ReviewNotification) {
		data.type = "review";
		return await prisma.notifications.create({
			data,
		});
	}
	async crateFollowNotification(data: FollowNotification) {
		data.type = "follow";
		return await prisma.notifications.create({
			data,
		});
	}
	async createLikeNotification(data: LikeNotification) {
		data.type = "like";
		return await prisma.notifications.create({
			data,
		});
	}
	async createCommentNotification(data: commentNotification) {
		data.type = "comment";
		return await prisma.notifications.create({
			data,
		});
	}
	async getNotifications(userId: string) {
		return prisma.notifications.findMany({
			where: {
				receiverId: userId,
			},
		});
	}
	async deleteLikeNotification(receiverId: string, triggerId: string, postId: string) {
		return prisma.notifications.deleteMany({
			where: {
				receiverId,
				triggerId,
				postId,
				type: "like",
			},
		});
	}
	async deleteFollowNotification(receiverId: string, triggerId: string) {
		return prisma.notifications.deleteMany({
			where: {
				receiverId,
				triggerId,
				type: "follow",
			},
		});
	}
	async getMany(userId: string) {
		return await prisma.notifications.findMany({
			where: {
				receiverId: userId,
			},
			include: {
				trigger: {
					select: {
						profileImage: true,
						firstName: true,
						lastName: true,
					},
				},
				post: {
					select: {
						text: true,
					},
				},
				service: {
					select: {
						name: true,
					},
				},
			},
			orderBy: {
				updatedAt: "desc",
			},
		});
	}
	async update(notificationsIds: string[], updates: { seen: boolean }) {
		return await prisma.notifications.updateMany({
			where: {
				id: { in: notificationsIds },
			},
			data: updates,
		});
	}
}
