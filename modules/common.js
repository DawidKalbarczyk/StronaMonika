import AdminInfo from "./adminInfo.js";
import readTime from "./updateTime.js";

export function initFormAnimations() {
	const formForm = document.querySelector('.form-form');
	if (!formForm) return;

	const formSeparator = document.querySelector('.form-separator');
	const formOther = document.querySelector('.form-other');
	const formContainer = document.querySelector('.form-container');
	const formMainContainer = document.querySelector('.form-main-container');

	formForm.classList.add('slide-left');
	if (formSeparator) formSeparator.classList.add('slide-center');
	if (formOther) formOther.classList.add('slide-right');

	if (formMainContainer) {
		const formSlideObs = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					if (formContainer) formContainer.classList.add('form-container-show');
					formForm.classList.add('slide-in');
					if (formSeparator) formSeparator.classList.add('slide-in');
					if (formOther) formOther.classList.add('slide-in');
					formSlideObs.disconnect();
				}
			});
		}, { rootMargin: '0px 0px -10% 0px' });

		formSlideObs.observe(formMainContainer);
	}
}

export function initHomeScrollHandlers() {
	document.addEventListener('DOMContentLoaded', () => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					if (entry.target.classList.contains('unique-info-container')) {
						entry.target.classList.add('unique-info-container-show');
					}
					if (entry.target.classList.contains('work-info-container')) {
						entry.target.classList.add('work-info-container-show');
					}
					if (entry.target.classList.contains('form-container')) {
						entry.target.classList.add('form-container-show');
					}
				}
			});
			document.querySelector('body').style.marginTop = "150px";
		});

		const uniqueContainer = document.querySelector('.unique-info-container');
		if (uniqueContainer) {
			observer.observe(uniqueContainer);
		}
		const workContainer = document.querySelector('.work-info-container');
		if (workContainer) {
			observer.observe(workContainer);
		}
		const formContainer = document.querySelector('.form-container');
		if (formContainer) {
			observer.observe(formContainer);
		}
	});

	let lastScrollTop = 0;
	window.addEventListener('scroll', () => {
		let check = window.pageYOffset || document.documentElement.scrollTop;
		if (check > 50) {
			if (check > lastScrollTop) {
				document.querySelector('.header').classList.add('header-off');
				document.querySelector('.right-header-return-button-link').classList.add('right-header-return-button-link-enabled');
			} else if (check < lastScrollTop) {
				document.querySelector('.header').classList.remove('header-off');
				document.querySelector('.right-header-return-button-link').classList.remove('right-header-return-button-link-enabled');
			}
		}

		lastScrollTop = check <= 0 ? 0 : check;
	});


	const pathName = window.location.pathname;
	if (pathName.endsWith("index.html") || pathName.endsWith("/")) {
		window.addEventListener("scroll", () => {
			const scrollY = window.scrollY;
			if (scrollY >= 300) {
				document.querySelector(".unique-info-tile-container").classList.add("unique-info-tile-container-show");
			}
			if (scrollY >= 1400) {
				document.querySelector(".work-info-tile-container").classList.add("work-info-tile-container-show");
			}
			if (scrollY >= 3400) {
				document.querySelector(".form-container").classList.add('form-container-show');
			}
		});
	}


	window.addEventListener("scroll", () => {
		const scrollY = window.scrollY;

		if (scrollY >= 300) {
			document.querySelectorAll(".facebook-pic-fixed-container").forEach((element) => {
				element.classList.add("facebook-pic-fixed-container-run");
			});
		}
		if (scrollY <= 400) {
			document.querySelectorAll(".facebook-pic-fixed-container").forEach((element) => {
				element.classList.remove("facebook-pic-fixed-container-run");
			});
		}
	});
}


export function handleReadTime() {
	document.addEventListener('DOMContentLoaded', () => {
		const mainContent = document.querySelector(".main-content");
		if (mainContent) {
			mainContent.innerHTML += AdminInfo();
			readTime().then(time => {
				const updateTimeElement = document.getElementById("last-update-time");
				if (updateTimeElement) {
					updateTimeElement.textContent = time;
				}
			});
		}
	});
}