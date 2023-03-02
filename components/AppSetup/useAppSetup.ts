import { useEffect, useRef, useState } from "react";
import { useQueryClient } from "react-query";
import useStore from "../../store/useStore";
import { getCookie } from "cookies-next";
import { useNavigate } from "../../utils/hooks";
import { ROUTES } from "../../assets/constant";
import axios from "axios";
const preloader_fade_duration = 1000;

export default function useAppSetup() {
	const { user, socket, setUser } = useStore();
	const queryClient = useQueryClient();
	const [isLoading, setIsLoading] = useState(true);
	const { navigate, router } = useNavigate();
	const isLandingPage = useRef(router.pathname === "/");

	useEffect(() => {
		if (user.id) socket.connect(user.id, queryClient);
	}, [user.id, queryClient]);

	useEffect(() => {
		(async function () {
			const closePreloader = get_preload_closer();
			if (!getCookie("token")) {
				isLandingPage.current = true;
				navigate(ROUTES.landingPage);
				return;
			}
			close_preloader_after_timeout();
			const data = await axios.get("/api/user/userId?token=" + getCookie("token"));
			setUser({ id: data.data });
			closePreloader();

			function close_preloader_after_timeout() {
				setTimeout(() => {
					closePreloader();
				}, 3000);
			}
		})();
		animatePreloader();

		function get_preload_closer() {
			let checker = false;
			return () => {
				if (!checker) return (checker = true);
				const keyframes: Keyframe[] = [{ opacity: "1" }, { opacity: "0" }];
				const options: number | KeyframeAnimationOptions = {
					duration: preloader_fade_duration,
				};
				const preloaderAnimation = document.getElementById("preloader")?.animate(keyframes, options);
				preloaderAnimation?.pause();
				preloaderAnimation?.play();
				setTimeout(() => {
					const preloader = document.getElementById("preloader");
					if (preloader) {
						preloader.style.display = "none";
					}
				}, preloader_fade_duration);
			};
		}
	}, []);

	return { isLandingPage };
}

export function fade_preloader() {
	const keyframes: Keyframe[] = [{ opacity: "1" }, { opacity: "0" }];
	const options: number | KeyframeAnimationOptions = {
		duration: preloader_fade_duration,
	};
	const preloaderAnimation = document.getElementById("preloader")?.animate(keyframes, options);
	preloaderAnimation?.pause();
	preloaderAnimation?.play();
	setTimeout(() => {
		const preloader = document.getElementById("preloader");
		if (preloader) {
			preloader.style.display = "none";
		}
	}, preloader_fade_duration);
}

function animatePreloader() {
	const bar = document.getElementById("preload-bar");
	if (!bar) return;
	bar.animate([{ left: "-100%" }, { left: "100%" }, { left: "-100%" }], {
		duration: 3000,
		iterations: Infinity,
	});
}
