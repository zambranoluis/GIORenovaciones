import PaintingServicesCTA from "../assets/PaintingServices/PaintingServicesCTA.jpeg"
import RainsGuttersCTA from "../assets/RainGutters/RainGuttersCTA.jpg"
import Rain from "../assets/RainGutters/rain.webp"
import PaintingHouse from "../assets/PaintingServices/house-painting.webp"
import Painting from "../assets/PaintingServices/painting-red.webp"

const RainGuttersAndPaintingServices = () => {
	const style = {
		mainPaintingServices: "flex flex-col justify-center items-center gap-[50px]",

		sectionCTA: "relative flex w-full h-[50vh] justify-center items-center bg-cover bg-top bg-no-repeat md:bg-fixed",
		sectionCTAR: "relative flex w-full h-[50vh] justify-center items-center bg-cover bg-top md:bg-center bg-no-repeat md:bg-fixed",
		CTAContainer: "flex relative",
		divTitle: "flex justify-center items-center z-10 p-3",
		titleCTA: "text-white text-center font-poppins text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] ",

		infoSection: "flex flex-col w-[90%] bg-none flex justify-center items-center pb-24",
		containerGutters: "flex flex-col  lg:flex-row  justify-center items-center ",
		divImgGutters: "lg:w-[50%] md:w-[70%] lg:w-[50%] ",
		divGutterText: "lg:w-[50%] flex flex-col items-center justify-center  gap-[20px] ",

		container: "flex flex-wrap  items-center justify-center h-full w-[90%] py-16",

		divImg: "flex items-center justify-center w-full h-[80%] lg:w-[50%] p-4 md:p-8 lg:p-16",
		dividerHorizontal: "flex w-[80%] h-[1px] bg-[#0a4334] ",
		divText: "flex flex-col items-center justify-center w-full p-4 md:p-8 gap-6",

		divition: "flex items-center justify-center w-full py-2 w-[90%]",
		textDivition: "text-3xl font-bold text-white font-poppins text-center",
		textDivition2: "text-3xl font-bold text-[#ef8f21] text-center",

		infoSection2: "flex flex-col w-[100%] bg-none flex justify-center items-center ",
		container2: "flex flex-col bg-cover w-[100%] justify-center bg-center bg-no-repeat bg-fixed",
		container3: "flex flex-wrap justify-center items-start xl:px-40 gap-20 py-20 bg-black/60 w-[100%]",
		divText2: "flex flex-col items-center justify-center w-full  p-6 md:p-8 ",
		divText3: "flex flex-col items-center justify-center w-full lg:w-[50%] p-6 md:p-8 gap-6",

		container4: "flex flex-col bg-cover justify-center bg-top bg-no-repeat bg-fixed",
		tarjeta: "flex flex-col items-start justify-start w-[280px] h-[250px] md:h-[180px] md:w-[380px] p-2 backdrop-blur-sm bg-white/10 rounded-lg shadow-sm "

	}

	const servicesPainting = [
		{
			id: 0,
			title: "Residential Interior Painting: ",
			text: "This service focuses on breathing new life into interiors, with color choices that align with the homeowner's style and preferences."
		},
		{
			id: 1,
			title: "Comercial Painting: ",
			text: "Designed for businesses, commercial painting services create an environment that resonates with the brand's identity and values.",
		},
		{
			id: 2,
			title: "Exterior Painting: ",
			text: "Revamping exteriors not only enhances curb appeal but also protects surfaces from weather-induced wear and tear.",
		}
	]

	return (
		<main className={style.mainPaintingServices}>
			<section className={style.sectionCTAR} style={{ backgroundImage: `url(${RainsGuttersCTA})` }}>
				<div className={style.CTAContainer}>
					<div className={style.divTitle}>
						<h1 className={style.titleCTA}>Rain Gutters</h1>
					</div>
				</div>
			</section>

			<section className={style.infoSection}>

				<div className={style.containerGutters}>

					<div className={style.divImgGutters}>
						<img src={Rain} alt="RainGutters" className="w-[100%] h-full" />
					</div>

					<div className={style.divGutterText}>
						<div className={style.divText}>
							<h1 className="text-3xl font-poppins text-center pt-4 font-bold text-[#ef8f21]">Efficient Rain Gutters for Your Property</h1>
							<p className="text-lg text-[#0a4334] font-poppins text-justify pb-8">Gio Renovations specializes in installing top-quality rain gutters that efficiently collect and divert rainwater, protecting your property from potential leaks, mold growth, and structural issues.</p>
						</div>
						<div className={style.dividerHorizontal}></div>
						<div className={style.divText}>
							<h1 className="text-3xl font-poppins text-center font-bold pt-8 text-[#ef8f21]">Why are gutters important for a Property?</h1>
							<p className="text-lg text-[#0a4334] font-poppins text-justify">
								Rain gutters play a crucial role in safeguarding your home from various potential damages. They effectively prevent water damage by directing rainwater away from your home is foundation, walls, and roof, thus averting issues like mold, mildew, and structural damage. Moreover, rain gutters help preserve the siding of your home by preventing excessive water runoff, thus extending its lifespan and reducing maintenance costs.
							</p>
						</div>
					</div>


				</div>

			</section>







			<section className={style.sectionCTA} style={{ backgroundImage: `url(${PaintingServicesCTA})` }}>
				<div className={style.CTAContainer}>
					<div className={style.divTitle}>
						<h1 className={style.titleCTA}>Painting Services</h1>
					</div>
				</div>
			</section>

			<section className={style.infoSection2}>
				<div className={style.container}>
					<div className={style.divText3}>
						<h1 className="text-3xl font-bold text-center font-poppins text-[#ef8f21]">Professional Painting Services to Transform Your Space</h1>
						<p className="text-lg text-[#0a4334] text-justify">Our painting services are designed to breathe new life into your home or commercial property. From meticulous surface preparation to flawless finishes, we take pride in delivering exceptional results that enhance the beauty and durability of your interior and exterior surfaces.</p>
					</div>
					<div className={style.divImg}>
						<img src={PaintingHouse} alt="RainGutters" className="w-[75%] h-full" />
					</div>
				</div>
				<div className={style.container4} style={{ backgroundImage: `url(${Painting})` }}>
						<div className={style.container3}>
							<div className={style.divition}>
								<h1 className={style.textDivition}>Types Of Painting Services</h1>
							</div>
							{servicesPainting.map((item) => {
								return (
									<div
										key={item.id}
										className={style.tarjeta}
									>
										<h3 className="text-2xl font-bold font-poppins text-white">
											{item.title}
										</h3>
										<p className="text-lg text-white font-poppins text-left">
											{item.text}
										</p>
									</div>
								);
							})}
						</div>
					</div>
			</section>

		</main>
	);
}

export default RainGuttersAndPaintingServices;
