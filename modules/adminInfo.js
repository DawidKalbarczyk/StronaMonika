function AdminInfo() {
    const pathName = window.location.pathname;
    const markerIndex = pathName.indexOf("/pages/");
    const basePath = markerIndex !== -1
        ? pathName.slice(0, markerIndex)
        : pathName.replace(/\/(?:index\.html)?$/, "");
    const pageBase = `${basePath}/pages`;
    const isHomePage = !pathName.includes("/pages/") && (pathName.endsWith("index.html") || pathName.endsWith("/"));
    let path2 = "";
    if (isHomePage) {
        path2 = "backend/photos_compressed"
    } else {
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
                        Makijaż permanentny<br>
                        Depilacja różnych części ciała<br>
                        Henna brwi i rzęs<br>
                        Pedicure i Manicure<br>
                        Peelingi chemiczne i Dermapen<br>
                            <a href="${pageBase}/zabiegi" class="admin-info-href">
                           Więcej...
                        </a>
                     
                    </p>
                </div>
                <div class="admin-info-hours-container">
                    <p class="admin-info-titles">Godziny otwarcia</p>
                    <p class="admin-info-descriptions">
                        Poniedziałek: Zamknięte<br>
                        Wtorek: 08:30-14:00, 16:30-20:00<br>
                        Środa: 08:30-15:00<br>
                        Czwartek: 08:30-14:00, 16:30-20:00<br>
                        Piątek: 08:30-14:00, 16:30-20:00<br>
                        Sobota: 08:30-15:00<br>
                        Niedziela: Zamknięte
                    </p>
                </div>
                <div class="admin-info-contact-container">
                    <p class="admin-info-titles">Dane kontaktowe</p>
                    <p class="admin-info-descriptions">
                        Bohaterów Getta 24 lok. 4<br>
                        26-900 Kozienice<br>
                        <span class="admin-info-titles-weighted">
                            Telefon:
                        </span><br>
                        +48 667 911 466
                        <br><span class="admin-info-titles-weighted">
                            E-mail:
                        </span><br>
                        obsession.kosmetologia@gmail.com
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