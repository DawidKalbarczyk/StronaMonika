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
				}
			});
			document.querySelector('body').style.marginTop = "150px";
		});

		const uniqueContainer = document.querySelector('.unique-info-container');
		if (uniqueContainer) {
			observer.observe(uniqueContainer);
		}
		const workContainer = document.querySelector('.unique-info-container');
		if (workContainer) {
			observer.observe(workContainer);
		}
	});

	let lastScrollTop = 0;
	window.addEventListener('scroll', () => {
		let check = window.pageYOffset || document.documentElement.scrollTop;
		if (check > 50) {
			if (check > lastScrollTop) {
				document.querySelector('.header').classList.add('header-off');
			} else if (check < lastScrollTop) {
				document.querySelector('.header').classList.remove('header-off');
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
		});
	}


	window.addEventListener("scroll", () => {
		const scrollY = window.scrollY;

		if (scrollY >= 400) {
			document.querySelectorAll(".facebook-pic-fixed-container").forEach((element) => {
				element.classList.add("facebook-pic-fixed-container-run");
			});
		}
		if (scrollY <= 500) {
			document.querySelectorAll(".facebook-pic-fixed-container").forEach((element) => {
				element.classList.remove("facebook-pic-fixed-container-run");
			});
		}
	});
}
