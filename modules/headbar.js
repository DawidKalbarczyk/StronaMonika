function Headbar() {
    let path = "";
    let path2 = "";
    const pathName = window.location.pathname;

    if (pathName.endsWith("index.html") || pathName.endsWith("/")) {
        path = "pages"
        path2 = "photos"
    } else {
        path = "../pages"
        path2 = "../photos"
    }
    const headbar = `
        <div class="header">
            <div class="left-header">
             
                <a href="../index.html" class="headbar-link">
                    <img class="logo-image" src="${path2}/logo/kolor_czarny-edited.png" alt="Logo"/>
                </a>
            </div>
            <div class="right-header">
                <a href="${path}/AboutMe.html" class="headbar-link right-header-content-container right-header-content">
                    O mnie
                </a>
                <a href="${path}/Zabiegi.html" class="headbar-link right-header-content-container right-header-content">
                    Zabiegi
                </a>
                <a href="${path}/Cennik.html" class="headbar-link right-header-content-container right-header-content">
                    Cennik
                </a>
                <a href="${path}/Kontakt.html" class="headbar-link right-header-content-container right-header-content">
                    Kontakt
                </a>
                <a href="${path}/Galeria.html" class="headbar-link right-header-content-container right-header-content">
                    Galeria
                </a>
            </div>
            <div class="socialmedia-header">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/obsessionkosmetologia/" class="socialmedia-container">
                    <img class="socialmedia-photo" src="${path2}/icons/facebook-icon.png" alt="Facebook icon"/>
                </a>
            </div>
        </div>
    `
    return headbar;
}

export default Headbar;

