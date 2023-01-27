import axios from "axios";
import { useQuery } from "react-query";
import { brand_avatar_1 } from "../assets/avatars";
import { ROUTES } from "../assets/constant";
import { business_image_1, shoe_image, shoe_image_1, shoe_image_2 } from "../assets/images";
import { BusinessDetailsProps, JobProps, ProductProps, ServiceProps } from "../types/types";
import { getElapsedTime } from "../utils/fn";
import { useNavigate, useOwner } from "../utils/hooks";

interface ServiceFromServer {
	authorBusinessId: string;
	authorUserId: string;
	city: string;
	country: string;
	createdAt: string;
	description: string;
	hub: string;
	id: string;
	name: string;
	niche: string;
	price: number;
	updateAt: string;
}

interface productFromServer {
	authorBusinessId: string;
	authorUserId: string;
	brand: string;
	city: string;
	country: string;
	createdAt: string;
	description: string;
	id: string;
	name: string;
	niche: string;
	previews: { url: string }[];
	price: number;
	quantity: number;
	updatedAt: number;
}

interface JobFromServer {
	authorBusinessId: string;
	authorUserId: string;
	city: string;
	country: string;
	createdAt: string;
	description: string;
	expertise: string;
	id: string;
	niche: string;
	pricing: string;
	schedule: string;
	title: string;
	updatedAt: string;
	urgency: string;
}

interface ServerBusiness {
	coverImage: { url: string };
	logo: { url: string };
	name: string;
	email?: string;
	website?: string;
	city: string;
	country: string;
	description: string;
	phone?: string;
	niche: string;
	author: {
		online: boolean;
	};
	id: string;
	authorId: string;
	services: ServiceFromServer[];
	products: productFromServer[];
	jobs: JobFromServer[];
}

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
	console.log(userId);
	const { data, isSuccess, isLoading, isError } = useQuery<{ data: ServerBusiness }, Error>(
		["businesses", userId],
		() => {
			return axios.get("/api/businesses/" + userId);
		},
		{ enabled: !!userId }
	);

	const self = useOwner();
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
				time: getElapsedTime(job.updatedAt),
				description: job.description,
				tags: getJobTags(job),
				isBrand: true,
				_id: job.id,
				authorId: job.id,
			};
		});

		console.log(data.data);

		function getServiceTags(service: ServiceFromServer) {
			return [service.price + " frs", service.niche, service.hub];
		}
		function getJobTags(job: JobFromServer) {
			return [job.pricing, job.niche, job.expertise];
		}
	}
	function handleError() {}
}
