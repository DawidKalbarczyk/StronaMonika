function AdminInfo() {
    /*const html = `
        <footer class="footer bg-colour">
            <div class="footer-content">
                <span>Administrator strony: <a href="mailto:k_kalbarczyk@o2.pl">k_kalbarczyk@o2.pl</a></span>
                <span class="separator">|</span>
                <span>Strona o charakterze informacyjnym</span>
                <span class="separator">|</span>
                <span>Wszelkie prawa zastrzeżone</span>
                <span class="separator">|</span>
                <span>© 2025 Dawid Kalbarczyk</span>
            </div>
        </footer>
    `

     */
    const pathName = window.location.pathname;
    let path = "";
    let path2 = "";
    if (pathName.endsWith("index.html") || pathName.endsWith("/")) {
        path = "pages"
        path2 = "photos"
    } else {
        path = "../pages"
        path2 = "../photos"
    }

    const html = `
        <footer class="admin-info-footer">
            <div class="admin-info-logo-container">
                <img src="${path2}/logo/logo-obsession-zmianakolorow-bialy-cropped.png" alt="admin info logo" class="admin-info-logo-container-logo">
                <p class="admin-info-logo-description">- ekspert w kosmetologii. Zadbaj ze mną o swoje piękno świadomie, skutecznie i bezpiecznie!</p>
            </div>
            <div class="admin-info-services-container">
                <p class="admin-info-titles">Moje zabiegi</p>
                <p class="admin-info-descriptions">
                    XXXXXXXXXXXXXXXXXX<br>
                    XXXXXXXXXXXXXXXXXX<br>
                    XXXXXXXXXXXXXXXXXX<br>
                    XXXXXXXXXXXXXXXXXX<br>
                    XXXXXXXXXXXXXXXXXX<br>
                    <a href="${path}/Zabiegi.html" class="admin-info-href">
                       Więcej...
                    </a>
                 
                </p>
            </div>
            <div class="admin-info-contact-container">
                <p class="admin-info-titles">Dane kontaktowe</p>
                <p class="admin-info-descriptions">
                    Bohaterów Getta 24 lok. X<br>
                    26-900 Kozienice<br>
                    <span class="admin-info-titles-weighted">
                        Telefon:
                    </span><br>
                    +48 XXX XXX XXX
                    <br><span class="admin-info-titles-weighted">
                        E-mail:
                    </span><br>
                    XXXXXXXXXXXXXXXXXXXXX
                </p>
            </div>
            <div class="admin-info-admin-container">
                <p class="admin-info-titles">Wykonawca</p>
                <p class="admin-info-descriptions admin">
                    Dawid Kalbarczyk<br>
                    <span class="admin-info-titles-weighted">E-mail:</span><br> 
                    k_kalbarczyk@o2.pl<br>
                    <span class="admin-info-titles-weighted">Tel:</span><br>
                    +48 665 268 517<br>
                    Ostatnia aktualizacja:<br>
                    &nbsp;&nbsp;&nbsp;<span id="last-update-time">Ładowanie...</span>
                </p>
            </div>
        </footer>
    `;
    return (html);
}
export default AdminInfo;