

import Vent1 from "../RoofingProducts/types_of_solar_ventilation/type1.png"
import Vent2 from "../RoofingProducts/types_of_solar_ventilation/type2.png"
import Vent3 from "../RoofingProducts/types_of_solar_ventilation/type3.png"
import Vent4 from "../RoofingProducts/types_of_solar_ventilation/type4.png"


import shingle_color_1 from "../RoofingProducts/colors_of_shingles/color_shingle_1.jpg"
import shingle_color_2 from "../RoofingProducts/colors_of_shingles/color_shingle_2.jpg"
import shingle_color_3 from "../RoofingProducts/colors_of_shingles/color_shingle_3.jpg"
import shingle_color_4 from "../RoofingProducts/colors_of_shingles/color_shingle_4.jpg"
import shingle_color_5 from "../RoofingProducts/colors_of_shingles/color_shingle_5.jpg"
import shingle_color_6 from "../RoofingProducts/colors_of_shingles/color_shingle_6.jpg"
import shingle_color_7 from "../RoofingProducts/colors_of_shingles/color_shingle_7.jpg"
import shingle_color_8 from "../RoofingProducts/colors_of_shingles/color_shingle_8.jpg"
import shingle_color_9 from "../RoofingProducts/colors_of_shingles/color_shingle_9.jpg"
import shingle_color_10 from "../RoofingProducts/colors_of_shingles/color_shingle_10.jpg"
import shingle_color_11 from "../RoofingProducts/colors_of_shingles/color_shingle_11.jpg"
import shingle_color_12 from "../RoofingProducts/colors_of_shingles/color_shingle_12.jpg"
import shingle_color_13 from "../RoofingProducts/colors_of_shingles/color_shingle_13.jpg"
import shingle_color_14 from "../RoofingProducts/colors_of_shingles/color_shingle_14.jpg"
import shingle_color_15 from "../RoofingProducts/colors_of_shingles/color_shingle_15.jpg"
import shingle_color_16 from "../RoofingProducts/colors_of_shingles/color_shingle_16.jpg"

const solarVentilation = [
		{
			id: 0,
			name: "Omni Rolls Ventilation",
			img: Vent1,
			// className: "w-[200px]"
		},
		{
			id: 1,
			name: "Solar Ventilation SFA",
			img: Vent2,
			// className: "w-[200px]"
		},
		{
			id: 2,
			name: "Metal Ridge Ventilation",
			img: Vent3,
			// className: "w-[200px]"
		},
		{
			id: 3,
			name: "Off Ridge Ventilation",
			img: Vent4,
			// className: "w-[200px]"
		}
	]

const shinglesColors = [
		{
			id: 0,
			img: shingle_color_1,
			name: "Color Shingle 1",
		},
		{
			id: 1,
			img: shingle_color_2,
			name: "Color Shingle 2",
		},
		{
			id: 2,
			img: shingle_color_3,
			name: "Color Shingle 3",
		},
		{
			id: 3,
			img: shingle_color_4,
			name: "Color Shingle 4",
		},
		{
			id: 4,
			img: shingle_color_5,
			name: "Color Shingle 5",
		},
		{
			id: 5,
			img: shingle_color_6,
			name: "Color Shingle 6",
		},
		{
			id: 6,
			img: shingle_color_7,
			name: "Color Shingle 7",
		},
		{
			id: 7,
			img: shingle_color_8,
			name: "Color Shingle 8",
		},
		{
			id: 8,
			img: shingle_color_9,
			name: "Color Shingle 9",
		},
		{
			id: 9,
			img: shingle_color_10,
			name: "Color Shingle 10",
		},
		{
			id: 10,
			img: shingle_color_11,
			name: "Color Shingle 11",
		},
		{
			id: 11,
			img: shingle_color_12,
			name: "Color Shingle 12",
		},
		{
			id: 12,
			img: shingle_color_13,
			name: "Color Shingle 13",
		},
		{
			id: 13,
			img: shingle_color_14,
			name: "Color Shingle 14",
		},
		{
			id: 14,
			img: shingle_color_15,
			name: "Color Shingle 15",
		},
		{
			id: 15,
			img: shingle_color_16,
			name: "Color Shingle 16",
		}
	]

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
	solarVentilation,
	shinglesColors,
	OpenEnlargePicture,
	CloseEnlargePicture
}
