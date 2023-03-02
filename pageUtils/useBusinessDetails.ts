import { Businesses, Jobs, Products, Services, Users } from "@prisma/client";
import axios from "axios";
import { useQuery } from "react-query";
import { brand_avatar_1 } from "../assets/avatars";
import { ROUTES } from "../assets/constant";
import { business_image_1, shoe_image, shoe_image_1, shoe_image_2 } from "../assets/images";
import { BusinessDetailsProps, JobProps, ProductProps, ServiceProps } from "../types/types";
import { getElapsedTime } from "../utils/fn";
import { useNavigate, useOwner } from "../utils/hooks";

type ServerBusiness = Businesses & {
	services: Services[];
	products: Products[];
	jobs: (Jobs & { authorBusiness: { authorId: string } })[];
	author: Users;
};

export default function useBusinessDetails() {
	let details: BusinessDetailsProps | null = {
		cover: "",
		avatar: "",
		name: "",
		email: "",
		website: "",
		location: "",
		description: "",
		phone: "",
		niche: "",
		available: false,
		_id: "",
	};
	let services: ServiceProps[] = [];
	let products: ProductProps[] = [];
	let jobs: JobProps[] = [];
	const { navigate, router } = useNavigate();
	const userId = router.query._id;
	const { data, isSuccess, isLoading, isError } = useQuery<{ data: ServerBusiness }, Error>(
		["businesses", userId],
		() => {
			return axios.get("/api/businesses/" + userId);
		},
		{ enabled: !!userId }
	);

	const self = useOwner(data?.data.authorId || "");
	if (isSuccess) handleSuccess();
	if (isError) handleError();

	return { isLoading, details, openBusinessEditor, services, products, jobs, gotoConversation, goBack, self };

	function gotoConversation() {
		navigate(ROUTES.conversations + "/" + data?.data.authorId);
	}
	function goBack() {
		router.back();
	}
	function openBusinessEditor() {
		navigate(ROUTES.businesses.update + "/" + data?.data.id);
	}
	function handleSuccess() {
		if (!data?.data) return;
		details = {
			cover: data?.data.coverImage.url,
			avatar: data.data.logo.url,
			name: data.data.name,
			email: data.data.email || "No email",
			website: data.data.website || "No website",
			location: data.data.city + " " + data.data.country,
			description: data.data.description,
			phone: data.data.phone || "No Phone",
			niche: data.data.niche,
			available: data.data.author.online,
			_id: data.data.id,
		};

		services = data.data.services.map((service) => {
			return {
				avatar: data.data.logo.url,
				title: service.name,
				location: service.city + " " + service.country,
				website: data.data.website + "",
				description: service.description,
				tags: getServiceTags(service),
				_id: service.id,
				authorId: data.data.id,
				isBrand: true,
			};
		});

		products = data.data.products.map((product) => {
			return {
				avatar: data.data.logo.url,
				name: product.name,
				location: product.city + "-" + product.country,
				website: data.data.website || "",
				image: product.previews[0].url,
				description: product.description,
				price: product.price,
				amount: product.quantity,
				_id: product.id,
				isBrand: true,
				ownerId: data.data.authorId,
			};
		});

		jobs = data.data.jobs.map((job) => {
			return {
				avatar: data.data.logo.url,
				title: job.title,
				location: job.city + " " + job.country,
				time: getElapsedTime(job.updatedAt.toString()),
				description: job.description,
				tags: getJobTags(job),
				isBrand: true,
				_id: job.id,
				authorId: job.id,
				owner: job.authorUserId || job.authorBusiness?.authorId,
			};
		});

		function getServiceTags(service: Services) {
			return [service.price + " frs", service.niche, service.hub];
		}
		function getJobTags(job: Jobs) {
			return [job.pricing, job.niche, job.expertise];
		}
	}
	function handleError() {}
}
