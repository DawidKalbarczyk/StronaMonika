import Headbar from "./modules/headbar.js";
import Banner from "./modules/banners.js";
import {handleReadTime, initHomeScrollHandlers, initFormAnimations} from "./modules/common.js";
import initMap from "./modules/map.js";
import Form from "./modules/form.js";

function Home() {
    initHomeScrollHandlers();
    handleReadTime();
    const headbar = Headbar();
    const banner = Banner();
    const mapComponent = initMap();
    const form = Form();
    // Komunikat dotyczący nieaktywności salonu
    const isAnnouncment = true;

    document.body.innerHTML = (`
        ${headbar}
        <main class="main" id="main-link">
            ${banner}
            <div class="announcement-div">
                <div class="announcement-separate-div">
                    <img alt="door-icon" class="door-icon" src="backend/photos/icons/closed-sign.png"/>
                    <div class="announcement-text">
                        <p>Salon Obsession będzie nieczynny w dniach 05.03.2026r. - 09.03.2026r.</p>
                        <p>Przepraszam za wszelkie niedogodności i dziękuję za wyrozumiałość.</p>
                    </div>
                    <img alt="door-icon" class="door-icon" src="backend/photos/icons/closed-sign.png"/>
                </div>
                
            </div>
            <div class="main-content-container">
                <div class="left-bar"></div>
                <div class="main-content">
                    <section class="owner-info-container">
                        <h1 class="seo-h1">Salon Kosmetologiczny Obsession – Monika Molenda, Kozienice</h1>

                        <div class="owner-photo-container">
                            <img class="owner-photo" src="backend/photos_compressed/myPhotos/homepagephoto.jpg" alt="Owner"/>
                            <img class="owner-photo owner-photo-mobile-extra" src="backend/photos_compressed/myPhotos/20251101_111034.jpg" alt="Owner 2"/>
                            <img class="owner-photo owner-photo-mobile-extra" src="backend/photos_compressed/myPhotos/20251101_111127.jpg" alt="Owner 3"/>
                            <img class="owner-photo owner-photo-mobile-extra" src="backend/photos_compressed/myPhotos/20251102_130628.jpg" alt="Owner 4"/>
                            <img class="owner-photo owner-photo-mobile-extra" src="backend/photos_compressed/myPhotos/20251102_130901.jpg" alt="Owner 5"/>
                        </div>
                        <div class="owner-quote-container-wrapper">
                            <div class="owner-quote-container">
                                <div class="owner-quote">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;„Każda kobieta niesie w sobie historię odwagi,
                                    doświadczeń i decyzji,
                                    które ją ukształtowały a to miejsce pozwala na chwilę zatrzymać się
                                    przy sobie i tym, co naprawdę dla Ciebie ważne."
                                </div>
                            </div>
                        </div>

                    </section>
                    <div class="section-separator"></div>
                    <section class="unique-info-container">
                        <div class="unique-info-title">
                            <p class="unique-info-text">Dlaczego warto mnie odwiedzić?</p>
                        </div>

                        <div class="unique-info-tile-container">
                            <div class="unique-info-tile unique-info-tile-x1">
                                <div class="unique-info-tile-title-container">
                                    <img class="unique-info-tile-image" style="mix-blend-mode: multiply;" src="backend/photos_compressed/icons/individual-icon-png-1.jpg" alt="Indywidualne Podejście"/>
                                    <p class="unique-info-tile-title">
                                        Indywidualne podejście
                                    </p>
                                    <p class="unique-info-tile-description">
                                        Zależy mi na tym, aby dobrze poznać Twoje potrzeby i oczekiwania,
                                        dzięki czemu mogę zaproponować rozwiązania dopasowane do Ciebie.
                                    </p>
                                </div>
                            </div>
                            <div class="unique-info-tile unique-info-tile-x2">
                                <div class="unique-info-tile-title-container">
                                    <img class="unique-info-tile-image" src="backend/photos_compressed/icons/experience-icon-woman.png" alt="Doświadczenie"/>
                                    <p class="unique-info-tile-title">
                                        Doświadczenie poparte praktyką
                                    </p>
                                    <p class="unique-info-tile-description">
                                        Wiedza i zdobyte doświadczenie pozwalają mi realizować
                                        zabiegi sprawnie, solidinie i z dbałością o szczegóły.
                                    </p>
                                </div>
                            </div>
                            <div class="unique-info-tile unique-info-tile-x3">
                                <div class="unique-info-tile-title-container">
                                    <img class="unique-info-tile-image" src="backend/photos_compressed/icons/quality-icon.png" alt="Jakość"/>
                                    <p class="unique-info-tile-title">
                                        Wysoka jakość wykonania
                                    </p>
                                    <p class="unique-info-tile-description">
                                        Stawiam na dokładność i estetykę, ponieważ wierzę,
                                        że przekłada się to na zadowolenie klientów.
                                    </p>
                                </div>
                            </div>
                            <div class="unique-info-tile unique-info-tile-x4">
                                <div class="unique-info-tile-title-container">
                                    <img class="unique-info-tile-image" style="transform: scale(1.3);" src="backend/photos_compressed/icons/punctuality-icon.png" alt="Punktualność"/>
                                    <p class="unique-info-tile-title">
                                        Rzetelność i terminowość
                                    </p>
                                    <p class="unique-info-tile-description">
                                        Dbam o to, aby wszystko było gotowe na twoją wizytę.
                                        Możesz na mnie liczyć - punktualność i terminowość to podstawa.
                                    </p>
                                </div>
                            </div>
                            <div class="unique-info-tile unique-info-tile-x5">
                                <div class="unique-info-tile-title-container">
                                    <img class="unique-info-tile-image" src="backend/photos_compressed/icons/friendly-icon.png" alt="przyjazna atmosfera"/>
                                    <p class="unique-info-tile-title">
                                        Przyjazna atmosfera
                                    </p>
                                    <p class="unique-info-tile-description">
                                        Utrzymuję dobrą komunikację i komfort na każdym etapie, aby
                                        wizyta była prosta i bezproblemowa.
                                    </p>
                                </div>
                            </div>
                            <div class="unique-info-tile unique-info-tile-x6">
                                <div class="unique-info-tile-title-container">
                                    <img class="unique-info-tile-image" style="transform: scale(0.9);" src="backend/photos_compressed/icons/trusty-icon.png" alt="Zaufanie"/>
                                    <p class="unique-info-tile-title">
                                        Zaufanie klientów
                                    </p>
                                    <p class="unique-info-tile-description">
                                        Pozytywne opinie oraz osoby, które chętnie do mnie wracają, są najlepszym potwierdzeniem jakości mojej pracy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <div class="section-separator"></div>
                    
                    <section class="work-info-container">
                        <div class="work-info-title">
                            <p class="work-info-text">Wybrane usługi jakie oferuję</p>
                        </div>

                        <div class="work-info-tile-container">
                            <div class="work-info-tile work-info-tile-x1">
                                <div class="work-info-tile-title-container">
                                    <img class="work-info-tile-image" src="backend/photos_compressed/icons/services-icons/acne-treatment.png" alt="Oczyszczanie Twarzy"/>
                                    <p class="work-info-tile-title">
                                        Oczyszczanie i Regeneracja Twarzy
                                    </p>
                                    <p class="work-info-tile-description">
                                        Przywróć swojej skórze świeżość i blask. Zabieg głęboko oczyszcza pory, usuwa
                                        zanieszczyszczenia i dotlenia cerę sprawiając, żewygląda na wypoczętą, głądką i promienną.
                                    </p>
                                </div>
                            </div>
                            <div class="work-info-tile work-info-tile-x2">
                                <div class="work-info-tile-title-container">
                                    <img class="work-info-tile-image" src="backend/photos_compressed/icons/services-icons/beauty.png" alt="Makijaż"/>
                                    <p class="work-info-tile-title">
                                        Makijaż Okolicznościowy
                                    </p>
                                    <p class="work-info-tile-description">
                                        Perfekcyjny wygląd na każdą ważną chwilę. Podkreślę Twoje naturalne atuty i ukryję niedoskonałości,
                                        tworząc makijaż, który zachwyca trwałością i idealnie pasuje do Twojej urody.
                                    </p>
                                </div>
                            </div>
                            <div class="work-info-tile work-info-tile-x3">
                                <div class="work-info-tile-title-container">
                                    <img class="work-info-tile-image" src="backend/photos_compressed/icons/services-icons/botox-lips.png" alt="Zabieg ust"/>
                                    <p class="work-info-tile-title">
                                        Modelowanie i Estetyka Ust
                                    </p>
                                    <p class="work-info-tile-description">
                                        Podkreśl zmysłowość swoich ust. Zabieg pozwala na subtelną koretkę kształtu, poprawę symetrii,
                                        wygładzanie zmarszczek wokół ust lub delikatne wywinięcie wargi do pełniejszego efektu.
                                    </p>
                                </div>
                            </div>
                            <div class="work-info-tile work-info-tile-x4">
                                <div class="work-info-tile-title-container">
                                    <img class="work-info-tile-image" src="backend/photos_compressed/icons/services-icons/nail-polish.png" alt="Manicure Hybrydowy"/>
                                    <p class="work-info-tile-title">
                                        Manicure Hybrydowy
                                    </p>
                                    <p class="work-info-tile-description">
                                        Zadbane dłonie to Twoja wizytówka. Oferuję trwałą stylizację odporną na odpryski, precyzyjne 
                                        opracowanie skórek oraz szeroką gamę kolorów, którymi będziesz cieszyć się nawet do 3 tygodni.
                                    </p>
                                </div>
                            </div>
                            <div class="work-info-tile work-info-tile-x5">
                                <div class="work-info-tile-title-container">
                                    <img class="work-info-tile-image" src="backend/photos_compressed/icons/services-icons/permanent-eyebrows.png" alt="Brwi permanentne"/>
                                    <p class="work-info-tile-title">
                                        Makijaż Permanenty Brwi
                                    </p>
                                    <p class="work-info-tile-description">
                                        Oszczędź czas i ciesz się idealnym kształtem brwi tuż po przebudzeniu. Zabieg nadaje twarzy 
                                        wyrazistości, uzupełnia braki we włoskach i gwarantuje naturalny efekt, który zostaje z Tobą na długo.
                                    </p>
                                </div>
                            </div>
                            
                            <div class="work-info-tile work-info-tile-x6">
                                <div class="work-info-tile-title-container">
                                    <img class="work-info-tile-image" src="backend/photos_compressed/icons/services-icons/eyelash.png" alt="Rzęsy"/>
                                    <p class="work-info-tile-title">
                                        Stylizacja i Przedłużanie Rzęs
                                    </p>
                                    <p class="work-info-tile-description">
                                        Zapomnij o tuszowaniu rzęs. Oferuję profesjonalną plikację, która zagęszcza i wydłuża naturalne włoski.
                                        Dobieram odpowiednią metodę, aby nadać Twojemu spojrzeniu głębie i spektakularny, ale estetyczny wygląd.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="section-separator"></div>
                    ${form}
                    <div class="section-separator"></div>
                    ${mapComponent}
                    
                </div>

            </div>

        </main>
    `);
    if (isAnnouncment) {
        document.querySelector(".announcement-div").style.opacity = "1";
    } else {
        document.querySelector(".announcement-div").style.display = "none";
        document.body.classList.add("no-announcement");
    }
    setTimeout(() => initFormAnimations(), 0);
}
export default Home;


//TODO skalowanie dla wszystkich urządzeń, w tej chwili kod jest pomieszany i dziala na 1920x1080 lub 1680
//TODO zmienić w formularzu link dla strony postawionej już za pomocą hostingu
