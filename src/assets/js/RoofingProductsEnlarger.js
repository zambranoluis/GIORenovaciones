function OpenEnlargePicture (picture){
	console.log(picture);
	const divEnlargedPicture = document.getElementById("divEnlarged");
	divEnlargedPicture.style.display = "flex";
	const enlargedPicture = document.getElementById("enlargedPicture");
	enlargedPicture.src = picture.img;
}

function CloseEnlargePicture(e){
	const divEnlargedPicture = document.getElementById("divEnlarged");
	divEnlargedPicture.style.display = "none";
}

export {
	OpenEnlargePicture,
	CloseEnlargePicture
}
