import { getIncludeObject, IncludesObjectParam } from "./helpers";
import { prisma } from "./prismaClient";

interface CreateInterface {
	authorUserId: string;
	authorBusinessId: string;
	previews: { url: string }[];
	name: string;
	price: number;
	quantity: number;
	description: string;
	niche:
		| "electronics"
		| "dressing"
		| "kitchen utensils"
		| "furniture"
		| "tools & utensils"
		| "books"
		| "Agricultural products"
		| "machineries"
		| "vehicles";
	brand: string;
	country: string;
	city: string;
}
interface UpdateInterface {
	previews?: { url: string }[];
	name?: string;
	price?: number;
	quantity?: number;
	description?: string;
	niche?:
		| "electronics"
		| "dressing"
		| "kitchen utensils"
		| "furniture"
		| "tools & utensils"
		| "books"
		| "Agricultural products"
		| "machineries"
		| "vehicles";
	brand?: string;
	country?: string;
	city?: string;
}
interface FilterQueryInterface {
	price?: "1k-5k" | "5k-10k" | "10k-50k" | "50k-100k" | "100k-500k" | "500k-1M" | "1M+";
	pricing?: "1k-5k" | "5k-10k" | "10k-50k" | "50k-100k" | "100k-500k" | "500k-1M" | "1M+";
	niche?:
		| "electronics"
		| "dressing"
		| "kitchen utensils"
		| "furniture"
		| "tools & utensils"
		| "books"
		| "Agricultural products"
		| "machineries"
		| "vehicles";
	quantity?: "1-5" | "5-10" | "10-50" | "50-100" | "100-500" | "500-1k" | "1k+";
}

interface FilterInterface {
	niche?: string;
	AND?: object[];
}

type IncludeStrings = "authorUser" | "authorBusiness";
type IncludesType = (IncludeStrings | IncludesObjectParam)[];

