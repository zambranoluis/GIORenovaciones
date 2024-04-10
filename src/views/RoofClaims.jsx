import RoofClaimsCTA from "../assets/RoofClaims/RoofClaimsCTA.jpg"
import ReactPlayer from "react-player"
import Background from "../assets/RoofClaims/background.jpeg"
import { style, info, damage } from "../assets/js/RoofClaims"


const RoofClaims = () => {

	return (
		<main className={style.mainRoofClaims}>
			<section className={style.sectionCTA} style={{ backgroundImage: `url(${RoofClaimsCTA})` }}>
				<div className={style.CTAContainer}>
					<div className={style.divBlurCTA}></div>
					<div className={style.divTitle}>
						<h1 className={style.titleCTA}>Roof Insurance Claims</h1>
					</div>
				</div>
			</section>
			<section className={style.infoSection}>
				<div className={style.container}>
					<div className={style.divVideo}>
						<ReactPlayer url="https://www.youtube.com/watch?v=71AxydsvK5Q" controls={true} width="75%" height="100%" />
					</div>
					<div className={style.divText}>
						<h2 className="text-3xl text-center px-4 2xl:px-8 font-bold text-[#ef8f21]">
							The Vital Role of Roof Claims Ensuring Your Home is Protection Dealing
						</h2>
						<p className="text-lg text-justify pt-4 text-[#0a4334]">
							With a roof claim can be overwhelming. From navigating insurance policies to assessing damages and coordinating repairs, it is a complex process. At Gio Renovations, we are here to help you understand and manage your roof claim efficiently. Our team of experts will guide you through each step, ensuring that you receive the coverage you deserve and your roof is restored to its optimal condition.
						</p>
					</div>
				</div>
			</section>
			<section className={style.section} >
				<div className={style.divition}>
					<h2 className={style.divitionTitle}>
						Types Damages
					</h2>
				</div>
				<div className={style.divDamage}>
					{damage.map((item) => {
						return (
							<div
								key={item.id}
								className={style.tarjetaDmg}
							>
								<div className={style.divTitleDmg}>
									<h3 className={style.titleDmg}>
										{item.title}
									</h3>
								</div>
								<div className={style.divImgDmg}>
									<img src={item.src} className={style.imgDmg} alt="" />
								</div>
							</div>
						);
					})}
				</div>
			</section>
			<section className={style.section2}>
				<div className={style.container2} style={{ backgroundImage: `url(${Background})` }}>
					<div className={style.container3}>
						<div className={style.divition2}>
							<h2 className={style.divitionTitle}>
								Factors Shaping Your Roof Insurance Claim
							</h2>
						</div>
						{info.map((item) => {
							return (
								<div
									key={item.id}
									className={style.tarjeta}
								>
									<h2 className="text-2xl font-poppins font-bold text-white">
										{item.title}:
									</h2>
									<p className="text-lg text-left font-poppins pt-2 text-white">
										{item.text}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>
			<section className={style.sectionForm} >
				<div className={style.divCont}>
					<div className={style.divForm}>
						<form action="" className={style.form}>
							<div className="flex items-center justify-center">
								<h3 className="text-3xl font-bold font-poppins text-[#ef8f21]">
									Submit your claim
								</h3>
							</div>
							<div className={style.divLabInp}>
								<div className={style.inputDiv}>
									<label className={style.label} htmlFor="name">
										First Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										placeholder="John"
										className={style.input}
									/>
								</div>
								<div className={style.inputDiv}>
									<label className={style.label} htmlFor="lastName">Last Name</label>
									<input
										type="text"
										id="lastName"
										name="lastName"
										placeholder="Doe"
										className={style.input}
									/>
								</div>
							</div >
							<div className={style.divLabInp}>
								<div className={style.inputDiv}>
									<label className={style.label} htmlFor="email">Email</label>
									<input
										type="email"
										id="email"
										name="email"
										placeholder="mail@example.com"
										className={style.input}
									/>
								</div>
								<div className={style.inputDiv}>
									<label className={style.label} htmlFor="phone">Phone</label>
									<input
										type="text"
										id="phone"
										name="phone"
										placeholder="123-456-7890"
										className={style.input}
									/>
								</div>
							</div>
							<div className={style.divLabInp2}>
								<div className={style.inputDiv}>
									<label className={style.label} htmlFor="typeClaim">Type of Claim</label>
									<input type="text" id="typeClaim" name="typeClaim" placeholder="Roof Damage" className={style.input} />
								</div>
								<div className={style.inputDiv}>
									<label className={style.label} htmlFor="message"> Message</label>
									<textarea
										id="message"
										name="message"
										placeholder="Message"
										className={style.input}
									></textarea>
								</div>
							</div>
							<button type="submit" className={style.button}>
								Submit
							</button>
						</form>
					</div>
				</div>
			</section>
		</main >
	);
}

export default RoofClaims;
