import Link from "next/link";
import { useRef, useState } from "react";
import useStore from "../store/useStore";
import styles from "../styles/Home.module.css";

export default function Home() {
	const [client_width, set_client_width] = useState<string | null | number>(null);
    const {authState, setAuthState} = useStore()
	let timeout = useRef<any>();

	function display_screen_width() {
		set_client_width(window.innerWidth);
		if (timeout) clearTimeout(timeout.current);
		timeout.current = setTimeout(() => {
			set_client_width(null);
		}, 2000);
	}
    function setIt(){
        setAuthState(!authState)
        setAuthState(!authState)
    }
   
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a>Litumba!</a>
				</h1>
				<p className="font-semibold max-[644px]:text-blue-500">
					this is a platform in which Bakwerians can meet and share and help each other.
				</p>
				{client_width && <div>the width of this screen is: {client_width}</div>}
				<button className="btn-blue" onClick={display_screen_width}>
					click on me to see your screen width
				</button>
                <Link href={"/about"}><button className="btn-blue">About</button></Link>

                {authState ? "this is not a function"  : "there is no auth state"}

                <button className="btn-blue" onClick={setIt}> change auth state</button>

			</main>
		</div>
	);
}
