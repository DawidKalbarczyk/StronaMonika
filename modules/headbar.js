function Headbar() {
    let path = "";
    let path2 = "";
    const pathName = window.location.pathname;

    if (pathName.endsWith("index.html") || pathName.endsWith("/")) {
        path = "pages"
        path2 = "backend/photos_compressed"
    } else {
        path = "../pages"
        path2 = "../backend/photos_compressed"
    }
    const headbar = `
        <header class="header">
            <div class="left-header">
             
                <a href="../index.html" class="headbar-link">
                    <img class="logo-image" src="${path2}/logo/kolor_czarny-edited.png" alt="Logo"/>
                </a>
            </div>
            
            <!-- Hamburger button (mobile only) -->
            <button class="hamburger-btn" id="hamburgerBtn" aria-label="Menu">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
            
            <nav class="right-header" aria-label="Nawigacja główna">
                <a href="${path}/AboutMe.html" class="headbar-link right-header-content-container right-header-content">
                    O mnie
                </a>
                <a href="${path}/Zabiegi.html" class="headbar-link right-header-content-container right-header-content">
                    Zabiegi
                </a>
                <a href="${path}/Cennik.html" class="headbar-link right-header-content-container right-header-content">
                    Cennik
                </a>
                <a href="#main-link" class="right-header-return-button-link">
                    <div class="right-header-absolute">
                        <img alt="return-button" class="right-header-return-button" src="${path2}/icons/return-button.png"/>
                </div>
                </a>
                
            </nav>
            <nav class="right-header right-header2" aria-label="Nawigacja dodatkowa">
                <a href="${path}/Kontakt.html" class="headbar-link right-header-content-container right-header-content">
                    Kontakt
                </a>
                <a href="${path}/Galeria.html" class="headbar-link right-header-content-container right-header-content">
                    Galeria
                </a>
                <a href="#contact" class="header-button-link">
                    <button class="header-button">
                        Umów wizytę
                    </button>
                </a>
                
            </nav>
            
        </header>
        
        <!-- Mobile menu overlay -->
        <div class="mobile-menu-overlay" id="mobileMenuOverlay"></div>
        <nav class="mobile-menu" id="mobileMenu">
            <a href="${path}/AboutMe.html" class="mobile-menu-link">O mnie</a>
            <a href="${path}/Zabiegi.html" class="mobile-menu-link">Zabiegi</a>
            <a href="${path}/Cennik.html" class="mobile-menu-link">Cennik</a>
            <a href="${path}/Kontakt.html" class="mobile-menu-link">Kontakt</a>
            <a href="${path}/Galeria.html" class="mobile-menu-link">Galeria</a>
            <a href="#contact" class="mobile-menu-link mobile-menu-cta">Umów wizytę</a>
            <div class="mobile-menu-social">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/obsessionkosmetologia/">
                    <img class="socialmedia-photo" src="${path2}/icons/facebook-icon.png" alt="Facebook icon"/>
                </a>
            </div>
        </nav>
    `

    // Hamburger menu toggle logic
    setTimeout(() => {
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileOverlay = document.getElementById('mobileMenuOverlay');

        if (hamburgerBtn && mobileMenu && mobileOverlay) {
            const toggleMenu = () => {
                hamburgerBtn.classList.toggle('hamburger-active');
                mobileMenu.classList.toggle('mobile-menu-open');
                mobileOverlay.classList.toggle('mobile-menu-overlay-visible');
                document.body.classList.toggle('mobile-menu-no-scroll');
            };

            hamburgerBtn.addEventListener('click', toggleMenu);
            mobileOverlay.addEventListener('click', toggleMenu);

            mobileMenu.querySelectorAll('.mobile-menu-link').forEach(link => {
                link.addEventListener('click', () => {
                    hamburgerBtn.classList.remove('hamburger-active');
                    mobileMenu.classList.remove('mobile-menu-open');
                    mobileOverlay.classList.remove('mobile-menu-overlay-visible');
                    document.body.classList.remove('mobile-menu-no-scroll');
                });
            });
        }
    }, 0);

    return headbar;
}

export default Headbar;

