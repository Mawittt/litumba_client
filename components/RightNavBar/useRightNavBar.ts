import { Businesses, Follows, Jobs, Notifications, Products, Services, Users } from "@prisma/client";
import axios from "axios";
import { title } from "process";
import { useQuery } from "react-query";
import { brand_avatar_1, brand_avatar_2, brand_avatar_3 } from "../../assets/avatars";
import { shoe_image } from "../../assets/images";
import useStore from "../../store/useStore";
import { MyBusinessProps, MyJobProps, MyProductProps, MyServiceProps } from "../../types/types";

interface Count {
	businesses: number;
	comments: number;
	culturalGroups: number;
	followers: number;
	followees: number;
	jobs: number;
	likes: number;
	notifications: number;
	notificationsTriggered: number;
	posts: number;
	products: number;
	realEstates: number;
	reviews: number;
	services: number;
}

type serverData = Users & {
	businesses: (Businesses & { _count: { jobs: number; products: number; realEstates: number; services: number } })[];
	products: Products[];
	jobs: Jobs[];
	services: Services[];
	followers: Follows[];
	notifications: Notifications[];
	_count: Count;
};

interface ProfilePreviewInterface {
	image: string;
	name: string;
	description: string;
	notifications: number;
	followers: number;
	following: number;
}

export default function useRightNavBar() {
	const { user } = useStore();

	const { data, isSuccess } = useQuery<{ data: serverData }>(
		["user", { userId: user.id }],
		() => {
			return axios.get("/api/user/" + user.id);
		},
		{ enabled: !!user.id }
	);

	let profilePreview: ProfilePreviewInterface = {
		image: "",
		name: "",
		description: "",
		notifications: 0,
		followers: 0,
		following: 0,
	};
	let businesses: MyBusinessProps[] = [];
	let jobs: MyJobProps[] = [];
	let services: MyServiceProps[] = [];
	let products: MyProductProps[] = [];

	if (isSuccess) handleSuccess();

	return { profilePreview, isSuccess, businesses, jobs, services, products };

	function handleSuccess() {
		if (!data?.data) return;
		const details = data.data;
		profilePreview = {
			image: details.profileImage.url,
			name: details.firstName + " " + details.lastName,
			description: details.description,
			notifications: getNotifications(),
			followers: details._count.followers,
			following: details._count.followees,
		};

		businesses = data.data.businesses.map((business) => {
			return {
				image: business.logo.url,
				name: business.name,
				assets: getAssetsCount(),
				id: business.id,
			};
			function getAssetsCount() {
				return business._count.jobs + business._count.products + business._count.realEstates + business._count.services;
			}
		});
		jobs = data.data.jobs.map((job) => {
			return {
				image: data.data.profileImage.url,
				title: job.title,
				id: job.id,
			};
		});
		services = data.data.services.map((service) => {
			return {
				image: data.data.profileImage.url,
				title: service.name,
				id: service.id,
			};
		});
		products = data.data.products.map((product) => {
			return {
				image: product.previews[0].url,
				name: product.name,
				id: product.id,
			};
		});

		function getNotifications() {
			return details.notifications.reduce((accumulator, currentValue) => {
				if (currentValue.seen) return accumulator;
				return accumulator + 1;
			}, 0);
		}
	}
}
