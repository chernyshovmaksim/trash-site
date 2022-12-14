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
});
