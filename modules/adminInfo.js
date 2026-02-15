import readTime from "./updateTime.js";

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
    const time = readTime();


    const html = `
        <footer class="admin-info-footer">
            <div class="admin-info-logo-container">
                <img src="../photos/logo/logo_obsession_black_transparent.png" alt="admin info logo" class="admin-info-logo-container-logo">
                <p>- ekspert w kosmetologii. Zadbaj ze mną o swoje piękno świadomie, skutecznie i bezpiecznie!</p>
            </div>
            <div class="admin-info-services-container">
                <p class="admin-info-titles">Moje zabiegi</p>
                <p class="admin-info-descriptions">
                
                </p>
            </div>
            <div class="admin-info-contact-container">
                <p class="admin-info-titles">Dane kontaktowe</p>
                <p class="admin-info-descriptions">
                    Dawid Kalbarczyk<br>
                    E-mail: k_kalbarczyk@o2.pl<br>
                    Tel: +48 665 268 517
                    Ostatnia aktualizacja:<br>
                    &nbsp;&nbsp;&nbsp;${time}
                </p>
            </div>
            <div class="admin-info-admin-container">
                <p class="admin-info-titles">Wykonawca</p>
                <p class="admin-info-descriptions"></p>
            </div>
        </footer>
    `;
    return (html);
}
export default AdminInfo;