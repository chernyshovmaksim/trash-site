// import styles
import "./scss/main.scss";
import "./public/icon-fonts.css";

//import utils
import "./scripts/pxpe";

//import scripts
import "./scripts/top-slider";
import "./scripts/reviews";
import { inputPhone } from "./scripts/input-masks";
import { Hamburger } from "./scripts/mobile-menu";

document.addEventListener("DOMContentLoaded", () => {
	//Mobile menu
	const hamburgerEl = document.querySelector(".hamburger");
	new Hamburger(hamburgerEl);

	//Form, input phone
	const inputsTel = document.querySelectorAll("input[name=phone]");
	inputsTel.forEach((el) => {
		inputPhone(el);
	});
});
