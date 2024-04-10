import ReactPlayer from "react-player";

import OurVendorsCTA from "../assets/OurVendors/OurVendorsCTA.jpg";

import Vendor1 from "../assets/OurVendors/Vendor12.png";
import Vendor2 from "../assets/OurVendors/Vendor3.webp";
import Vendor3 from "../assets/OurVendors/Vendor4.jpg";

const OurVendors = () => {

	const vendors = [
		{
			id: 1,
			name: "Together - Leaders in Roofing Products",
			img: Vendor1
		},
		{
			id: 3,
			name: "Known As The Number One In Painting Products Worldwide",
			img: Vendor2
		},
		{
			id: 4,
			name: "America's Leader In Solar Powered Ventilation",
			img: Vendor3
		}
	]



	const style = {
		mainOurVendors: "flex flex-col justify-center items-center",

		sectionCTA: "relative flex w-full h-[50vh] justify-center items-center bg-cover bg-bottom bg-no-repeat md:bg-fixed",
		CTAContainer: "flex relative",
		divTitle: "flex justify-center items-center z-10 p-3",
		titleCTA: "text-white text-center text-5xl font-poppins font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] ",

		sectionVendors: "flex w-full ",
		vendorsContainer: "flex flex-col w-full  justify-center items-center py-[70px] pb-[120px] ",
		divPartner: "flex flex-col w-[90%] justify-center items-center  ",



		partner: "flex flex-col  justify-center items-center gap-[50px] py-[70px] px-[20px] lg:flex-row w-full",

		divPartnerVideo: "flex justify-center items-center h-[350px] w-[350px] lg:w-[50%] lg:p-[20px]",
		partnerVideo: "w-full h-full",
		divPartnerPicture: "w-[400px] flex justify-center items-center lg:w-[50%] ",
		partnerPicture: "w-[350px] lg:w-[450px]",
		divPartnerTitle: "lg:w-[50%] flex ",
		partnerTitle: "text-center text-5xl font-bold font-poppins text-[#0a4334] flex",
		dividerHorizontal: "h-[2px] w-[95%] bg-[#0a4334]",

		sectionSlogan: "w-full bg-[#0a4334] justify-center items-center h-[100px] mb-[150px]",
		divSlogan: "flex w-full h-full justify-center items-center px-3",
		slogan: "text-white text-center text-3xl font-poppins font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] ",

	}
	return (
		<main className={style.mainOurVendors}>
			<section className={style.sectionCTA} style={{ backgroundImage: `url(${OurVendorsCTA})` }}>
				<div className={style.CTAContainer}>
					<div className={style.divTitle}>
						<h1 className={style.titleCTA}>Our Vendors</h1>
					</div>
				</div>
			</section>

			<section className={style.sectionVendors} >
				<div className={style.vendorsContainer}>
					<div className={style.divPartner}>
						<div className={style.partner} >
							<div className={style.divPartnerVideo}>
								<ReactPlayer url="https://youtu.be/KOfpriMOJKs?si=UjyIrvK05Rxvi5qe" className={style.partnerVideo} />
							</div>
							<div className={style.divPartnerTitle}>
								<h3 className={style.partnerTitle}>We partnered with best vendors to deliver quality.</h3>
							</div>
						</div>
						<div className={style.dividerHorizontal}></div>
					</div>
					{vendors.map((item) => (
						<div key={item.id} className={style.divPartner}>
							<div className={style.partner} >
								<div className={style.divPartnerPicture}>
									<img src={item.img} alt={item.name} className={style.partnerPicture} />
								</div>
								<div className={style.divPartnerTitle}>
									<h3 className={style.partnerTitle}>{item.name}</h3>
								</div>
							</div>
							<div className={style.dividerHorizontal}></div>
						</div>
					))}
				</div>
			</section>
			<section className={style.sectionSlogan} >
				<div className={style.divSlogan}>
					<h1 className={style.slogan}>Teamwork is The Key To Achieving Success</h1>
				</div>
			</section>
		</main>
	);
}

export default OurVendors;
