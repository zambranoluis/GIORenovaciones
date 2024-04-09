import { Link } from "react-router-dom"

import Gif404 from "../assets/roofRepair.gif"
import { FcHome } from "react-icons/fc";


const NotFound = () => {
	const styles = {
		container: "h-[90vh] flex flex-col justify-center items-center gap-[20px] p-[20px]",
		divTitle: "flex gap-[10px] w-full justify-center items-center text-white text-center",
		titleH1: "text-6xl font-poppins font-bold animate-bounce text-[#ef8f21]",
		titleIcon: "h-[60px] w-[60px] text-[#ef8f21]",
		divGif: "w-full flex justify-center items-center",
		gif: "w-[380px] rounded-md outline outline-[2px] outline-[#ef8f21]",
		divBottom: "w-full flex flex-col justify-center items-center text-white text-center gap-[10px]",
		bottomText: "text-2xl font-poppins",
		anchorButtonHome: "flex flex-col justify-center items-center",
		buttonHome: "h-[60px] w-[60px]",
		textHome: "text-[#ef8f21] text-center font-poppins text-2xl font-bold animate-pulse "
	}


	return (
		<>
			<section className={styles.container}>
				<div className={styles.divTitle}>
					<h1 className={styles.titleH1}>Error 404</h1>
				</div>
				<div className={styles.divGif}>
					<img className={styles.gif} src={Gif404} alt="Gif404" />
				</div>
				<div className={styles.divBottom}>
					<p className={styles.bottomText}>The page that you are trying to reach does not exist or it is being built or repaired by our team!</p>
					<p className={styles.bottomText}>Sorry for the inconvenience, please check the URL and try again.</p>
				</div>
				<Link to="/" className={styles.anchorButtonHome}>
					<FcHome className={styles.buttonHome} />
					<p className={styles.textHome}>go back to homepage</p>
				</Link>
			</section>
		</>
	);
}

export default NotFound;
