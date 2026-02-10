import AdminInfo from "./modules/adminInfo.js";
import Headbar from "./modules/headbar.js";
import Banner from "./modules/banners.js";
import { initHomeScrollHandlers } from "./modules/common.js";

function Home() {
    initHomeScrollHandlers();


    const adminInfo = AdminInfo();
    const headbar = Headbar();
    const banner = Banner();
    document.body.innerHTML = (`
        ${headbar}
        <div class="main">
            ${banner}
            <div class="main-content-container">
                <div class="left-bar"></div>
                <div class="main-content">
                    <div class="owner-info-container">

                        <div class="owner-photo-container">
                            <img class="owner-photo" src="photos/myPhotos/homepagephoto.jpg" alt="Owner"/>
                        </div>
                        <div class="owner-quote-container-wrapper">
                            <div class="owner-quote-container">
                                <div class="owner-quote">
                                    „Każda kobieta niesie w sobie historię <span class="owner-quote-span1">odwagi,
                                    doświadczeń i decyzji,</span> <span class="owner-quote-span2">
                                    które ją ukształtowały a to miejsce pozwala na chwilę zatrzymać się
                                    </span> <span class="owner-quote-span3">przy sobie
                                    i tym, co naprawdę dla Ciebie ważne."</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="unique-info-container">
                        <div class="unique-info-title">
                            <p class="unique-info-text">Dlaczego warto mnie odwiedzić?</p>
                        </div>

                        <div class="unique-info-tile-container">
                            <div class="unique-info-tile">
                                <div class="unique-info-tile-title-container">
                                    <img class="unique-info-tile-image" src="photos/icons/individual-icon-png-1.jpg" alt="Indywidualne Podejście"/>
                                    <p class="unique-info-tile-title">
                                        Indywidualne podejście
                                    </p>
                                    <p class="unique-info-tile-description">
                                        Zależy mi na tym, aby dobrze poznać Twoje potrzeby i oczekiwania,
                                        dzięki czemu mogę zaproponować rozwiązania dopasowane do Ciebie.
                                    </p>
                                </div>
                            </div>
                            <div class="unique-info-tile">
                                <div class="unique-info-tile-title-container">
                                    <img class="unique-info-tile-image" src="photos/icons/experience-icon-woman.png" alt="Doświadczenie"/>
                                    <p class="unique-info-tile-title">
                                        Doświadczenie poparte praktyką
                                    </p>
                                    <p class="unique-info-tile-description">
                                        Wiedza i zdobyte doświadczenie pozwalają mi realizować
                                        zabiegi sprawnie, solidinie i z dbałością o szczegóły.
                                    </p>
                                </div>
                            </div>
                            <div class="unique-info-tile">
                                <div class="unique-info-tile-title-container">
                                    <img class="unique-info-tile-image" src="photos/icons/quality-icon.png" alt="Jakość"/>
                                    <p class="unique-info-tile-title">
                                        Wysoka jakość wykonania
                                    </p>
                                    <p class="unique-info-tile-description">
                                        Stawiam na dokładność i estetykę, ponieważ wierzę,
                                        że przekłada się to na zadowolenie klientów.
                                    </p>
                                </div>
                            </div>
                            <div class="unique-info-tile">
                                <div class="unique-info-tile-title-container">
                                    <img class="unique-info-tile-image" style="transform: scale(1.3);" src="photos/icons/punctuality-icon.png" alt="Punktualność"/>
                                    <p class="unique-info-tile-title">
                                        Rzetelność i terminowość
                                    </p>
                                    <p class="unique-info-tile-description">
                                        Dbam o to, aby wszystko było gotowe na twoją wizytę.
                                        Możesz na mnie liczyć - punktualność i terminowość to podstawa.
                                    </p>
                                </div>
                            </div>
                            <div class="unique-info-tile">
                                <div class="unique-info-tile-title-container">
                                    <img class="unique-info-tile-image" src="photos/icons/friendly-icon.png" alt="przyjazna atmosfera"/>
                                    <p class="unique-info-tile-title">
                                        Przyjazna atmosfera
                                    </p>
                                    <p class="unique-info-tile-description">
                                        Utrzymuję dobrą komunikację i komfort na każdym etapie, aby
                                        wizyta była prosta i bezproblemowa.
                                    </p>
                                </div>
                            </div>
                            <div class="unique-info-tile">
                                <div class="unique-info-tile-title-container">
                                    <img class="unique-info-tile-image" style="transform: scale(0.8);" src="photos/icons/trusty-icon.png" alt="Zaufanie"/>
                                    <p class="unique-info-tile-title">
                                        Zaufanie klientów
                                    </p>
                                    <p class="unique-info-tile-description">
                                        Pozytywne opinie oraz osoby, które chętnie do mnie wracają, są najlepszym potwierdzeniem jakości mojej pracy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundColor: "white", height: 200}}>aaaa</div>
                    ${adminInfo}
                </div>

            </div>

        </div>
    `);
}
export default Home;
