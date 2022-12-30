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
import { Quiz } from "./scripts/quiz";

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
				//console.log(e.target.classList);
				if (
					e.target.classList.contains("advantage-mobile__bodyHead") ||
					e.target.classList.contains("advantage-mobile__carret") ||
					e.target.classList.contains("icon-carret") ||
					e.target.classList.contains("advantage-mobile__preview-icons")
				) {
					el.classList.toggle("advantages-mobile--active");
				}
			});
		});
	}

	//Quiz
	const quiz = new Quiz();
});
