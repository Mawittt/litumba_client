import { getIncludeObject, IncludesObjectParam } from "./helpers";
import { prisma } from "./prismaClient";

interface JobsCreateEntries {
	authorUserId: string;
	authorBusinessId: string;
	title: string;
	description: string;
	pricing: "30k - 50k" | "50k - 100k" | "100k - 500K" | "500k - 1M" | "1M++";
	urgency: "now" | "1-3 days" | "1 week" | "1-3 weeks" | "1 month" | "1-3months" | "3months++";
	niche: "manual job" | "health" | "art" | "web development" | "app development" | "tourism" | "business" | "marketing" | "social media";
	expertise: "beginner" | "intermediate" | "expert";
	schedule: "part time" | "full time";
	country: string;
	city: string;
}
interface JobsUpdateEntries {
	title?: string;
	description?: string;
	pricing?: "30k - 50k" | "50k - 100k" | "100k - 500K" | "500k - 1M" | "1M++";
	urgency?: "now" | "1-3 days" | "1 week" | "1-3 weeks" | "1 month" | "1-3months" | "3months++";
	niche?: "manual job" | "health" | "art" | "web development" | "app development" | "tourism" | "business" | "marketing" | "social media";
	expertise?: "beginner" | "intermediate" | "expert";
	schedule?: "part time" | "full time";
	country?: string;
	city?: string;
}
interface filterQueryEntries {
	pricing?: "30k - 50k" | "50k - 100k" | "100k - 500K" | "500k - 1M" | "1M++";
	urgency?: "now" | "1-3 days" | "1 week" | "1-3 weeks" | "1 month" | "1-3months" | "3months++";
	niche?: "manual job" | "health" | "art" | "web development" | "app development" | "tourism" | "business" | "marketing" | "social media";
	expertise?: "beginner" | "intermediate" | "expert";
	schedule?: "part time" | "full time";
}
interface QueryInterface {
	expertise?: "beginner" | "intermediate" | "expert";
	niche?: "manual job" | "health" | "art" | "web development" | "app development" | "tourism" | "business" | "marketing" | "social media";
	pricing?: "30k - 50k" | "50k - 100k" | "100k - 500K" | "500k - 1M" | "1M++";
	urgency?: "now" | "1-3 days" | "1 week" | "1-3 weeks" | "1 month" | "1-3months" | "3months++";
	schedule?: "part time" | "full time";
}
type IncludeStrings = "authorUser" | "authorBusiness";
type IncludesType = (IncludeStrings | IncludesObjectParam)[];

export default class JobsModel {
	async create(data: JobsCreateEntries) {
		await prisma.jobs.create({
			data,
		});
	}
	async update(jobId: string, data: JobsUpdateEntries) {
		await prisma.jobs.update({
			where: {
				id: jobId,
			},
			data,
		});
	}
	async getMany(searchString: string, filterQuery: filterQueryEntries, skip = 0, span = 4, includes?: IncludesType) {
		const filters = ConstructFilterQuery(filterQuery);
		const include = includes ? getIncludeObject(includes) : {};
		return await prisma.jobs.findMany({
			where: {
				OR: [
					{
						title: {
							contains: searchString,
							mode: "insensitive",
						},
					},
					{
						description: {
							contains: searchString,
							mode: "insensitive",
						},
					},
				],
				...filters,
			},
			skip: skip,
			take: span,
			include,
			orderBy: {
				updatedAt: "desc",
			},
		});
	}
	async getOne(jobId: string, includes?: IncludesType) {
		const include = includes ? getIncludeObject(includes) : {};
		return await prisma.jobs.findUnique({
			where: { id: jobId },
			include,
		});
	}
	async getCount(searchString: string, filterQuery: filterQueryEntries) {
		const filters = ConstructFilterQuery(filterQuery);
		return await prisma.jobs.count({
			where: {
				OR: [
					{
						title: {
							contains: searchString,
							mode: "insensitive",
						},
					},
					{
						description: {
							contains: searchString,
							mode: "insensitive",
						},
					},
				],
				...filters,
			},
		});
	}
}

function ConstructFilterQuery(filterQuery: filterQueryEntries) {
	const Query: QueryInterface = {};
	if (filterQuery.expertise) {
		Query.expertise = filterQuery.expertise;
	}
	if (filterQuery.niche) {
		Query.niche = filterQuery.niche;
	}
	if (filterQuery.pricing) {
		Query.pricing = filterQuery.pricing;
	}
	if (filterQuery.urgency) {
		Query.urgency = filterQuery.urgency;
	}
	if (filterQuery.schedule) {
		Query.schedule = filterQuery.schedule;
	}
	return Query;
}
