import { getIncludeObject, IncludesObjectParam } from "./helpers";
import { prisma } from "./prismaClient";

interface filterQueryInterface {
	price?: "1k-5k" | "5k-10k" | "10k-50k" | "50k-100k" | "100k-500k" | "500k-1M" | "1M+";
	niche?: "manual job" | "health" | "art" | "web development" | "app development" | "tourism" | "business" | "marketing" | "social media";
}

interface filterInterface {
	price?: object;
	AND?: object[];
	niche?: "manual job" | "health" | "art" | "web development" | "app development" | "tourism" | "business" | "marketing" | "social media";
}

type IncludeStrings = "authorUser" | "authorBusiness" | "caseStudies" | "reviews";
type IncludesType = (IncludeStrings | IncludesObjectParam)[];

export default class LitumbaHubsModel {
	async getMany(search: string, filterQuery: filterQueryInterface, skip: number, span: number, includes: IncludesType) {
		const filter = arrangeFilter(filterQuery);
		const include = includes ? getIncludeObject(includes) : {};
		return await prisma.services.findMany({
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
				hub: "Litumba",
				...filter,
			},
			skip: skip,
			take: span,
			include,
			orderBy: {
				updatedAt: "desc",
			},
		});

		function arrangeFilter(filterQuery: filterQueryInterface) {
			const filter: filterInterface = {};
			if (filterQuery.niche) {
				filter.niche = filterQuery.niche;
			}
			if (filterQuery.price) {
				switch (filterQuery.price) {
					case "1k-5k":
						filter.AND = [
							{
								price: { gte: 1000 },
							},
							{
								price: { lte: 5000 },
							},
						];
						break;
					case "5k-10k":
						filter.AND = [
							{
								price: { gte: 5000 },
							},
							{
								price: { lte: 10000 },
							},
						];
						break;
					case "10k-50k":
						filter.AND = [
							{
								price: { gte: 10000 },
							},
							{
								price: { lte: 50000 },
							},
						];
						break;
					case "50k-100k":
						filter.AND = [
							{
								price: { gte: 50000 },
							},
							{
								price: { lte: 100000 },
							},
						];
						break;
					case "100k-500k":
						filter.AND = [
							{
								price: { gte: 100000 },
							},
							{
								price: { lte: 500000 },
							},
						];
						break;
					case "500k-1M":
						filter.AND = [
							{
								price: { gte: 500000 },
							},
							{
								price: { lte: 1000000 },
							},
						];
						break;
					case "1M+":
						filter.price = { gte: 1000000 };
						break;

					default:
						break;
				}
			}

			return filter;
		}
	}
	async getCount(search: string, filterQuery: filterQueryInterface) {
		const filter = arrangeFilter(filterQuery);
		return await prisma.services.count({
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
				hub: "Litumba",
				...filter,
			},
		});

		function arrangeFilter(filterQuery: filterQueryInterface) {
			const filter: filterInterface = {};
			if (filterQuery.niche) {
				filter.niche = filterQuery.niche;
			}
			if (filterQuery.price) {
				switch (filterQuery.price) {
					case "1k-5k":
						filter.AND = [
							{
								price: { gte: 1000 },
							},
							{
								price: { lte: 5000 },
							},
						];
						break;
					case "5k-10k":
						filter.AND = [
							{
								price: { gte: 5000 },
							},
							{
								price: { lte: 10000 },
							},
						];
						break;
					case "10k-50k":
						filter.AND = [
							{
								price: { gte: 10000 },
							},
							{
								price: { lte: 50000 },
							},
						];
						break;
					case "50k-100k":
						filter.AND = [
							{
								price: { gte: 50000 },
							},
							{
								price: { lte: 100000 },
							},
						];
						break;
					case "100k-500k":
						filter.AND = [
							{
								price: { gte: 100000 },
							},
							{
								price: { lte: 500000 },
							},
						];
						break;
					case "500k-1M":
						filter.AND = [
							{
								price: { gte: 500000 },
							},
							{
								price: { lte: 1000000 },
							},
						];
						break;
					case "1M+":
						filter.price = { gte: 1000000 };
						break;

					default:
						break;
				}
			}

			return filter;
		}
	}
}
