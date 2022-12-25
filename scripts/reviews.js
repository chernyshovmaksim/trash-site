import Swiper from "swiper";
import "swiper/css";
//import "swiper/css/navigation";
//import "swiper/css/pagination";

new Swiper(".reviews-swiper", {
	slidesPerView: 1.5,
	spaceBetween: 20,
	loop: true,
	centeredSlides: true,
	autoplay: true,

	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		640: {
			slidesPerView: 1.5,
			spaceBetween: 20,
		},
	},
});
