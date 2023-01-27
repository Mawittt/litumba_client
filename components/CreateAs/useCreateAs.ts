import axios, { AxiosError } from "axios";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { avatar_1, brand_avatar_1, brand_avatar_2 } from "../../assets/avatars";
import useStore from "../../store/useStore";
import { CreateAsProps } from "../../types/types";

interface Author {
	avatar: string;
	name: string;
	id: string;
	isBusiness: boolean;
}

export default function useCreateAs({ setAuthor }: CreateAsProps) {
	const { user } = useStore();
	const [viewOthers, setViewOthers] = useState(false);
	const [currentAuthor, setCurrentAuthor] = useState<Author>();
	let otherAuthors = useRef<Author[]>([]);
	const { data, isSuccess, isLoading } = useQuery<{ data: Author[] }, AxiosError>(
		["createAs", user.id],
		() => {
			return axios.get("/api/user/createAs?id=" + user.id);
		},
		{ enabled: !!user.id }
	);

	useEffect(() => {
		if (isSuccess) handleSuccess();
	}, [isSuccess]);

	return { isLoading, viewOthers, currentAuthor, otherAuthors, toggleViewOthers, updateCurrentAuthor };

	function toggleViewOthers() {
		setViewOthers((state) => !state);
	}
	function updateCurrentAuthor(index: number) {
		setCurrentAuthor(otherAuthors.current[index]);
		setViewOthers(false);
		setAuthor(otherAuthors.current[index].id, otherAuthors.current[index].isBusiness);
	}
	function handleSuccess() {
		if (!data?.data) return;
		otherAuthors.current = data.data;
		setCurrentAuthor(data.data[0]);
		setAuthor(data.data[0].id, data.data[0].isBusiness);
	}
}
