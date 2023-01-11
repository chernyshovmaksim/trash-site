export class Hamburger {
	#elHamburger;
	#elSiteName;
	#elMobileMenu;
	#elsListItemParent;

	constructor(elHamburger, elSiteName) {
		window.onbeforeunload = () => {
			localStorage.setItem("statusMM", "0");
		};

		this.#elHamburger = elHamburger;
		this.#elSiteName = elSiteName;
		this.#elMobileMenu = document.querySelector(".mobile-menu");
		this.#elsListItemParent = document.querySelectorAll(
			".mobile-menu__list-item--parent"
		);

		this.#elHamburger.addEventListener("click", () => {
			this.#changeStatus();
			this.#checkStatus();
		});

		this.#elsListItemParent.forEach((el) => {
			el.addEventListener("click", (e) => {
				console.log(e.target);
				e.preventDefault();
				el.querySelector(".mobile-menu__submenu").classList.toggle(
					"mobile-menu__submenu--active"
				);
			});
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
				this.#elMobileMenu.classList.remove("mobile-menu--active");
			} else {
				this.#elHamburger.classList.add("hamburger--active");
				this.#elSiteName.classList.add("site-name--active");
				this.#elMobileMenu.classList.add("mobile-menu--active");
			}
		}
	}
}
