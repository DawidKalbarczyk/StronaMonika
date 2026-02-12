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
                            <div class="unique-info-tile unique-info-tile-x1">
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
                            <div class="unique-info-tile unique-info-tile-x2">
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
                            <div class="unique-info-tile unique-info-tile-x3">
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
                            <div class="unique-info-tile unique-info-tile-x4">
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
                            <div class="unique-info-tile unique-info-tile-x5">
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
                            <div class="unique-info-tile unique-info-tile-x6">
                                <div class="unique-info-tile-title-container">
                                    <img class="unique-info-tile-image" style="transform: scale(0.9);" src="photos/icons/trusty-icon.png" alt="Zaufanie"/>
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
                    
                    
                    
                    <div class="work-info-container">
                        <div class="work-info-title">
                            <p class="work-info-text">Wybrane usługi jakie oferuję</p>
                        </div>

                        <div class="work-info-tile-container">
                            <div class="work-info-tile work-info-tile-x1">
                                <div class="work-info-tile-title-container">
                                    <img class="work-info-tile-image" src="photos/icons/services-icons/acne-treatment.png" alt="Oczyszczanie Twarzy"/>
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
                                    <img class="work-info-tile-image" src="photos/icons/services-icons/beauty.png" alt="Makijaż"/>
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
                                    <img class="work-info-tile-image" src="photos/icons/services-icons/botox-lips.png" alt="Zabieg ust"/>
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
                                    <img class="work-info-tile-image" src="photos/icons/services-icons/nail-polish.png" alt="Manicure Hybrydowy"/>
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
                                    <img class="work-info-tile-image" src="photos/icons/services-icons/permanent-eyebrows.png" alt="Brwi permanentne"/>
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
                                    <img class="work-info-tile-image" src="photos/icons/services-icons/eyelash.png" alt="Rzęsy"/>
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
                    </div>
                    <div style={{backgroundColor: "white", height: 200}}>aaaa</div>
                    ${adminInfo}
                </div>

            </div>

        </div>
    `);
}
export default Home;
