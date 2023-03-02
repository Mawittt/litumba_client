import { Businesses, Jobs, Users } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { brand_avatar_1 } from "../assets/avatars";
import { ROUTES } from "../assets/constant";
import { business_image_1 } from "../assets/images";
import { JobDetailsProps } from "../types/types";
import { getElapsedTime } from "../utils/fn";
import { useNavigate, useOwner } from "../utils/hooks";

type ServerJobInterface = Jobs & { authorUser: Users; authorBusiness: Businesses & { author: Users } };

export default function useJobDetails() {
	const { navigate, router } = useNavigate();
	const { data, isSuccess, isLoading } = useQuery<{ data: ServerJobInterface }, Error>(["jobs", router.query._id], () => {
		return axios.get("/api/jobs/" + router.query._id);
	});

	let details: JobDetailsProps | undefined;

	if (isSuccess) handleSuccess();

	const self = useOwner(data?.data.authorUserId || data?.data.authorBusiness.authorId || "");
	return { isLoading, details, gotoBrand, openChat, goBack, self, openJobEditor };

	function gotoBrand() {
		if (data?.data.authorUserId) navigate(ROUTES.profile + "/" + data.data.authorUserId);
		if (data?.data.authorBusinessId) navigate(ROUTES.businesses.index + "/" + data.data.authorBusinessId);
	}
	function openChat() {
		navigate(ROUTES.conversations + "/" + data?.data.authorUserId || data?.data.authorBusiness.authorId || "");
	}
	function goBack() {
		router.back();
	}
	function openJobEditor() {
		navigate(ROUTES.jobs.update + "/" + details?._id);
	}
	function handleSuccess() {
		const jobFromServer = data?.data;
		if (!jobFromServer) return;
		const job: JobDetailsProps = {
			cover: jobFromServer?.authorBusiness?.coverImage.url || jobFromServer?.authorUser.coverImage.url,
			avatar: jobFromServer?.authorBusiness?.logo.url || jobFromServer.authorUser.profileImage.url,
			author: jobFromServer?.authorBusiness?.name || jobFromServer.authorUser.firstName + " " + jobFromServer.authorUser.lastName,
			email: jobFromServer.authorBusiness?.email || jobFromServer.authorUser.email,
			website: jobFromServer.authorBusiness?.website || "",
			time: getElapsedTime(jobFromServer.createdAt.toString()),
			description: jobFromServer.description,
			price: jobFromServer.pricing,
			niche: jobFromServer.niche,
			urgency: jobFromServer.urgency || "",
			schedule: jobFromServer.schedule,
			available: jobFromServer.authorBusiness?.author.online || jobFromServer.authorUser.online,
			_id: jobFromServer.id,
			isBrand: isBrand(),
			authorId: jobFromServer.authorBusiness?.id || jobFromServer.authorUser.id,
			location: jobFromServer.city + " " + jobFromServer.country,
			title: jobFromServer.title,
			expertise: jobFromServer.expertise,
		};

		details = job;

		function isBrand() {
			return Boolean(jobFromServer?.authorBusiness);
		}
	}
}
