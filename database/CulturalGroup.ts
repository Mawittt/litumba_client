import { prisma } from "./prismaClient";

interface CreateInterface {
	authorId: string;
	cover: { url: string };
	logo: { url: string };
	name: string;
	city: string;
	description: string;
	type: string;
	members: number;
}
interface UpdateInterface {
	cover?: { url: string };
	logo?: { url: string };
	name?: string;
	city?: string;
	description?: string;
	type?: string;
	members?: number;
}

export default class CulturalGroupsModel {
	async create(data: CreateInterface) {
		return await prisma.culturalGroups.create({
			data: data,
		});
	}
	async update(groupId: string, data: UpdateInterface) {
		return await prisma.culturalGroups.update({
			where: {
				id: groupId,
			},
			data: data,
		});
	}
	async getMany(search: string, skip: number, span: number) {
		return await prisma.culturalGroups.findMany({
			where: {
				OR: [
					{
						name: {
							contains: search,
							mode: "insensitive",
						},
					},
					{
						description: {
							contains: search,
							mode: "insensitive",
						},
					},
				],
			},
			skip,
			take: span,
		});
	}
	async getOne(groupId: string) {
		return await prisma.culturalGroups.findUnique({
			where: {
				id: groupId,
			},
		});
	}
	async getCount(search: string) {
		return await prisma.culturalGroups.count({
			where: {
				OR: [
					{
						name: {
							contains: search,
							mode: "insensitive",
						},
					},
					{
						description: {
							contains: search,
							mode: "insensitive",
						},
					},
				],
			},
		});
	}
}
