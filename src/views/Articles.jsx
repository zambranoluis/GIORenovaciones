import ArticlesCTA from "../assets/aboutUsCTA.webp"

const Articles = () => {
	const style = {
		mainArticles: "flex flex-col justify-center items-center",
		callToAction: "w-full h-[50vh] flex justify-center items-center bg-cover bg-bottom bg-no-repeat bg-fixed",
		titleCTA: "text-white text-5xl font-bold drop-shadow-2xl",
		infoSection:" h-[40vh] w-full bg-none flex justify-center items-center",
	}
	return (
		<main className={style.mainArticles}>
			<section className={style.callToAction} style={{ backgroundImage: `url(${ArticlesCTA})` }}>
				<h1 className={style.titleCTA}>Articles</h1>
			</section>
			<section className={style.infoSection}>

			</section>
		</main>
	);
}

export default Articles;
