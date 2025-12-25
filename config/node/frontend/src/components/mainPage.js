/* let lastScrollTop = 0;
window.addEventListener('scroll', (event) => {
    let check = window.pageYOffset || document.documentElement.scrollTop;
    if (check > 50) {
        if (check > lastScrollTop) {
            document.querySelector('.header')?.classList.add('header-off');
    }
        else if (check < lastScrollTop) {
            document.querySelector('.header')?.classList.remove('header-off');
    }
    }

    lastScrollTop = check <= 0 ? 0 : check;
});
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY; // ile px przewinięte od góry
    if (window.location.hash !== "/") return;
    else {
        if (scrollY >= 300) {
        document.querySelector(".unique-info-tile-container")?.classList.add("unique-info-tile-container-show");

    }

  }
});
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY; // ile px przewinięte od góry

  if (scrollY >= 400) {
    document.querySelectorAll(".facebook-pic-fixed-container")?.forEach((element)=> {
        element.classList.add("facebook-pic-fixed-container-run");
    });
    // tutaj Twoja akcja
  }
  if (scrollY <= 500) {
     document.querySelectorAll(".facebook-pic-fixed-container")?.forEach((element)=> {
        element.classList.remove("facebook-pic-fixed-container-run");
    });
  }
});
*/