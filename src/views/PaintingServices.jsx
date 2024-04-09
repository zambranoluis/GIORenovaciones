import PaintingServicesCTA from "../assets/PaintingServices/PaintingServicesCTA.jpeg"

const PaintingServices = () => {
	const style = {
		mainPaintingServices: "flex flex-col justify-center items-center gap-[50px]",

		sectionCTA: "relative flex w-full h-[50vh] justify-center items-center bg-cover bg-bottom bg-no-repeat bg-fixed",
		CTAContainer: "flex relative",
		divBlurCTA: "flex absolute w-full h-full backdrop-blur-[2px] bg-[#ef8f21]  bg-opacity-35 rounded-sm",
		divTitle: "flex justify-center items-center z-10 p-3",
		titleCTA: "text-white text-center text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] ",


		infoSection:" h-[40vh] w-full bg-none flex justify-center items-center",
	}
	return (
		<main className={style.mainPaintingServices}>
			<section className={style.sectionCTA} style={{ backgroundImage: `url(${PaintingServicesCTA})` }}>
				<div className={style.CTAContainer}>
					<div className={style.divBlurCTA}></div>
					<div className={style.divTitle}>
						<h1 className={style.titleCTA}>Painting Services</h1>
					</div>
				</div>
			</section>


			<section className={style.infoSection}>

			</section>
		</main>
	);
}

export default PaintingServices;
