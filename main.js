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
	if (document.querySelector(".hamburger")) {
		const hamburgerEl = document.querySelector(".hamburger");
		const siteNameEl = document.querySelector(".site-name");
		new Hamburger(hamburgerEl, siteNameEl);
	}

	//Form, input phone
	const inputsTel = document.querySelectorAll("input[name=phone]");
	inputsTel.forEach((el) => {
		inputPhone(el);
	});

	//Advantages
	if (document.querySelector(".advantages-mobile")) {
		document.querySelectorAll(".advantages-mobile").forEach((el) => {
			el.addEventListener("click", (e) => {
				if (e.target.classList.contains("advantage-mobile__bodyHead")) {
					el.classList.toggle("advantages-mobile--active");
				}
			});
		});
	}
});
