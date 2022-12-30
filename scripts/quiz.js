export class Quiz {
	#step;
	#steps;
	#elsScreen;
	#elControllNext;
	#elControllPrev;

	constructor() {
		this.#initStore();
		this.#initControls();
		this.#initScreens();
		this.#initProgress();
	}

	/**
	 * Initializations
	 */

	#initStore() {
		if (localStorage.getItem("quizStep")) {
			this.#step = localStorage.getItem("quizStep");
		} else {
			localStorage.setItem("quizStep", 1);
			this.#step = localStorage.getItem("quizStep");
		}
	}

	#initScreens() {
		if (document.querySelector(".quiz__screen")) {
			this.#elsScreen = document.querySelectorAll(".quiz__screen");
			this.#steps = this.#elsScreen.length;

			this.#elsScreen.forEach((el, i) => {
				if (i == this.#step - 1) {
					el.classList.add("active");
				}
			});
		}
	}

	#initControls() {
		if (document.querySelector(".quiz__btn--prev")) {
			this.#elControllPrev = document.querySelector(".quiz__btn--prev");
			this.#elControllPrev.addEventListener("click", (e) => {
				this.#decrementStep();
			});
		}
		if (document.querySelector(".quiz__btn--next")) {
			this.#elControllNext = document.querySelector(".quiz__btn--next");
			this.#elControllNext.addEventListener("click", (e) => {
				this.#incrementStep();
			});
		}
	}

	#initProgress() {}

	/**
	 * Change screen logic
	 */

	#changeScreen() {
		this.#step = localStorage.getItem("quizStep");
		this.#elsScreen.forEach((el) => {
			el.classList.remove("active");
		});
		this.#elsScreen.forEach((el, i) => {
			if (i == this.#step - 1) {
				el.classList.add("active");
			}
		});
	}

	/**
	 * Step increment and decrement
	 */

	#incrementStep() {
		let currentStep = Number(localStorage.getItem("quizStep"));
		if (currentStep < this.#steps) {
			let newStep = currentStep + 1;
			localStorage.setItem("quizStep", newStep);
			this.#changeScreen();
		}
	}
	#decrementStep() {
		let currentStep = Number(localStorage.getItem("quizStep"));
		if (currentStep > 1) {
			let newStep = currentStep - 1;
			localStorage.setItem("quizStep", newStep);
			this.#changeScreen();
		}
	}
}
