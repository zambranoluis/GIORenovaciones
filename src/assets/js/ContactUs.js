import Mail from "../ContactUs/SocialMedia/Mail.png";
import Phone from "../ContactUs/SocialMedia/Phone.png";
import Facebook from "../ContactUs/SocialMedia/Facebook.png";
import Instagram from "../ContactUs/SocialMedia/Instagram.png";
import Whatsapp from "../ContactUs/SocialMedia/Whatsapp.png";
import TikTok from "../ContactUs/SocialMedia/TikTok.png";
import LinkedIn from "../ContactUs/SocialMedia/LinkedIn.png";


const socialMedia = [
	{
		id: 1,
		src: Mail,
		title: "MailIcon",
		img: Mail
	},
	{
		id: 2,
		src: Phone,
		title: "PhoneIcon",
		img: Phone
	},
	{
		id: 3,
		src: Facebook,
		title: "FacebookIcon",
		img: Facebook
	},
	{
		id: 4,
		src: Instagram,
		title: "InstagramIcon",
		img: Instagram
	},
	{
		id: 5,
		src: Whatsapp,
		title: "WhatsappIcon",
		img: Whatsapp
	},
	{
		id: 6,
		src: TikTok,
		title: "TikTokIcon",
		img: TikTok
	},
	{
		id: 7,
		src: LinkedIn,
		title: "LinkedInIcon",
		img: LinkedIn
	}
]

const formFields = [
	{
		id: 1,
		name: "Name",
		type: "text",
		placeholder: "Example: John Doe",
		labelClassName: "",
		inputClassName: "",
	},
	{
		id: 2,
		name: "Email",
		type: "email",
		placeholder: "Example: mail@example.com",
		labelClassName: "",
		inputClassName: "",
	},
	{
		id: 3,
		name: "Phone",
		type: "text",
		placeholder: "Example: 123-456-7890",
		labelClassName: "",
		inputClassName: "",
	},
	{
		id: 4,
		name: "Message",
		type: "text",
		placeholder: "Example: I'm interested in...",
		labelClassName: "",
		inputClassName: "",
	},
]



export {
	socialMedia,
	formFields
}
