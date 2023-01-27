import { prisma } from "./prismaClient";

interface CreateInterface {
	serviceId: string;
	title: string;
	description: string;
	preview: { url: string };
}

interface UpdateInterface {
	title?: string;
	description?: string;
	preview?: { url: string };
}

export default class CaseStudiesModel {
	async create(data: CreateInterface) {
		return await prisma.caseStudy.create({
			data: data,
		});
	}
	async update(caseStudyId: string, data: UpdateInterface) {
		return await prisma.caseStudy.update({
			where: {
				id: caseStudyId,
			},
			data: data,
		});
	}
	async getOne(caseId: string) {
		return await prisma.caseStudy.findUnique({
			where: {
				id: caseId,
			},
		});
	}
}
