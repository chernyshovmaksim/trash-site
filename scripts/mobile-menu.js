export class Hamburger {
	constructor(el) {
		console.log("Hamburger plugin init");
		el.addEventListener("click", () => {
			el.classList.toggle("hamburger--active");
			this.#store();
		});
	}
	#store() {
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
}
