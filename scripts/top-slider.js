import Swiper, { Pagination } from "swiper";
import "swiper/css";
//import "swiper/css/navigation";
import "swiper/css/pagination";

new Swiper(".swiper", {
	modules: [Pagination],
	pagination: {
		el: ".swiper-pagination",
		type: "bullets",
	},
});
