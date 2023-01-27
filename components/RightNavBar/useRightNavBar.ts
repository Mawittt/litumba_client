import { Businesses, Follows, Jobs, Notifications, Products, Users } from "@prisma/client";
import axios from "axios";
import { useQuery } from "react-query";
import useStore from "../../store/useStore";

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
	businesses: Businesses[];
	products: Products[];
	jobs: Jobs[];
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
		messages: 0,
		followers: 0,
		following: 0,
	};
	if (isSuccess) handleSuccess();

	return { profilePreview, isSuccess };

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

		function getNotifications() {
			return details.notifications.reduce((accumulator, currentValue) => {
				if (currentValue.seen) return accumulator;
				return accumulator + 1;
			}, 0);
		}
	}
}
