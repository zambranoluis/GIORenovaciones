import { useLocation, Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react"

import PhoneCall from "../assets/PhoneCallWhite.gif"


import Logo from "../assets/GIOFULL.png"
import { TiArrowSortedDown } from "react-icons/ti";



import { CallNow } from "../assets/js/CallNowFooter"




const NavBar = () => {

	const [showSubMenu, setShowSubMenu] = useState(false);
	const [activeLinkId, setActiveLinkId] = useState(null);
	const location = useLocation();

	const handleSubMenu = (linkId) => {
		setShowSubMenu(!showSubMenu);
		setActiveLinkId(linkId);
	};

	const handleLinkClick = (linkId) => {
		if (activeLinkId === linkId) {
			setActiveLinkId(null);
		} else {
			setActiveLinkId(linkId);
		}
	};

	useEffect(() => {
		setShowSubMenu(false);
		setActiveLinkId(null)
	}, [location.pathname])


	const links = [
		{
			id: 0,
			name: "Home",
			to: "/",
		},
		{
			id: 1,
			name: "About Us",
			to: "/about-us",
		},
		{
			id: 2,
			name: "Services",
			subLinks: [
				{
					index: 0,
					name: "Roof Claims",
					to: "/roof-claims",
				},
				{
					index: 1,
					name: "Residential Roof",
					to: "/residential-roof",
				},
				{
					index: 2,
					name: "Commercial Roof",
					to: "/commercial-roof",
				},
				{
					index: 3,
					name: "Rain Gutters and Painting Services",
					to: "/rain-gutters-and-painting-services",
				},

			], showSubMenu: showSubMenu
		},
		{
			id: 3,
			name: "Roofing Products",
			to: "/roofing-products",
		},
		{
			id: 4,
			name: "Our Vendors",
			to: "/our-vendors",
		},
		{
			id: 5,
			name: "Blog",
			to: "/blog",
		},
		{
			id: 6,
			name: "Reviews",
			to: "/reviews",
		},
		{
			id: 7,
			name: "Contact Us",
			to: "/contact-us",
		}
	]

	const styles = {
		nav: "flex flex-col w-full bg-white py-[10px] px-[60px] justify-between items-center gap-[40px] py-[40px] min-[890px]:hidden ",
		nav2: "hidden min-[890px]:flex w-full bg-white py-[10px] px-[60px] justify-between items-center gap-[40px] py-[40px] min-[890px]:py-[20px]  ",

		divLogo: "flex gap-[40px] items-center ",
		linkLogo: "flex items-center justify-center",
		logo: " w-[200px] max-w-[200px]",
		containerCallNowLeft: "flex flex-col min-[890px]:hidden gap-[5px] items-center justify-center ",


		navRight: "flex w-full justify-between items-center",
		divSites: "flex justify-center items-center pl-[20px]",
		navSites: "flex flex-wrap gap-[20px] justify-center items-center",
		navSite: "flex relative ",
		navLink: "flex text-[#0a4334] font-bold font-poppins hover:text-[#126e56]",
		navLinkText: "flex text-[#0a4334] hover:text-[#126e56] font-poppins items-center gap-[2px]",
		subList: "flex flex-col w-[160px] absolute z-[20] top-[30px] left-[-20px] bg-white py-[10px] gap-[10px] rounded-md ",
		subSites: "flex border-t-2 pt-[5px] border-black  ",
		subSite: " w-full px-[10px] hover:bg-[#0a4334] font-poppins hover:text-white ",
		subLink: "",

		containerCallNowRight: "gap-[5px] max-[890px]:hidden items-center justify-center flex flex-col",
		buttonCallNow: "flex w-[135px]  gap-[10px] bg-[#ef8f21] py-[6px] px-[10px] font-poppins rounded text-white text-center justify-center items-center",
		iconPhone: "w-[20px] h-[20px] ",
		textPhone: " font-bold text-center font-poppins text-[#0a4334] text-[16px] ",
		spanPhone: "text-[#0a4334] font-bolder font-poppins text-center",
		spanPhoneHypen: "text-[#0a4334] font-bolder font-poppins text-center",
	}

	const stylesActive = ({ isActive }) => ({
		color: (isActive) ? "#ef8f21" : "",
	});

	return (
		<>
			<nav className={styles.nav}>
				<div className={styles.divLogo}>
					<Link to="/" className={styles.linkLogo}>
						<img src={Logo} className={styles.logo} alt="LogoGIO" />
					</Link>
					<div className={styles.containerCallNowLeft}>
						<button id="llamarBtn" className={styles.buttonCallNow} onClick={(e) => { e.preventDefault(); CallNow(); }}><img src={PhoneCall} alt="iconPhoneCall" className={styles.iconPhone} /> Call now!</button>
						<p className={styles.textPhone}>(321) 473 - 4374</p>
					</div>
				</div>
				<div className={styles.navRight}>
					<div className={styles.divSites}>
						<ul className={styles.navSites}>
							{links.map((link) => (
								<li key={link.id} className={styles.navSite} >
									<NavLink
										to={link.to}
										className={styles.navLink}
										style={stylesActive}
										onClick={link.subLinks ? () => handleSubMenu(link.id) : () => handleLinkClick(link.id)}
									>
										{(link.subLinks) ? <p className={styles.navLinkText}>{link.name} <TiArrowSortedDown /></p> : link.name}
									</NavLink>

									{link.subLinks && (
										<ul className={`${styles.subList} ${activeLinkId === link.id && showSubMenu ? '' : 'hidden'}`}>
											{link.subLinks.map((subLink) => (
												<li key={subLink.index} className={styles.subSites}>
													<div className={styles.subSite}>
														<NavLink
															to={subLink.to}
															className={styles.subLink}
															style={stylesActive}
															onClick={() => handleLinkClick(link.index)}
														>
															{subLink.name}
														</NavLink>
													</div>
												</li>
											))}
										</ul>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>






			<nav className={styles.nav2}>
				<div className={styles.divLogo}>
					<Link to="/" className={styles.linkLogo}>
						<img src={Logo} className={styles.logo} alt="LogoGIO" />
					</Link>
				</div>

				<div className={styles.divSites}>
					<ul className={styles.navSites}>
						{links.map((link) => (
							<li key={link.id} className={styles.navSite} >
								<NavLink
									to={link.to}
									className={styles.navLink}
									style={stylesActive}
									onClick={link.subLinks ? () => handleSubMenu(link.id) : () => handleLinkClick(link.id)}
								>
									{(link.subLinks) ? <p className={styles.navLinkText}>{link.name} <TiArrowSortedDown /></p> : link.name}
								</NavLink>

								{link.subLinks && (
									<ul className={`${styles.subList} ${activeLinkId === link.id && showSubMenu ? '' : 'hidden'}`}>
										{link.subLinks.map((subLink) => (
											<li key={subLink.index} className={styles.subSites}>
												<div className={styles.subSite}>
													<NavLink
														to={subLink.to}
														className={styles.subLink}
														style={stylesActive}
														onClick={() => handleLinkClick(link.index)}
													>
														{subLink.name}
													</NavLink>
												</div>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</div>

				<div className={styles.containerCallNowRight}>
					<button id="llamarBtn" className={styles.buttonCallNow} onClick={(e) => { e.preventDefault(); CallNow(); }}><img src={PhoneCall} alt="iconPhoneCall" className={styles.iconPhone} /> Call now!</button>
					<p className={styles.textPhone}><span className={styles.spanPhone}>(</span>321<span className={styles.spanPhone}>)</span> 473<span className={styles.spanPhoneHypen}> - </span>4374</p>
				</div>
			</nav>


		</>

	);
}

export default NavBar;
