import { Follows, Users } from "@prisma/client";
import axios from "axios";
import { useQuery } from "react-query";
import { avatar_1, avatar_2, avatar_3 } from "../assets/avatars";
import useStore from "../store/useStore";
import { FollowProps } from "../types/types";
import { getElapsedTime } from "../utils/fn";

type ServerData = (Follows & { follower: Users })[];

export default function useFollowers() {
	const { user } = useStore();
	const { data, isSuccess } = useQuery<{ data: ServerData }>(
		["follows/followers", { userId: user.id }],
		() => {
			return axios.get("/api/follows/followers/" + user.id);
		},
		{ enabled: !!user.id }
	);
	let followers: FollowProps[] = [];

	if (isSuccess) handleSuccess();

	return { followers, isSuccess };

	function handleSuccess() {
		if (!data?.data) return;

		followers = data.data.map((follow) => {
			return {
				avatar: follow.follower.profileImage.url,
				name: follow.follower.firstName + " " + follow.follower.lastName,
				time: getElapsedTime(follow.createdAt.toString()),
				_id: follow.id,
				userId: follow.followerId,
			};
		});
	}
}
