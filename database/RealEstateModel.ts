import { getIncludeObject, IncludesObjectParam } from "./helpers";
import { prisma } from "./prismaClient";

interface createInterface {
	authorUserId?: string;
	authorBusinessId: string;
	previews: { url: string }[];
	name: string;
	type: "Room" | "Apartment" | "Studio" | "Hall" | "Villa" | "Duplex";
	price: number;
	description: string;
	country: string;
	city: string;
}
interface updateInterface {
	previews?: { url: string }[];
	name?: string;
	type?: "Room" | "Apartment" | "Studio" | "Hall" | "Villa" | "Duplex";
	price?: number;
	description?: string;
	country?: string;
	city?: string;
}
interface filterQueryInterface {
	price?: "10K - 30K" | "30k - 50K" | "50k - 100k" | "100k - 500K" | "500k - 1M" | "1M+";
	type?: "Room" | "Apartment" | "Studio" | "Hall" | "Villa" | "Duplex";
	pricing?: "10K - 30K" | "30k - 50K" | "50k - 100k" | "100k - 500K" | "500k - 1M" | "1M+";
}

interface filterInterface {
	AND?: object[];
	type?: "Room" | "Apartment" | "Studio" | "Hall" | "Villa" | "Duplex";
	price?: object;
}

type IncludeStrings = "authorUser" | "authorBusiness";
type IncludesType = (IncludeStrings | IncludesObjectParam)[];

export default class RealEstatesModel {
	async create(data: createInterface) {
		return await prisma.realEstates.create({
			data: data,
		});
	}
	async update(RealEstateId: string, data: updateInterface) {
		return await prisma.realEstates.update({
			where: {
				id: RealEstateId,
			},
			data: data,
		});
	}
	async getMany(search: string, filterQuery: filterQueryInterface, skip: number, span: number, includes: IncludesType) {
		const filter = constructFilter(filterQuery);
		const include = includes ? getIncludeObject(includes) : {};
		return await prisma.realEstates.findMany({
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
			include,
			orderBy: {
				updatedAt: "desc",
			},
		});

		function constructFilter(filterQuery: filterQueryInterface) {
			filterQuery.price = filterQuery.pricing;
			const filter: filterInterface = {};
			if (filterQuery.type) {
				filter.type = filterQuery.type;
			}
			if (filterQuery.price) {
				switch (filterQuery.price) {
					case "10K - 30K":
						filter.AND = [
							{
								price: { gte: 10000 },
							},
							{
								price: { lte: 30000 },
							},
						];
						break;
					case "30k - 50K":
						filter.AND = [
							{
								price: { gte: 30000 },
							},
							{
								price: { lte: 50000 },
							},
						];
						break;
					case "50k - 100k":
						filter.AND = [
							{
								price: { gte: 50000 },
							},
							{
								price: { lte: 100000 },
							},
						];
						break;
					case "100k - 500K":
						filter.AND = [
							{
								price: { gte: 100000 },
							},
							{
								price: { lte: 500000 },
							},
						];
						break;
					case "500k - 1M":
						filter.AND = [
							{
								price: { gte: 500000 },
							},
							{
								price: { lte: 1000000 },
							},
						];
						break;
					case "500k - 1M":
						filter.price = { gte: 1000000 };
						break;

					default:
						break;
				}
			}

			return filter;
		}
	}
	async getOne(realEstateId: string, includes: IncludesType) {
		const include = includes ? getIncludeObject(includes) : {};
		return await prisma.realEstates.findUnique({
			where: {
				id: realEstateId,
			},
			include,
		});
	}
	async getCount(search: string, filterQuery: filterQueryInterface) {
		const filter = constructFilter(filterQuery);
		return await prisma.realEstates.count({
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

		function constructFilter(filterQuery: filterQueryInterface) {
			filterQuery.price = filterQuery.pricing;
			const filter: filterInterface = {};
			if (filterQuery.type) {
				filter.type = filterQuery.type;
			}
			if (filterQuery.price) {
				switch (filterQuery.price) {
					case "10K - 30K":
						filter.AND = [
							{
								price: { gte: 10000 },
							},
							{
								price: { lte: 30000 },
							},
						];
						break;
					case "30k - 50K":
						filter.AND = [
							{
								price: { gte: 30000 },
							},
							{
								price: { lte: 50000 },
							},
						];
						break;
					case "50k - 100k":
						filter.AND = [
							{
								price: { gte: 50000 },
							},
							{
								price: { lte: 100000 },
							},
						];
						break;
					case "100k - 500K":
						filter.AND = [
							{
								price: { gte: 100000 },
							},
							{
								price: { lte: 500000 },
							},
						];
						break;
					case "500k - 1M":
						filter.AND = [
							{
								price: { gte: 500000 },
							},
							{
								price: { lte: 1000000 },
							},
						];
						break;
					case "500k - 1M":
						filter.price = { gte: 1000000 };
						break;

					default:
						break;
				}
			}

			return filter;
		}
	}
	async getOtherRealEstates(realEstateId: string, authorId: string) {
		return await prisma.realEstates.findMany({
			where: {
				AND: [
					{
						OR: [
							{
								authorBusinessId: authorId,
							},
							{
								authorUserId: authorId,
							},
						],
					},
					{
						NOT: {
							id: realEstateId,
						},
					},
				],
			},
			take: 3,
			orderBy: {
				updatedAt: "desc",
			},
		});
	}
}
