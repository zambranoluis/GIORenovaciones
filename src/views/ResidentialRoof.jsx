import ReactPlayer from "react-player";

import ResidentialRoofCTA from "../assets/ResidentialRoof/ResidentialRoofCTA.jpg"
import TypesBackground from "../assets/ResidentialRoof/TypesBackground.jpeg"
import PictureBottom from "../assets/ResidentialRoof/PictureBottomSite.webp"

import { types } from "../assets/js/ResidentialRoof"

const ResidentialRoof = () => {
	const info = [
		{
			id: 0,
			title: "Age:",
			text: "Most roofs have an expected lifespan. If your roof has exceeded this timeframe, it's wise to consider a replacement."
		},
		{
			id: 1,
			title: "Visible Damage:",
			text: "Cracked or missing shingles, sagging sections, and visible wear and tear are signs that a replacement may be necessary.",
		},
		{
			id: 2,
			title: "Water Stains:",
			text: "Interior water stains or mold growth indicate potential leaks, suggesting that the roof's integrity is compromised."
		},
		{
			id: 3,
			title: "High Energy Bills:",
			text: "An inefficient roof can lead to increased energy bills. If you notice a spike in utility costs, your roof's insulation might be compromised."
		},
		{
			id: 4,
			title: "Frequent Repairs:",
			text: "If you find yourself frequently repairing your roof, the cumulative costs might make a replacement a more economical choice."
		}
	]


	const style = {
		mainResidentialRoof: "flex flex-col justify-center items-center gap-[70px]",

		sectionCTA: "relative flex w-full h-[50vh] justify-center items-center bg-cover bg-bottom bg-no-repeat bg-fixed",
		CTAContainer: "flex relative",
		divTitle: "flex justify-center items-center z-10 p-3",
		titleCTA: "text-white text-center text-5xl font-poppins font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] ",

		infoSection: " h-[100vh] lg:h-[50vh] w-[90%] bg-none",
		container: "flex flex-wrap items-center justify-center h-full",
		divVideo:
			"flex items-center justify-center w-full lg:w-[50%] h-[30%] sm:h-[50%] md:h-[55%] lg:h-[60%] xl:h-[80%] ",
		divText:
			"flex flex-col items-start justify-center w-full lg:w-[50%] h-[40%] md:h-[50%] xl:h-[55%] px-16",

		typesSection: "w-full flex flex-col justify-center items-center  py-[50px] gap-[70px]",
		divTitleTypes: "flex items-center justify-center py-2 bg-[#0a4334] w-[90%]",
		titleTypes: "text-4xl font-bold text-white font-poppins text-center",
		typesContainer: " flex flex-wrap flex-col md:flex-row w-[90%] justify-center items-center gap-[40px] ",
		divType: "w-[350px] h-[350px] lg:w-[220px] lg:h-[220px] flex flex-col justify-center items-center gap-[30px]",
		divImgType: "h-[80%] ",
		imgType: "w-full h-full hover:scale-110 md:hover:scale-125",
		divNameType: "h-[20%]",
		nameType: "text-2xl font-bold text-[#ef8f21] font-poppins text-center",

		replacementContainer: " flex flex-col justify-center items-center w-[90%] ",
		divTitleReplacement: "flex items-center justify-center w-full py-2 px-2",
		titleReplacement: "text-3xl font-bold text-white font-poppins w-full text-center",
		replacements: "bg-black/60 pt-10",

		container2: "flex flex-col bg-cover w-[100%] justify-center bg-top bg-no-repeat bg-fixed",
		container3: "flex flex-wrap justify-center items-start lg:px-[10px] xl:px-[140px] 2xl:px-[390px] gap-10 py-20  w-[100%]",
		tarjeta: "flex flex-col items-start justify-start w-[280px] h-[200px] p-2 backdrop-blur-sm bg-white/10 rounded-lg shadow-sm ",

		pictureBottomSection: "h-[70vh] w-[90%] bg-cover bg-no-repeat mb-[100px]",
	}
	return (
		<main className={style.mainResidentialRoof}>
			<section className={style.sectionCTA} style={{ backgroundImage: `url(${ResidentialRoofCTA})` }}>
				<div className={style.CTAContainer}>
					<div className={style.divTitle}>
						<h1 className={style.titleCTA}>Residential Roof</h1>
					</div>
				</div>
			</section>

			<section className={style.infoSection}>
				<div className={style.container}>
					<div className={style.divVideo}>
						<ReactPlayer url="https://www.youtube.com/watch?v=71AxydsvK5Q" controls={true} width="75%" height="100%" />
					</div>
					<div className={style.divText}>
						<h2 className="text-3xl font-bold font-poppins text-center 2xl:px-16 text-[#ef8f21]">
							Your Residential Roof A Vital Protection for Your Home
						</h2>
						<p className="text-lg text-justify pt-4 font-poppins text-[#0a4334]">
							Your residential roof acts as a vital barrier protecting your home and loved ones from various weather conditions.  At Gio Renovations, we specialize in offering customized roofing solutions to address your specific residential requirements.
						</p>
					</div>
				</div>
			</section>

			<section className={style.typesSection} >
				<div className={style.divTitleTypes}>
					<h1 className={style.titleTypes}>
						Types Of Residencial Roofs
					</h1>
				</div>
				<div className={style.typesContainer}>
					{types.map((type) => (
						<div key={type.id} className={style.divType}>
							<div className={style.divImgType}>
								<img src={type.src} alt={type.name} className={style.imgType} />
							</div>
							<div className={style.divNameType}>
								<p className={style.nameType}>{type.name}</p>
							</div>
						</div>
					))}
				</div>

				<div className={style.replacementContainer} >
					<div className={style.container2} style={{ backgroundImage: `url(${TypesBackground})` }}>
						<div className={style.replacements}>
							<div className={style.divTitleReplacement}>
								<h2 className={style.titleReplacement}>Residential Roof Replacement: When Is It Time?</h2>
							</div>
							<div className={style.container3}>
								{info.map((item) => {
									return (
										<div
											key={item.id}
											className={style.tarjeta}
										>
											<h2 className="text-2xl font-poppins font-bold text-white">
												{item.title}
											</h2>
											<p className="text-lg font-poppins text-left pt-2 text-white">
												{item.text}
											</p>
										</div>
									);
								})}
							</div>
						</div>
					</div>

				</div>
			</section>

			<section className={style.pictureBottomSection} style={{ backgroundImage: `url(${PictureBottom})` }}>
			</section>
		</main>
	);
}

export default ResidentialRoof;
