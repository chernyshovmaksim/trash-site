export class Hamburger {
	#elHamburger;
	#elSiteName;

	constructor(elHamburger, elSiteName) {
		window.onbeforeunload = () => {
			localStorage.setItem("statusMM", "0");
		};

		this.#elHamburger = elHamburger;
		this.#elSiteName = elSiteName;
		this.#elHamburger.addEventListener("click", () => {
			this.#changeStatus();
			this.#checkStatus();
		});
	}
	#changeStatus() {
		if (localStorage.getItem("statusMM")) {
			if (localStorage.getItem("statusMM") == "0") {
				localStorage.setItem("statusMM", "1");
			} else {
				localStorage.setItem("statusMM", "0");
			}
		} else {
			localStorage.setItem("statusMM", "1");
		}
	}
	#checkStatus() {
		if (localStorage.getItem("statusMM")) {
			const status = localStorage.getItem("statusMM");

			if (status == "0") {
				this.#elHamburger.classList.remove("hamburger--active");
				this.#elSiteName.classList.remove("site-name--active");
			} else {
				this.#elHamburger.classList.add("hamburger--active");
				this.#elSiteName.classList.add("site-name--active");
			}
		}
	}
}
