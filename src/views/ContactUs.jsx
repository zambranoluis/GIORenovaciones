// import MapContainer from '../assets/js/GoogleMap';

import Mapa from "../assets/js/GoogleMap";

import ContactUsCTA from "../assets/ContactUs/ContactUsCTA.jpg";
import Office from "../assets/ContactUs/Office.jpg";

import {
	socialMedia,
} from "../assets/js/ContactUs";

import FormFigures from "../assets/ContactUs/FormFigures.png";

const ContactUs = () => {
	const style = {
		mainContactUs: "flex flex-col justify-center items-center gap-[50px]",

		sectionCTA: "relative flex w-full h-[50vh] justify-center items-center bg-cover bg-bottom bg-no-repeat bg-fixed",
		CTAContainer: "flex relative",
		divTitle: "flex justify-center items-center z-10 p-3",
		titleCTA: "text-white text-center text-5xl font-poppins font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] ",

		officeSection: " w-full flex justify-center items-center py-[50px]",
		divOfficeContainer: " flex flex-col w-full justify-center items-center gap-[20px] px-6",
		divOfficeTitle: "",
		officeTitle: "text-center text-3xl font-poppins font-bold",
		officeContainer: "flex flex-col w-full md:flex-row  justify-center items-center gap-[30px]",
		divOfficeMap: "flex justify-center items-center  h-[380px] md:w-[50%]  aspect-square",
		divOfficePicture: "flex justify-center items-center  h-[380px] md:w-[50%] aspect-square",
		officePicture: "w-full h-full",

		socialMediaSection: "flex flex-col w-full justify-center items-center gap-[20px]",
		divSMTitle: "",
		SMTitle: "text-3xl font-bold",
		SMContainer: "flex w-full h-[130px] sm:h-[150px] justify-center items-center bg-slate-100 gap-3 px-6 md:gap-10 lg:gap-20",
		divSM: "flex justify-center items-center h-[80px] w-[80px]",
		iconSM: "rounded-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] cursor-pointer hover:scale-125 ",

		formSection: "flex w-[90%] flex-col md:flex-row gap-[30px] mb-[100px] justify-center items-center ",
		divFormTitle: "w-full",
		formTitle: "text-center text-4xl font-poppins font-bold text-[#0a4334] ",
		formContainer: "flex flex-col w-full max-w-[600px] p-6  justify-center items-center rounded-md bg-cover bg-no-repeat ",
		form: "flex flex-col gap-3 w-full py-[10px] justify-center items-center p-[30px] ",

		divFieldName: "flex gap-3 w-full justify-between items-center z-10 ",
		divFirstName: " flex flex-col gap-[5px] w-full",
		divLabelFirstName: " text-[#126e56] text-xl font-poppins font-bold",
		labelFirstName: "drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)]",
		divInputFirstName: "",
		inputFirstName: "p-[2px] pl-[5px] w-full font-poppins  rounded-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] ",
		divLastName: "w-full flex flex-col gap-[5px]",
		divLabelLastName: " text-[#126e56] text-xl font-poppins font-bold",
		labelLastName: "drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)]",
		divInputLastName: "",
		inputLastName: "p-[2px] pl-[5px] w-full font-poppins rounded-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]",


		divFieldMailPhone: "flex gap-3 w-full justify-between items-center z-10",
		divMail: "flex flex-col gap-[5px] w-full",
		divLabelMail: " text-[#126e56] text-xl font-poppins font-bold",
		labelMail: "drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)]",
		divInputMail: "",
		inputMail: "p-[2px] pl-[5px] w-full  rounded-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]",
		divPhone: "w-full flex flex-col gap-[5px]",
		divLabelPhone: " text-[#126e56] text-xl font-bold",
		labelPhone: "drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)]",
		divInputPhone: "",
		inputPhone: "p-[2px] pl-[5px] w-full font-poppins rounded-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]",

		divFieldMessage: "w-full flex flex-col gap-[5px] justify-center items-center z-10",
		divLabelMessage: " text-[#126e56] text-xl font-bold font-poppins flex self-start ",
		labelMessage: "drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)]",
		divInputMessage: "w-full",
		inputMessage: "p-[2px] pl-[5px] w-full h-[300px] font-poppins drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]",

		divWarnings: "flex w-full pl-[10px]",
		firstWarning: "text-white font-poppins",

		divButton: "flex w-full justify-center items-center z-10",
		button: "bg-[#126e56] hover:bg-[#0a4334] text-white font-poppins py-[5px] px-[20px] rounded-md cursor-pointer ",
	}

	return (
		<main className={style.mainContactUs}>
			<section className={style.sectionCTA} style={{ backgroundImage: `url(${ContactUsCTA})` }} >
				<div className={style.CTAContainer}>
					<div className={style.divTitle}>
						<h1 className={style.titleCTA}>Contact Us</h1>
					</div>
				</div>
			</section>

			<section className={style.officeSection} >
				<div className={style.divOfficeContainer}>
					<div className={style.divOfficeTitle}>
						<h1 className={style.officeTitle}>Visit our office or call us today!</h1>
					</div>
					<div className={style.officeContainer}>
						<div className={style.divOfficeMap}>
							<Mapa />
						</div>
						<div className={style.divOfficePicture}>
							<img src={Office} alt="OfficePicture" className={style.officePicture} />
						</div>
					</div>
				</div>
			</section>

			<section className={style.socialMediaSection} >
				<div className={style.divSMTitle}>
					<h1 className={style.SMTitle}>Social Media</h1>
				</div>
				<div className={style.SMContainer}>
					{socialMedia.map((social) => (
						<div key={social.id} className={style.divSM}>
							<img src={social.src} alt={social.title} className={style.iconSM} />
						</div>
					))}
				</div>
			</section>

			<section className={style.formSection}  >
				<div className={style.divFormTitle}>
					<h1 className={style.formTitle}>GET YOUR FREE CONSULTATION AND A FREE ESTIMATE REQUEST HERE!</h1>
				</div>
				<div className={style.formContainer}>
					<form action="" className={style.form} >
						<div className={style.divFieldName}>
							<div className={style.divFirstName}>
								<div className={style.divLabelFirstName}>
									<label htmlFor="Name" className={style.labelFirstName}>First Name:</label>
								</div>
								<div className={style.divInputFirstName}>
									<input type="text" name="Name" required="true" placeholder="John" className={style.inputFirstName} />
								</div>
							</div>
							<div className={style.divLastName}>
								<div className={style.divLabelLastName}>
									<label htmlFor="Name" className={style.labelLastName}>Last Name:</label>
								</div>
								<div className={style.divInputLastName}>
									<input type="text" name="Name" required="true" placeholder="Doe" className={style.inputLastName} />
								</div>
							</div>
						</div>
						<div className={style.divFieldMailPhone}>
							<div className={style.divMail}>
								<div className={style.divLabelMail}>
									<label htmlFor="Email" className={style.labelMail}>Email:</label>
								</div>
								<div className={style.divInputMail}>
									<input type="email" name="Email" required="true" placeholder="mail@example.com" className={style.inputMail} />
								</div>
							</div>
							<div className={style.divPhone}>
								<div className={style.divLabelPhone}>
									<label htmlFor="Phone" className={style.labelPhone}>Phone:</label>
								</div>
								<div className={style.divInputPhone}>
									<input type="text" name="Phone" required="true" placeholder="123-456-7890" className={style.inputPhone} />
								</div>
							</div>
						</div>
						<div className={style.divFieldMessage}>
							<div className={style.divLabelMessage}>
								<label htmlFor="Message" className={style.labelMessage}>Message:</label>
							</div>
							<div className={style.divInputMessage}>
								<textarea type="text" name="Message" required="true" placeholder="I'm interested in..." className={style.inputMessage} />
							</div>
						</div>
						<div className={style.divWarnings}>
							<p className={style.firstWarning}>(*) Required Field</p>
						</div>
						<div className={style.divButton}>
							<input type="submit" value="Submit" className={style.button} />
						</div>
					</form>
				</div>
			</section>
		</main>
	);
}

export default ContactUs;
