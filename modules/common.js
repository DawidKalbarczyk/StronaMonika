export function initHomeScrollHandlers() {
	document.addEventListener('DOMContentLoaded', () => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('unique-info-container-show');
				}
			});
			document.querySelector('body').style.marginTop = "150px";
		});

		const container = document.querySelector('.unique-info-container');
		if (container) {
			observer.observe(container);
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
