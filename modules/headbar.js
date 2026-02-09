function Headbar() {

    const headbar = `
        <div class="header">
            <div class="left-header">
             
                <a href="../index.html" class="headbar-link">
                    <img class="logo-image" src="../photos/logo/kolor_czarny-edited.png" alt="Logo"/>
                </a>
            </div>
            <div class="right-header">
                <a href="../pages/AboutMe.html" class="headbar-link right-header-content-container right-header-content">
                    O mnie
                </a>
                <a href="../pages/Zabiegi.html" class="headbar-link right-header-content-container right-header-content">
                    Zabiegi
                </a>
                <a href="../pages/WskazaniaPrzeciw.html" class="headbar-link right-header-content-container right-header-content">
                    <div style="text-align: center;">
                        <span style='display: block;'>Wskazania,</span>
                        <span>przeciwwskazania</span>
                    </div>
                        
                </a>
                <a href="../pages/Cennik.html" class="headbar-link right-header-content-container right-header-content">
                    Cennik
                </a>
                <a href="../pages/Kontakt.html" class="headbar-link right-header-content-container right-header-content">
                    Kontakt
                </a>
                <a href="../pages/Galeria.html" class="headbar-link right-header-content-container right-header-content">
                    Galeria
                </a>
            </div>
            <div class="socialmedia-header">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/obsessionkosmetologia/" class="socialmedia-container">
                    <img class="socialmedia-photo" src="../photos/icons/facebook-icon.png" alt="Facebook icon"/>
                </a>
            </div>
        </div>
    `
    return headbar;
}

export default Headbar;

