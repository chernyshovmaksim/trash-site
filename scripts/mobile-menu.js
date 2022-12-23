export class Hamburger {
	#el;

	constructor(el) {
		console.log("Hamburger plugin init");
		this.#el = el;
		el.addEventListener("click", () => {
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
				this.#el.classList.remove("hamburger--active");
			} else {
				this.#el.classList.add("hamburger--active");
			}
		}
	}
}
