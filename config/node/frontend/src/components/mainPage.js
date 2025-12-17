let lastScrollTop = 0;
window.addEventListener('scroll', (event) => {
    let check = window.pageYOffset || document.documentElement.scrollTop;
    if (check > 50) {
        if (check > lastScrollTop) {
            document.querySelector('.header').classList.add('header-off');

    }
        else if (check < lastScrollTop) {
            document.querySelector('.header').classList.remove('header-off');
    }
    }

    lastScrollTop = check <= 0 ? 0 : check;
})