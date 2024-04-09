import { Link } from "react-router-dom"

import logo from "../assets/GIOFULL.png"



const Footer = () => {

	const style = {
		footer: "flex flex-col  w-full text-black justify-center items-center bg-slate-300 py-[20px]",

		infoSection: "flex z-[2] w-[90%] md:w-[70%] relative justify-center items-center",

		infoContainer: "gap-[30px] py-[20px]  px-[10px] flex flex-col min-[900px]:flex-row justify-between items-center w-full ",

		divCompany: "flex flex-col justify-center items-center min-[900px]:w-[40%] py-[10px] gap-[5px] ",
		divLogo: "w-full flex flex-col justify-center items-center",
		linkLogo: "",
		logo: "max-w-[250px] drop-shadow-[0_0.4px_0.4px_rgba(255,255,255,1)]",
		divLicense: "",
		license: "text-center",


		divSuscribe: "flex flex-col justify-center items-center min-[900px]:w-[35%] py-[10px]",
		divInput: "flex flex-col justify-center items-center gap-[10px]",
		inputSuscribe: " w-[300px] py-[5px] px-[10px] font-poppins text-black rounded-sm outline-none focus:outline focus:outline-[#ef8f21]",
		buttonSuscribe: " bg-[#0a4334] py-[5px] w-[150px] font-poppins  text-white hover:bg-green-900 rounded-md text-center font-bold ",
		divText: "",


		copyrightSection: "flex justify-center items-center w-full",
	}

	return (
		<footer className={style.footer} >
			<section className={style.infoSection}>
				<div className={style.infoContainer}>
					<div className={style.divCompany}>
						<div className={style.divLogo}>
							<Link to={"/"} className={style.linkLogo}>
								<img src={logo} alt="LogoGIORenovations" className={style.logo} />
							</Link>
							<div className={style.divLicense}>
								<p className={style.license}>Enhance Your Home in Orlando – Florida.Roofing License CCC – 1335402</p>
							</div>
						</div>
					</div>
					<div className={style.divSuscribe}>
						<div className={style.divInput}>
							<input type="mail" placeholder="Enter your email here..." className={style.inputSuscribe} />
							<button className={style.buttonSuscribe}>Suscribe now!</button>
						</div>
						<div className={style.divText}>
							<p>Subscribe to our newsletter</p>
						</div>
					</div>

				</div>
			</section>
			<section className={style.copyrightSection}>
				<p>• © 2024 Gio Renovations Inc. All rights reserved. •</p>
			</section>
		</footer>
	);
}

export default Footer;
