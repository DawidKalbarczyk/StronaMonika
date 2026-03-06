function AdminInfo() {
    const pathName = window.location.pathname;
    let path = "";
    let path2 = "";
    if (pathName.endsWith("index.html") || pathName.endsWith("/")) {
        path = "pages"
        path2 = "backend/photos_compressed"
    } else {
        path = "../pages"
        path2 = "../backend/photos_compressed"
    }

    const html = `
        <footer class="admin-info-footer">
            <div class="admin-info-footer-content">
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
                <div class="admin-info-hours-container">
                    <p class="admin-info-titles">Godziny otwarcia</p>
                    <p class="admin-info-descriptions">
                        Poniedziałek: XX:XX–YY:YY<br>
                        Wtorek: XX:XX–YY:YY<br>
                        Środa: XX:XX–YY:YY<br>
                        Czwartek: XX:XX–YY:YY<br>
                        Piątek: XX:XX–YY:YY<br>
                        Sobota: XX:XX–YY:YY<br>
                        Niedziela: XX:XX–YY:YY
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
                        +48 667 911 466
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
                        <span class="admin-info-titles-weighted">Telefon:</span><br>
                        +48 665 268 517<br>
                        Ostatnia aktualizacja:<br>
                        &nbsp;&nbsp;&nbsp;<span id="last-update-time">Ładowanie...</span>
                    </p>
                </div>
            </div>
            <div>
            <p class="admin-info-copyright">
                &#169;&nbsp;</nb><span class="admin-info-copyright-w"> 2026 Salon Kosmetologiczny Obsession Monika Molenda.</span> Wszelkie prawa zastrzeżone. Polityka prywatności
            </p>
            </div>
        </footer>
    `;
    return (html);
}
export default AdminInfo;