import ReviewsCTA from "../assets/Reviews/ReviewsCTA.jpg"
import videos from "../assets/js/Reviews";
import ReactPlayer from "react-player";

const Reviews = () => {
	const style = {
		mainReviews: "flex flex-col justify-center items-center gap-[50px]",

		sectionCTA: "relative flex w-full h-[50vh] justify-center items-center bg-cover bg-bottom bg-no-repeat bg-fixed",
		CTAContainer: "flex relative",
		divTitle: "flex justify-center items-center z-10 p-3",
		titleCTA: "text-white text-center font-poppins text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] ",

		infoSection: " h-full w-full bg-none flex justify-center items-center",
		gridVideo: "grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full py-16 px-8 xl:px-24 justify-items-center",
		review: "h-[50vh] w-[360px] md:w-[ 400px] lg:w-[480px] xl:[600px] py-8",
		video: "w-full h-[70%]",
		textVideo: " flex flex-col justify-center items-center w-full h-[30%] border border-[#ef8f21]",
		text: "text-2xl font-bold font-poppins text-[#ef8f21]",
		text2: "text-2xl font-medium font-poppins text-[#0a4334]"
	}
	return (
		<main className={style.mainReviews}>
			<section className={style.sectionCTA} style={{ backgroundImage: `url(${ReviewsCTA})` }}>
				<div className={style.CTAContainer}>
					<div className={style.divTitle}>
						<h1 className={style.titleCTA}>Reviews</h1>
					</div>
				</div>
			</section>


			<section className={style.infoSection}>
				<div className={style.gridVideo}>
					{videos.map((review) => (
						<div className={style.review} key={review.id}>
							<div className={style.video}>
								<ReactPlayer url={review.link} width="100%" height="100%" />
							</div>
							<div className={style.textVideo}>
								<h1 className={style.text}>{review.location}</h1>
								<h1 className={style.text2}>{review.services}</h1>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}

export default Reviews;
