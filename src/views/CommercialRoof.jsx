import ReactPlayer from "react-player";

import CommercialRoofCTA from "../assets/CommercialRoof/CommercialRoofCTA.jpg"

import TypesBackground from "../assets/CommercialRoof/TypesBackground.jpeg"

import PictureBottom from "../assets/CommercialRoof/PictureBottomSite.jpg"

import { types } from "../assets/js/CommercialRoof"

const CommercialRoof = () => {

	const info = [
		{
			id: 0,
			title: "Age:",
			text: "The typical lifespan of a commercial roof varies with the material used. If your roof has surpassed this duration, replacement might be necessary."
		},
		{
			id: 1,
			title: "Extensive Damage:",
			text: "Pervasive cracks, tears, or blistering indicate significant damage, rendering replacement a practical choice.",
		},
		{
			id: 2,
			title: "Energy Inefficiency:",
			text: "Rising energy bills might stem from an inefficient roof, making replacement a cost-effective long-term solution."
		},
		{
			id: 3,
			title: "Frequent Repairs:",
			text: "If recurring repairs are draining resources, a replacement might provide respite from constant maintenance expenses."
		},
		{
			id: 4,
			title: "Changes in Business Needs:",
			text: "Structural modifications, increased load requirements, or technology upgrades might necessitate a roof replacement."
		}
	]


	const style = {
		mainCommercialRoof: "flex w-full flex-col justify-center items-center gap-[50px]",

		sectionCTA: "relative flex w-full h-[50vh] justify-center items-center bg-cover bg-bottom bg-no-repeat md:bg-fixed",
		CTAContainer: "flex relative w-full justify-center items-center",
		divTitle: "flex justify-center items-center z-10 p-",
		titleCTA: "text-white font-poppins text-center text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] ",


		infoSection: " h-[100vh] lg:h-[50vh] w-[90%] bg-none",
		container: "flex flex-wrap items-center justify-center h-full",
		divVideo:
			"flex items-center justify-center w-full lg:w-[50%] h-[30%] sm:h-[50%] md:h-[55%] lg:h-[60%] xl:h-[80%] ",
		divText:
			"flex flex-col items-start justify-center w-full lg:w-[50%] h-[40%] md:h-[50%] xl:h-[55%] px-12",

		typesSection: "w-full flex flex-col justify-center items-center  py-[50px] gap-[70px]",
		divTitleTypes: "flex items-center justify-center py-2 bg-[#0a4334] w-[90%]",
		titleTypes: "text-4xl font-poppins font-bold text-white text-center",
		typesContainer: " flex flex-wrap flex-col md:flex-row w-[90%] justify-center items-center gap-[80px] ",
		divType: "w-[350px] h-[350px] lg:w-[260px] lg:h-[260px] flex flex-col justify-center items-center gap-[30px]",
		divImgType: "h-[70%]  ",
		imgType: "w-full h-full hover:scale-110 md:hover:scale-125",
		divNameType: "h-[20%]",
		nameType: "text-2xl text-[#ef8f21] text-center",

		replacementContainer: " flex flex-col justify-center items-center w-[100%] ",
		divTitleReplacement: "flex items-center justify-center w-full py-2 px-2",
		titleReplacement: "text-3xl font-bold font-poppins text-white w-full text-center",
		replacements: "bg-black/60 pt-10",

		container2: "flex flex-col bg-cover w-[100%] justify-center bg-top bg-no-repeat bg-fixed",
		container3: "flex flex-wrap justify-center items-start xl:px-[120px] 2xl:px-[390px] gap-10 py-20 w-[100%]",
		tarjeta: "flex flex-col items-start justify-start w-[280px] h-[230px] p-2 backdrop-blur-sm bg-white/10 rounded-lg shadow-sm ",

		pictureBottomSection: "h-[70vh] w-[100%] bg-center bg-cover bg-no-repeat mt-20",

	}
	return (
		<main className={style.mainCommercialRoof}>
			<section className={style.sectionCTA} style={{ backgroundImage: `url(${CommercialRoofCTA})` }}>
				<div className={style.CTAContainer}>
					<div className={style.divTitle}>
						<h1 className={style.titleCTA}>Commercial Roof</h1>
					</div>
				</div>
			</section>


			<section className={style.infoSection}>
				<div className={style.container}>
					<div className={style.divVideo}>
						<ReactPlayer url="https://www.youtube.com/watch?v=71AxydsvK5Q" controls={true} width="75%" height="100%" />
					</div>
					<div className={style.divText}>
						<h2 className="text-3xl font-bold font-poppins 2xl:px-16 text-center text-[#ef8f21]">
							Commercial Roofing Solutions Tailored to Your Business
						</h2>

						<p className="text-lg text-justify pt-4 font-poppins text-[#0a4334]">
							At Gio Renovations, we specialize in providing tailored commercial roofing solutions to suit the specific needs of your business. We are dedicated to ensuring the durability, efficiency, and longevity of your roof through our expertise and commitment to quality.
						</p>
					</div>
				</div>
			</section>

			<section className={style.typesSection} >
				<div className={style.divTitleTypes}>
					<h1 className={style.titleTypes}>
						Types Of Commercial Roofs
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
								<h2 className={style.titleReplacement}>Commercial Roof Replacement: When is the time?</h2>
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
											<p className="text-lg text-left font-poppins pt-2 text-white">
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


export default CommercialRoof;