export default class ProductsModel {
	async create(data: CreateInterface) {
		return await prisma.products.create({
			data: data,
		});
	}
	async update(productId: string, data: UpdateInterface) {
		return await prisma.products.update({
			where: {
				id: productId,
			},
			data: data,
		});
	}
	async getMany(search: string, filterQuery: FilterQueryInterface, skip: number, span: number, includes: IncludesType) {
		const filter: FilterInterface = getFilter(filterQuery);
		const include = includes ? getIncludeObject(includes) : {};
		return await prisma.products.findMany({
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
			include: {
				authorUser: true,
				authorBusiness: true,
			},
			orderBy: {
				createdAt: "desc",
			},
		});

		function getFilter(filterQuery: FilterQueryInterface) {
			const filter: FilterInterface = {};
			if (filterQuery.niche) {
				filter.niche = filterQuery.niche;
			}
			if (filterQuery.price) {
				if (!filter.AND) filter.AND = [];
				switch (filterQuery.price) {
					case "1k-5k":
						filter.AND.push({
							AND: [
								{
									price: { gte: 1000 },
								},
								{
									price: { lte: 5000 },
								},
							],
						});
						break;
					case "5k-10k":
						filter.AND.push({
							AND: [
								{
									price: { gte: 5000 },
								},
								{
									price: { lte: 10000 },
								},
							],
						});
						break;
					case "10k-50k":
						filter.AND.push({
							AND: [
								{
									price: { gte: 10000 },
								},
								{
									price: { lte: 50000 },
								},
							],
						});
						break;
					case "50k-100k":
						filter.AND.push({
							AND: [
								{
									price: { gte: 50000 },
								},
								{
									price: { lte: 100000 },
								},
							],
						});
						break;
					case "100k-500k":
						filter.AND.push({
							AND: [
								{
									price: { gte: 100000 },
								},
								{
									price: { lte: 500000 },
								},
							],
						});
						break;
					case "500k-1M":
						filter.AND.push({
							AND: [
								{
									price: { gte: 500000 },
								},
								{
									price: { lte: 1000000 },
								},
							],
						});
						break;
					case "1M+":
						filter.AND.push({
							price: { gte: 1000000 },
						});
						break;
					default:
						break;
				}
			}
			if (filterQuery.pricing) {
				if (!filter.AND) filter.AND = [];
				switch (filterQuery.pricing) {
					case "1k-5k":
						filter.AND.push({
							AND: [
								{
									price: { gte: 1000 },
								},
								{
									price: { lte: 5000 },
								},
							],
						});
						break;
					case "5k-10k":
						filter.AND.push({
							AND: [
								{
									price: { gte: 5000 },
								},
								{
									price: { lte: 10000 },
								},
							],
						});
						break;
					case "10k-50k":
						filter.AND.push({
							AND: [
								{
									price: { gte: 10000 },
								},
								{
									price: { lte: 50000 },
								},
							],
						});
						break;
					case "50k-100k":
						filter.AND.push({
							AND: [
								{
									price: { gte: 50000 },
								},
								{
									price: { lte: 100000 },
								},
							],
						});
						break;
					case "100k-500k":
						filter.AND.push({
							AND: [
								{
									price: { gte: 100000 },
								},
								{
									price: { lte: 500000 },
								},
							],
						});
						break;
					case "500k-1M":
						filter.AND.push({
							AND: [
								{
									price: { gte: 500000 },
								},
								{
									price: { lte: 1000000 },
								},
							],
						});
						break;
					case "1M+":
						filter.AND.push({
							price: { gte: 1000000 },
						});
						break;
					default:
						break;
				}
			}
			if (filterQuery.quantity) {
				if (!filter.AND) filter.AND = [];
				switch (filterQuery.quantity) {
					case "1-5":
						filter.AND.push({
							AND: [
								{
									quantity: { gte: 1 },
								},
								{
									quantity: { lte: 5 },
								},
							],
						});
						break;
					case "5-10":
						filter.AND.push({
							AND: [
								{
									quantity: { gte: 5 },
								},
								{
									quantity: { lte: 10 },
								},
							],
						});
						break;
					case "10-50":
						filter.AND.push({
							AND: [
								{
									quantity: { gte: 10 },
								},
								{
									quantity: { lte: 50 },
								},
							],
						});
						break;
					case "50-100":
						filter.AND.push({
							AND: [
								{
									quantity: { gte: 50 },
								},
								{
									quantity: { lte: 100 },
								},
							],
						});
						break;
					case "100-500":
						filter.AND.push({
							AND: [
								{
									quantity: { gte: 100 },
								},
								{
									quantity: { lte: 500 },
								},
							],
						});
						break;
					case "500-1k":
						filter.AND.push({
							AND: [
								{
									quantity: { gte: 500 },
								},
								{
									quantity: { lte: 1000 },
								},
							],
						});
						break;
					case "1k+":
						filter.AND.push({
							quantity: { gte: 1000 },
						});
						break;
					default:
						break;
				}
			}

			return filter;
		}
	}
	async getOne(productId: string, includes?: IncludesType) {
		const include = includes ? getIncludeObject(includes) : {};
		return await prisma.products.findUnique({
			where: {
				id: productId,
			},
			include,
		});
	}
	async getCount(search: string, filterQuery: FilterQueryInterface) {
		const filter: FilterInterface = getFilter(filterQuery);
		return await prisma.products.count({
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

		function getFilter(filterQuery: FilterQueryInterface) {
			const filter: FilterInterface = {};
			if (filterQuery.niche) {
				filter.niche = filterQuery.niche;
			}
			if (filterQuery.price) {
				if (!filter.AND) filter.AND = [];
				switch (filterQuery.price) {
					case "1k-5k":
						filter.AND.push({
							AND: [
								{
									price: { gte: 1000 },
								},
								{
									price: { lte: 5000 },
								},
							],
						});
						break;
					case "5k-10k":
						filter.AND.push({
							AND: [
								{
									price: { gte: 5000 },
								},
								{
									price: { lte: 10000 },
								},
							],
						});
						break;
					case "10k-50k":
						filter.AND.push({
							AND: [
								{
									price: { gte: 10000 },
								},
								{
									price: { lte: 50000 },
								},
							],
						});
						break;
					case "50k-100k":
						filter.AND.push({
							AND: [
								{
									price: { gte: 50000 },
								},
								{
									price: { lte: 100000 },
								},
							],
						});
						break;
					case "100k-500k":
						filter.AND.push({
							AND: [
								{
									price: { gte: 100000 },
								},
								{
									price: { lte: 500000 },
								},
							],
						});
						break;
					case "500k-1M":
						filter.AND.push({
							AND: [
								{
									price: { gte: 500000 },
								},
								{
									price: { lte: 1000000 },
								},
							],
						});
						break;
					case "1M+":
						filter.AND.push({
							price: { gte: 1000000 },
						});
						break;
					default:
						break;
				}
			}
			if (filterQuery.pricing) {
				if (!filter.AND) filter.AND = [];
				switch (filterQuery.pricing) {
					case "1k-5k":
						filter.AND.push({
							AND: [
								{
									price: { gte: 1000 },
								},
								{
									price: { lte: 5000 },
								},
							],
						});
						break;
					case "5k-10k":
						filter.AND.push({
							AND: [
								{
									price: { gte: 5000 },
								},
								{
									price: { lte: 10000 },
								},
							],
						});
						break;
					case "10k-50k":
						filter.AND.push({
							AND: [
								{
									price: { gte: 10000 },
								},
								{
									price: { lte: 50000 },
								},
							],
						});
						break;
					case "50k-100k":
						filter.AND.push({
							AND: [
								{
									price: { gte: 50000 },
								},
								{
									price: { lte: 100000 },
								},
							],
						});
						break;
					case "100k-500k":
						filter.AND.push({
							AND: [
								{
									price: { gte: 100000 },
								},
								{
									price: { lte: 500000 },
								},
							],
						});
						break;
					case "500k-1M":
						filter.AND.push({
							AND: [
								{
									price: { gte: 500000 },
								},
								{
									price: { lte: 1000000 },
								},
							],
						});
						break;
					case "1M+":
						filter.AND.push({
							price: { gte: 1000000 },
						});
						break;
					default:
						break;
				}
			}
			if (filterQuery.quantity) {
				if (!filter.AND) filter.AND = [];
				switch (filterQuery.quantity) {
					case "1-5":
						filter.AND.push({
							AND: [
								{
									quantity: { gte: 1 },
								},
								{
									quantity: { lte: 5 },
								},
							],
						});
						break;
					case "5-10":
						filter.AND.push({
							AND: [
								{
									quantity: { gte: 5 },
								},
								{
									quantity: { lte: 10 },
								},
							],
						});
						break;
					case "10-50":
						filter.AND.push({
							AND: [
								{
									quantity: { gte: 10 },
								},
								{
									quantity: { lte: 50 },
								},
							],
						});
						break;
					case "50-100":
						filter.AND.push({
							AND: [
								{
									quantity: { gte: 50 },
								},
								{
									quantity: { lte: 100 },
								},
							],
						});
						break;
					case "100-500":
						filter.AND.push({
							AND: [
								{
									quantity: { gte: 100 },
								},
								{
									quantity: { lte: 500 },
								},
							],
						});
						break;
					case "500-1k":
						filter.AND.push({
							AND: [
								{
									quantity: { gte: 500 },
								},
								{
									quantity: { lte: 1000 },
								},
							],
						});
						break;
					case "1k+":
						filter.AND.push({
							quantity: { gte: 1000 },
						});
						break;
					default:
						break;
				}
			}

			return filter;
		}
	}
	async getFromSameAuthor(authorId: string, productId: string) {
		return await prisma.products.findMany({
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
						id: {
							not: productId,
						},
					},
				],
			},
			take: 3,
			select: {
				previews: true,
				name: true,
				price: true,
				id: true,
			},
		});
	}
}
