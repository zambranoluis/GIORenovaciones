import ImageGallery from "react-image-gallery";
import images from "../assets/js/AbousUsGallery";
import "react-image-gallery/styles/css/image-gallery.css";

import AboutUsCTA from "../assets/AboutUs/workTeam.jpg"

import CEO_picture from "../assets/AboutUs/CEO.jpg"
import member1 from "../assets/AboutUs/member1.jpg"
import member2 from "../assets/AboutUs/member2.jpg"
import member3 from "../assets/AboutUs/member3.jpg"
import member4 from "../assets/AboutUs/member4.jpg"

import logoNRCA from "../assets/AboutUs/LogoNRCA.png"
import logoAtlas from "../assets/AboutUs/logoAtlas.png"



const AboutUs = () => {
	const style = {
		mainAboutUs: "flex flex-col justify-center items-center gap-[50px]",

		sectionCTA: "relative flex w-full h-[50vh] justify-center items-center bg-cover bg-no-repeat bg-fixed",
		CTAContainer: "flex relative",
		divTitle: "flex justify-center items-center z-10 p-3",
		titleCTA: "text-white text-center font-poppins text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] ",

		infoSection: "flex flex-col w-full gap-[50px] py-10 justify-center items-center ",

		missionVisionContainer: "flex flex-col w-[90%] lg:flex-row gap-[70px] justify-center items-center",

		divMission: "flex flex-col lg:w-[50%] gap-[20px] ",
		titleMission: "text-center text-5xl font-poppins font-bold",
		textMission: "text-justify font-poppins",
		divVision: "flex flex-col lg:w-[50%] gap-[20px]",
		titleVision: "text-center text-5xl font-poppins font-bold",
		textVision: "text-justify",

		teamContainer: "flex flex-col py-10 w-[90%]  gap-[40px] justify-center items-center",
		divTeamTitle: "flex items-center justify-center w-full py-2 bg-[#0a4334]",
		titleTeam: "text-4xl font-bold font-poppins text-white",
		divTeamMembers: "flex flex-col w-full gap-[50px] justify-center items-center",
		divTeamCEO: "flex gap-[30px] flex-col lg:flex-row justify-center items-center lg:items-start",
		divTeamCEO_picture: "md:w-[40%]",
		teamCEO_picture: "",
		divTeamCEO_text: "md:w-[60%] flex flex-col gap-[30px] ",
		teamCEO_title: "text-5xl font-bold",
		teamCEO_titleSpan: "font-medium font-poppins",
		teamCEO_text: "text-justify",
		divTeamGroup: "flex flex-wrap gap-[15px] justify-center items-center",
		divGroupMember: "",
		divMemberPhoto: "w-[300px]",
		memberPhoto: "",
		divMemberDepartment: "",
		memberDepartment: "font-bold",
		divMemberName: "",
		memberName: "font-poppins",

		logosContainer: "flex justify-center items-center w-full gap-[70px] lg:gap-[250px] bg-slate-100 px-10",
		divLogo1: "w-[200px]",
		imgLogo1: "",
		divLogo2: "w-[200px]",
		imgLogo2: "",

		galleryContainer: "w-[85%] place-self-center ",
		gallery: "",
	}
	return (
		<main className={style.mainAboutUs} >
			<section className={style.sectionCTA} style={{ backgroundImage: `url(${AboutUsCTA})` }}>
				<div className={style.CTAContainer}>
					<div className={style.divTitle}>
						<h1 className={style.titleCTA}>About Us</h1>
					</div>
				</div>
			</section>



			<section className={style.infoSection} >
				<div className={style.missionVisionContainer} >
					<div className={style.divMission} >
						<h1 className={style.titleMission}>Mission</h1>
						<p className={style.textMission}>We are dedicated to creating a positive and rewarding work environment for our employees, where they are valued, trained, and empowered to deliver high-quality craftsmanship and service to our customers, because our mission is provide exceptional roofing solutions that exceed customer expectations, ensuring their homes are safe and comfortable pleasing.</p>
					</div>
					<div className={style.divVision} >
						<h1 className={style.titleVision}>Vision</h1>
						<p className={style.textVision}>We are dedicated to fostering a culture of ongoing development for our team members and building enduring relationships with our customers, suppliers, and stakeholders based on trust and integrity. As a Roofing Company, we prioritize utilizing technological innovations to enhance work efficiency and quality.</p>
					</div>
				</div>
				<div className={style.teamContainer}>
					<div className={style.divTeamTitle} ><h1 className={style.titleTeam} >Gio Renovations</h1></div>
					<div className={style.divTeamMembers}>
						<div className={style.divTeamCEO}>
							<div className={style.divTeamCEO_picture} >
								<img src={CEO_picture} alt="CEO_Photo" className={style.teamCEO_picture} />
							</div>
							<div className={style.divTeamCEO_text}>
								<h2 className={style.teamCEO_title} >CEO <span className={style.teamCEO_titleSpan} >Gio</span></h2>
								<p className={style.teamCEO_text} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sequi quos ad dolor quas iusto tempora inventore vitae dolorem fugit exercitationem porro blanditiis molestias quia, eius architecto ipsum, corporis eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quam aspernatur distinctio vel impedit temporibus provident veritatis quasi, soluta, consectetur sapiente explicabo repellat beatae maxime laudantium assumenda repellendus ipsam reprehenderit.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus placeat eum odit ipsum, debitis recusandae maxime consequatur mollitia voluptas libero, voluptatem id culpa nesciunt sunt velit at quis consequuntur! Nulla?</p>
							</div>
						</div>
						<div className={style.divTeamGroup}>
							<div className={style.divGroupMember} >
								<div className={style.divMemberPhoto} >
									<img src={member1} alt="MemberPhoto" className={style.memberPhoto} />
								</div>
								<div className={style.divMemberDepartment}>
									<h2 className={style.memberDepartment}>Marketing</h2>
								</div>
								<div className={style.divMemberName} >
									<h3 className={style.memberName}>Fabi</h3>
								</div>
							</div>
							<div className={style.divGroupMember} >
								<div className={style.divMemberPhoto} >
									<img src={member2} alt="MemberPhoto" className={style.memberPhoto} />
								</div>
								<div className={style.divMemberDepartment}>
									<h2 className={style.memberDepartment}>Marketing</h2>
								</div>
								<div className={style.divMemberName} >
									<h3 className={style.memberName}>Nathy</h3>
								</div>
							</div>
							<div className={style.divGroupMember} >
								<div className={style.divMemberPhoto} >
									<img src={member3} alt="MemberPhoto" className={style.memberPhoto} />
								</div>
								<div className={style.divMemberDepartment}>
									<h2 className={style.memberDepartment}>...</h2>
								</div>
								<div className={style.divMemberName} >
									<h3 className={style.memberName}>Otro</h3>
								</div>
							</div>
							<div className={style.divGroupMember} >
								<div className={style.divMemberPhoto} >
									<img src={member4} alt="MemberPhoto" className={style.memberPhoto} />
								</div>
								<div className={style.divMemberDepartment}>
									<h2 className={style.memberDepartment}>...</h2>
								</div>
								<div className={style.divMemberName} >
									<h3 className={style.memberName}>Otro</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={style.logosContainer}>
					<div className={style.divLogo1} >
						<img src={logoNRCA} alt="logoNRCA" className={style.imgLogo1} />
					</div>
					<div className={style.divLogo2} >
						<img src={logoAtlas} alt="logoAtlas" className={style.imgLogo2} />
					</div>
				</div>
				<div className={style.galleryContainer}>
					<ImageGallery
						className={style.gallery}
						items={images}
						showPlayButton={false}
						showBullets={false}
						showIndex={false}
						showFullscreenButton={false}
						showNav={false}
						autoPlay={true}
					/>
				</div>
			</section>
		</main>
	);
}

export default AboutUs;
