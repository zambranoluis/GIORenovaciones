const info = [
	{
		id: 0,
		title: "Damage Assessment",
		text: "The extent and type of damage to your roof significantly impact your claim's outcome.",
	},
	{
		id: 1,
		title: "Policy Coverage",
		text: "Understanding the details of your insurance policy, including coverage limits and exclusions, is key to a successful claim.",
	},
	{
		id: 2,
		title: "Deductible Amount",
		text: "Your deductible plays a role in how much you'll pay out of pocket before your insurance coverage kicks in.",
	},
	{
		id: 3,
		title: "Documentation",
		text: "Proper documentation, including photos and records of the damage, is crucial for supporting your claim.",
	},
	{
		id: 4,
		title: "Claim Process",
		text: "Navigating the insurance claim process requires expertise and attention to detail to ensure a smooth and successful outcome.",
	},
];

const style = {
	mainRoofClaims: "flex flex-col justify-center items-center gap-[50px]",

	sectionCTA:
		"relative flex w-full h-[50vh] justify-center items-center bg-cover bg-bottom bg-no-repeat bg-fixed",
	CTAContainer: "flex relative",
	divBlurCTA: "flex absolute w-full h-full",
	divTitle: "flex justify-center items-center z-10 p-3",
	titleCTA:
		"text-white text-center text-5xl font-poppins font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] ",

	infoSection: " w-[90%] h-full py-12 bg-none",
	container:
		"flex flex-wrap items-center justify-center h-full max-[490px]:gap-16 ",
	divVideo: "flex items-center justify-center w-full lg:w-[50%] h-[350px] ",
	divText:
		"flex flex-col items-start justify-center w-full lg:w-[50%] px-16 pt-8",

	section: "flex flex-col items-center justify-center w-[90%] h-full",
	divition: "flex items-center justify-center w-full py-2 bg-[#0a4334] w-[90%]",

	divDamage:
		" flex flex-wrap items-center justify-center w-full h-full py-16 gap-16 lg:px-none xl:px-none 2xl:px-48",
	tarjetaDmg:
		" flex flex-row-reverse items-center justify-between w-[380px] h-[200px] hover:bg-white/10 rounded-lg hover:shadow-md p-2 ",
	divTitleDmg: " w-[50%] flex justify-center items-center",
	titleDmg: "text-2xl font-bold font-poppins text-[#ef8f21] text-center",
	divImgDmg: "flex items-center justify-center w-[50%] rounded-full p-8",

	imgDmg: "",

	divitionTitle:
		"text-3xl font-bold font-poppins text-white w-full text-center",
	container2:
		"flex bg-cover w-[100%] justify-center bg-top bg-no-repeat bg-fixed",
	divition2: "flex items-center justify-center w-full py-2 w-[90%]",
	container3:
		"flex flex-wrap justify-center items-start lg:px-16 xl:px-30 2xl:px-[390px] gap-10 py-20 bg-black/60 w-[100%]",
	tarjeta:
		"flex flex-col items-start justify-start w-[280px] h-[200px] p-2 backdrop-blur-sm bg-white/10 rounded-lg shadow-sm ",

	sectionForm: "flex items-center justify-center w-[90%] h-full py-16",
	divCont: "flex flex-wrap justify-around items-center w-full",
	divTextForm: "flex flex-col items-start justify-start w-full lg:w-[50%] p-16",
	divForm: "flex flex-col w-full lg:w-[50%]",
	form: "flex flex-col items-center justify-center gap-4 p-4 w-full",
	label: "text-lg font-poppins text-[#0a4334]",
	input: "rounded-lg border-2 font-poppins p-2 w-full",
	inputDiv: "flex flex-col gap-2 w-full",
	divLabInp: "flex items-center justify-center gap-6 w-full",
	divLabInp2: "flex flex-col items-center justify-center gap-6 w-full",
	button: "bg-[#0a4334] text-white font-poppins rounded-lg p-2 w-full",
};

import huracan from "../RoofClaims/huracan.svg";
import tornado from "../RoofClaims/tornado.svg";
import water from "../RoofClaims/water.svg";
import moho from "../RoofClaims/mold.svg";
import fire from "../RoofClaims/fire.svg";
import hail from "../RoofClaims/hail.svg";

const damage = [
	{
		id: 0,
		title: "Hurricane",
		src: huracan,
	},
	{
		id: 1,
		title: "Tornado",
		src: tornado,
	},
	{
		id: 2,
		title: "Water Damage",
		src: water,
	},
	{
		id: 3,
		title: "Mold",
		src: moho,
	},
	{
		id: 4,
		title: "Fire & Smoke",
		src: fire,
	},
	{
		id: 5,
		title: "Hail",
		src: hail,
	},
];

export { info, style, damage };
