import { useState, useEffect, useRef } from 'react';
import Hurricane from "../assets/Home/hurricane.mp4";
import restaurada from "../assets/Home/restaurada.webp";
import reparando from "../assets/Home/reparando.webp";
import huracan from "../assets/Home/huracan.webp";
import { Icons } from "../assets/js/icons";
import Video from "../assets/Home/gio.mp4";
import { Icons2 } from '../assets/js/Icons.jsx';
import Florida from "../assets/Home/usa-fl.svg";
import styles from "../assets/js/HomeStyles";

function Index() {
	const [videoEnded, setVideoEnded] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [imageOpacity, setImageOpacity] = useState(0); // Inicia invisible
	const images = [huracan, reparando, restaurada];
	const videoRef = useRef();
	const timeoutRef = useRef(null);

	useEffect(() => {
		const video = videoRef.current;

		const handleVideoEnd = () => {
			setVideoEnded(true);
			setImageOpacity(1); // Hacer la primera imagen visible cuando el video termine
		};

		if (video) {
			video.addEventListener('ended', handleVideoEnd);
		}

		return () => {
			if (video) {
				video.removeEventListener('ended', handleVideoEnd);
			}
		};
	}, []);

	useEffect(() => {
		if (videoEnded) {
			// Solo procede con el cambio de imagen si no estamos en la última imagen
			if (currentImageIndex < images.length - 1) {
				timeoutRef.current = setTimeout(() => {
					setImageOpacity(0); // Desvanecer la imagen actual

					setTimeout(() => {
						setCurrentImageIndex((prevIndex) => prevIndex + 1);
						setImageOpacity(1); // Hacer visible la próxima imagen
					}, 2000); // Tiempo para cambiar la imagen
				}, 3500); // Tiempo para comenzar a desvanecer la imagen actual
			}
		}
	}, [videoEnded, currentImageIndex, images.length]);

	useEffect(() => {
		return () => {
			clearTimeout(timeoutRef.current);
		};
	}, []);

	return (
		<main className={styles.main}>
			<section className={styles.section}>
				{!videoEnded && (
					<video
						ref={videoRef}
						autoPlay
						muted
						className={styles.video}
						style={{ transition: 'opacity 2.5s', opacity: videoEnded ? 0 : 1 }}
					>
						<source src={Hurricane} type="video/mp4" />
					</video>
				)}
				<div className={styles.images} style={{ opacity: imageOpacity, transition: 'opacity 2.5s' }}>
					{images.map((src, index) => (
						<img
							key={src}
							src={src}
							alt="Transición"
							className={`w-full h-full object-cover ${index === currentImageIndex ? 'block' : 'hidden'}`}
						/>
					))}
				</div>
			</section>
			<section className={styles.section2}>
				<div className={styles.texto}>
					<div>
						<p className="text-4xl font-bold font-poppins " >Gio Renovations has successfully</p>
						<p className="text-4xl font-bold font-poppins  text-[#ef8f21]">upgraded 500+ houses.</p>
					</div>

					<p className="text-3xl text-center font-poppins text-[#0a4334]">
						Our dedication to improving houses roof by roof has had a significant impact on countless families, turning their houses into dream homes.
					</p>
				</div>
				<div className={styles.video2}>
					<video muted controls className='rounded-xl opacity-[0.8]'>
						<source src={Video} type="video/mp4" />
					</video>
				</div>
			</section>
			<section className={styles.section3}>
				<div className={styles.divition}>
					<h1 className="text-4xl font-bold font-poppins text-white">Services</h1>
				</div>
				<div className={styles.gridIcons}>
					{Icons.map((icon, index) => (
						<div key={index} className={styles.icon}>
							<div className="w-[50%] p-3 rounded-full">
								<img src={icon.src} alt={icon.title} className={icon.className} />
							</div>
							<div className="w-[50%]">
								<h3 className={styles.iconTitle}>{icon.title}</h3>
							</div>
						</div>
					))}
				</div>
			</section>
			<section className={styles.section3}>
				<div className={styles.divition}>
					<h1 className="text-4xl font-bold font-poppins text-white">Property Type</h1>
				</div>
				<div className='w-full'>
					<div className={styles.flexIcons2}>
						{Icons2.map((icon, index) => (
							<div className={styles.icon2} key={index}>
								<div className={styles.icon2Container}>
									{icon.src}
								</div>
								<div className={styles.textContainer}>
									<h3 className={styles.iconTitle2}>{icon.title}</h3>
									<p className="text-[#ef8f21] font-poppins">{icon.subTitle}</p>
								</div>
							</div>
						))}
					</div>
					<div className={styles.legend}>
						<div className={styles.map}>
							<img className="w-[380px] md:w-[800px] rotate-2" src={Florida} alt="Florida" />
						</div>
						<div className={styles.textLegend}>
							<div className="flex flex-col items-start justify-start">
								<h3 className="text-4xl font-bold text-[#ef8f21]">
									Serving Central Florida area
								</h3>
							</div>
							<div className={styles.list}>
								<ul className="list-disc list-inside text-[#0a4334]">
									<li>Lake County</li>
									<li>Brevard County</li>
									<li>Osceola County</li>
									<li>Volusia County</li>
									<li>Polk County</li>
									<li>Seminole County</li>
									<li>Orange County</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Index;
