export class Quiz {
	#step;
	#steps;
	#stepPer;
	#elsScreen;
	#elControllNext;
	#elControllPrev;

	#progressContainer;
	#progressLine;
	#progressPercent;
	#progressTitle;

	constructor() {
		window.onbeforeunload = () => {
			localStorage.setItem("quizStep", 1);
		};

		this.#initStore();
		this.#initControls();
		this.#initScreens();
		this.#initProgress();

		if (document.querySelector(".quiz")) {
			document.querySelector(".quiz").addEventListener("click", (e) => {
				if (e.target.classList.contains("quiz--active")) {
					e.target.classList.remove("quiz--active");
					document.body.classList.remove("no-scroll");
					localStorage.setItem("quizStep", 1);
					this.#step = 1;
					this.#changeScreen();
					this.#changeProgress();
				}
			});
		}

		document.querySelectorAll('a[href="#calculator"]').forEach((el) => {
			el.addEventListener("click", (e) => {
				e.preventDefault();
				if (document.querySelector(".quiz")) {
					document.querySelector(".quiz").classList.add("quiz--active");
					document.body.classList.add("no-scroll");
				}
			});
		});
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

	#initProgress() {
		this.#stepPer = 100 / this.#steps;
		if (document.querySelector(".quiz__progress-percent")) {
			this.#progressLine = document.querySelector(".quiz__progress-percent");
			this.#progressLine.style.width = `${this.#stepPer}%`;
		}
		if (document.querySelector(".quiz__progress-title span")) {
			this.#progressTitle = document.querySelector(
				".quiz__progress-title span"
			);
			this.#progressTitle.innerHTML = Math.round(this.#stepPer * this.#step);
		}
	}

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
	 * Change progress
	 */
	#changeProgress() {
		this.#progressLine.style.width = `${this.#stepPer * this.#step}%`;
		this.#progressTitle.innerHTML = Math.round(this.#stepPer * this.#step);
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
			this.#changeProgress();
		}
	}
	#decrementStep() {
		let currentStep = Number(localStorage.getItem("quizStep"));
		if (currentStep > 1) {
			let newStep = currentStep - 1;
			localStorage.setItem("quizStep", newStep);
			this.#changeScreen();
			this.#changeProgress();
		}
	}
}
