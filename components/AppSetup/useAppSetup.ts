import { useEffect } from "react";
import { useQueryClient } from "react-query";
import useStore from "../../store/useStore";

export default function useAppSetup() {
	const { user, socket } = useStore();
	const queryClient = useQueryClient();
	useEffect(() => {
		socket.connect(user.id, queryClient);
	}, []);

	return {};
}
