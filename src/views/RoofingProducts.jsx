

import IconCloseEnlarged from "../assets/RoofingProducts/IconCloseEnlarged.png"

import {
	solarVentilation,
	shinglesColors,
	OpenEnlargePicture,
	CloseEnlargePicture
} from "../assets/js/RoofingProducts";

import RoofingProductsCTA from "../assets/RoofingProducts/roofingProducts_cta.jpeg"

const RoofingProducts = () => {

	const style = {
		mainRoofingProducts: "flex flex-col justify-center items-center ",

		sectionCTA: "relative flex w-full h-[50vh] justify-center items-center bg-cover bg-bottom bg-no-repeat bg-fixed",
		CTAContainer: "flex relative",
		divTitle: "flex justify-center items-center z-10 p-3",
		titleCTA: "text-white font-poppins text-center text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] ",

		infoSection: "flex ",
		divSolarVent: "flex flex-col gap-[50px] py-[70px]",
		divTitleSV: "flex justify-center items-center ",
		titleSV: "text-4xl font-poppins text-[#ef8f21] font-bold",
		picturesContainerSV: "flex flex-wrap gap-[40px] justify-center items-center",
		divTypeSV: "flex flex-col gap-[25px] ",
		pictureSV: "",
		divPicture: "flex w-[250px] h-[250px] justify-center items-center p-3 hover:scale-125",
		imgSV: "",
		divName: "flex justify-center items-center",
		nameSV: "text-2xl text-[#0a4334] font-poppins font-semibold",

		shinglesSection: "flex flex-col w-[90%] justify-center items-center pt-[50px] pb-[150px] gap-[50px]",
		divTitleShingles: "flex items-center justify-center w-full py-2 bg-[#0a4334]",
		titleShingles: "text-4xl font-bold text-white",
		shinglesContainer: "flex relative justify-center items-center ",
		divShingles: "grid grid-cols-4 w-[85%] ",
		divShingle: "hover:scale-125 cursor-zoom-in",
		imgShingle: "",
		divEnlarged: " flex-col absolute z-[2] w-[90%] h-[105%] justify-center items-center",
		divBlurEnlarged: "flex absolute w-full h-full z-[-1] backdrop-blur-[2px]",
		divCloseContainer: "flex w-full bg-[#bbc0c5] justify-end items-center h-[5%] px-3",
		divClose: "flex justify-center items-center h-full ",
		iconClose: "h-[70%] max-h-[25px] cursor-pointer ",
		divEnlargedPicture: "h-[93%] p-4",
		imgEnlargedPicture: "h-full",
	}

	return (
		<main className={style.mainRoofingProducts}>
			<section className={style.sectionCTA} style={{ backgroundImage: `url(${RoofingProductsCTA})` }}>
				<div className={style.CTAContainer}>
					<div className={style.divTitle}>
						<h1 className={style.titleCTA}>Roofing Products</h1>
					</div>
				</div>
			</section>
			<section className={style.infoSection}>
				<div className={style.divSolarVent}>
					<div className={style.divTitleSV}>
						<h2 className={style.titleSV}>Solar Ventilation</h2>
					</div>
					<div className={style.picturesContainerSV}>
						{solarVentilation.map((item) => (
							<div key={item.id} className={style.divTypeSV} >
								<div className={style.divPicture}>
									<img src={item.img} alt={item.name} className={style.imgSV} />
								</div>
								<div className={style.divName}>
									<h2 className={style.nameSV}>{item.name}</h2>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className={style.shinglesSection}>
				<div className={style.divTitleShingles}>
					<p className={style.titleShingles}>Colors Of Shingles</p>
				</div>
				<div className={style.shinglesContainer}>
					<div className={style.divShingles}>
						{shinglesColors.map((item) => (
							<div
								key={item.id}
								id={`shingle${item.id}`}
								className={style.divShingle}
								onClick={(e) => { e.preventDefault(); OpenEnlargePicture(item); }}
							>
								<img src={item.img} alt={item.name} className={style.imgShingle} />
							</div>
						))}
					</div>
					<div id="divEnlarged" className={style.divEnlarged} style={{ display: "none" }}>
						<div className={style.divBlurEnlarged}></div>
						<div className={style.divCloseContainer}>
							<div className={style.divClose}>
								<img
									src={IconCloseEnlarged} alt="IconCloseEnlarged"
									className={style.iconClose}
									onClick={(e) => { e.preventDefault(); CloseEnlargePicture(); }}
								/>
							</div>
						</div>
						<div className={style.divEnlargedPicture}>
							<img id="enlargedPicture" src="" alt="EnlargedPicture" className={style.imgEnlargedPicture} />
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default RoofingProducts;
