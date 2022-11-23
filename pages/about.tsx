import axios from "axios";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../Layout/Layout";
import { selectAuthState, setAuthState } from "../store/slice";
import useStore from "../store/useStore";
import { LikeIcon } from "../assets/icons";

export default function About(props: { data: string } ) {
	const { authState, setAuthState } = useStore();
	console.log("i doubt where this one will run");
	return (
		<>
			<Link href={"/"}>
				<button className="btn-blue">this is a button </button>
			</Link>
			<p>{props.data}</p>

			{authState ? "there is an auth State" : "there is no auth state"}
			<button className="btn-blue" onClick={() => setAuthState(!authState)}>
				change auth state
			</button>
            <LikeIcon />
		</>
	);
}

export async function getServerSideProps(context: any) {
	console.log("should run on the server side");
	const data = {data : "data"}

	return {
		props: {
			data: data.data,
		},
	};
}
