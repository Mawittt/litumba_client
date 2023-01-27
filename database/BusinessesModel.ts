import { getIncludeObject, IncludesObjectParam } from "./helpers";
import { prisma } from "./prismaClient";

interface CreateInterface {
	authorId: string;
	logo: { url: string };
	coverImage: { url: string };
	name: string;
	country: string;
	city: string;
	description: string;
	niche: "manual job" | "health" | "art" | "web development" | "app development" | "tourism" | "business" | "marketing" | "social media";
	phone: string;
	email: string;
	website: string;
}
interface UpdateInterface {
	logo?: { url: string };
	coverImage?: { url: string };
	name?: string;
	country?: string;
	city?: string;
	description?: string;
	niche?: "manual job" | "health" | "art" | "web development" | "app development" | "tourism" | "business" | "marketing" | "social media";
	phone?: string;
	email?: string;
	website?: string;
}
interface FilterInterface {
	niche?: "manual job" | "health" | "art" | "web development" | "app development" | "tourism" | "business" | "marketing" | "social media";
}
type IncludeStrings = "author" | "posts" | "jobs" | "products" | "services" | "realEstates";
type IncludesType = (IncludeStrings | IncludesObjectParam)[];

export default class BusinessesModel {
	async create(data: CreateInterface) {
		await prisma.businesses.create({
			data: data,
		});
	}
	async update(businessId: string, data: UpdateInterface) {
		await prisma.businesses.update({
			where: {
				id: businessId,
			},
			data: data,
		});
	}
	async getMany(search: string = "", filter: FilterInterface = {}, skip: number = 0, span: number) {
		return await prisma.businesses.findMany({
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
				...filter,
			},
			skip,
			take: span,
			orderBy: {
				updatedAt: "desc",
			},
		});
	}
	async getCount(search: string = "", filter: FilterInterface = {}) {
		return await prisma.businesses.count({
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
				...filter,
			},
		});
	}
	async getOne(businessId: string, includes: IncludesType) {
		const include = getIncludeObject(includes);
		return await prisma.businesses.findUnique({
			where: {
				id: businessId,
			},
			include,
		});
	}
}
