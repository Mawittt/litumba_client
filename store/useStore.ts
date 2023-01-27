import { useSelector, useDispatch } from "react-redux";
import { setUser, selectUser, selectSocket } from "./slice";

export default function useStore() {
	const dispatch = useDispatch();

	return {
		user: useSelector(selectUser),
		setUser: (state: any) => {
			dispatch(setUser(state));
		},
		socket: useSelector(selectSocket),
	};
}
