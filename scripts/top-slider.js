import Swiper, { Pagination } from "swiper";
import "swiper/css";
//import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
	autoplay: true,
	modules: [Pagination],
	pagination: {
		el: ".swiper-pagination",
		type: "bullets",
	},
});
