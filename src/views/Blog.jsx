import BlogCTA from "../assets/Blog/BlogCTA.jpeg"

import Entry1Picture from "../assets/Blog/BlogEntry1.webp"
import Entry2Picture from "../assets/Blog/BlogEntry2.webp"

const Blog = () => {
	const style = {
		mainBlog: "flex flex-col justify-center items-center",
		callToAction: "w-full h-[50vh] flex justify-center items-center bg-cover bg-bottom bg-no-repeat bg-fixed",
		infoSection: " h-[40vh] w-full bg-none flex justify-center items-center",

		sectionCTA: "flex w-full h-[50vh] justify-center items-center bg-cover bg-center bg-no-repeat bg-fixed",
		CTAContainer: "flex w-full justify-center items-center",
		divTitle: "flex justify-center items-center",
		titleCTA: "text-white text-center text-5xl font-poppins font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]",

		entriesSection: " flex w-full justify-center items-center py-20",
		entriesContainer: " flex flex-wrap w-[78%] gap-[40px]",

		divEntry: "flex flex-col w-[360px] h-[490px] rounded-sm cursor-pointer border border-slate-400  ",

		divEntryPicture: "h-[45%] rounded-t-sm ",
		entryPictureContainer: "flex relative h-full",
		divButtonEntry: "flex absolute right-0 p-4",
		buttonEntry: "bg-[#0a4334] text-white text-[12px] font-semibold rounded-full py-[5px] px-[15px]",
		divImgEntry: "h-full",
		imgEntry: "h-full rounded-t-sm",

		divEntryDescription: "h-[55%] flex flex-col",
		descriptionContainer: "h-full flex flex-col p-[30px]",
		divEntryTitle: "h-[85%]  ",
		entryTitle: "text-2xl font-bold",
		divEntryReadMore: "h-[15%] flex items-center ",
		entryReadMore: "text-[#ef8f21] text-[12px] ",
		divEntryDate: "h-[15%] flex w-full items-center border-t border-slate-200 py-4 px-8",
		entryDate: "text-[14px] ",
	}
	return (
		<main className={style.mainBlog}>
			<section className={style.sectionCTA} style={{ backgroundImage: `url(${BlogCTA})` }}>
				<div className={style.CTAContainer}>
					<div className={style.divTitle}>
						<h1 className={style.titleCTA}>Our Blog</h1>
					</div>
				</div>
			</section>



			<section className={style.entriesSection}>
				<div className={style.entriesContainer}>
					<div className={style.divEntry}>
						<div className={style.divEntryPicture}>
							<div className={style.entryPictureContainer}>
								<div className={style.divButtonEntry}>
									<button className={style.buttonEntry}>FLAT ROOF</button>
								</div>
								<div className={style.divImgEntry}>
									<img src={Entry1Picture} alt="PictureEntry1" className={style.imgEntry} />
								</div>
							</div>
						</div>
						<div className={style.divEntryDescription}>
							<div className={style.descriptionContainer}>
								<div className={style.divEntryTitle}>
									<p className={style.entryTitle}>Flat Roof</p>
								</div>
								<div className={style.divEntryReadMore}>
									<p className={style.entryReadMore}>READ MORE »</p>
								</div>
							</div>
							<div className={style.divEntryDate}>
								<p className={style.entryDate}>marzo 28, 2024 • No hay comentarios</p>
							</div>
						</div>
					</div>
					<div className={style.divEntry}>
						<div className={style.divEntryPicture}>
							<div className={style.entryPictureContainer}>
								<div className={style.divButtonEntry}>
									<button className={style.buttonEntry}>ROOF DAMAGE & REPAIRS</button>
								</div>
								<div className={style.divImgEntry}>
									<img src={Entry2Picture} alt="PictureEntry2" className={style.imgEntry} />
								</div>
							</div>
						</div>
						<div className={style.divEntryDescription}>
							<div className={style.descriptionContainer}>
								<div className={style.divEntryTitle}>
									<p className={style.entryTitle}>Roof Repair vs. Roof Replacement in Florida: Making the Right Decision.</p>
								</div>
								<div className={style.divEntryReadMore}>
									<p className={style.entryReadMore}>READ MORE »</p>
								</div>
							</div>
							<div className={style.divEntryDate}>
								<p className={style.entryDate}>marzo 28, 2024 • No hay comentarios</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Blog;
