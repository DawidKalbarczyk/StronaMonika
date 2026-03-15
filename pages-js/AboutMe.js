import Headbar from "../modules/headbar.js";
import {initHomeScrollHandlers} from "../modules/common.js";
import Banner from "../modules/banners.js";
import Form from "../modules/form.js";
import initMap from "../modules/map.js";
import AdminInfo from "../modules/adminInfo.js";
import readTime from "../modules/updateTime.js";

function AboutMe() {
    initHomeScrollHandlers();
    document.querySelector('body').style.marginTop = "0px";

    const headbar = Headbar();
    const banner = Banner();
    const form = Form();
    const mapContent = initMap();
    const adminInfo = AdminInfo();
    document.body.innerHTML = `
        ${headbar}
        <main class="main" id="main-link" aria-label="O mnie – Monika Molenda">
            <h1 class="seo-h1">O mnie – Monika Molenda | Salon Kosmetologiczny Obsession Kozienice</h1>
            ${banner}
           
            <div class="main-aboutme-photo-container">
                 <img class="main-aboutme-photo" alt="Wnętrze salonu kosmetologicznego Obsession w Kozienicach" src="../backend/photos_compressed/saloonPhotos/20251103_083853.jpg"/>
            </div>
            
            <section class="main-content-container main-content-container-aboutme" aria-label="Treść strony o mnie">
                <div class="main-content-info">
                    <div class="main-content-info-title-container">
                        <p class="main-content-info-title">O Mnie</p>
                    </div>
                </div>
                
                <div class="left-bar"></div>
                <div class="main-content-aboutme">
                    <div class="content-container">
                        <div class="aboutme-container">
                            <div class="aboutme-container-info-div">
                                <div class="aboutme-container-photo-div">
                                    <img class="aboutme-container-photo" alt="Monika Molenda – właścicielka Salonu Obsession Kozienice" src="../backend/photos_compressed/myPhotos/omnie2.png">
                                </div>
                                <div class="aboutme-container-text-div">
                                    <p>WŁAŚCICIELKA SALONU OBSESSION</p>
                                    <p>DYPLOMOWANY KOSMETOLOG</p>
                                    <p>LINERGISTKA</p>
                                    
                                </div>
                            </div>
                            
                            <div class="aboutme-container-desc-wrapper">
                                <div class="aboutme-container-desc">
                                    <p class="aboutme-container-desc-p">
                                       <span class="aboutme-desc-centered">Zapraszam Cię do mojego świata Beauty.</span>
                                        Moje wieloletnie zainteresowanie kosmetologią i pasja do niej przerodziły się w zawód, z którym jestem związana od kilku lat. Jestem dyplomowanym kosmetologiem, absolwentką Wyższej Szkoły Zawodowej  Kosmetologii i Pielęgnacji Zdrowia w Warszawie oraz Broadway Beauty Collage o kierunku Kosmetologia Estetyczna, a także uczestniczką wielu szkoleń i kursów uzupełniających kompetencje zawodowe.Z branżą Beaty związana jestem przeszło 20 lat. 
                                        Na co dzień pracuję w moim salonie w Kozienicach, gdzie przeprowadzam zabiegi kosmetologiczne skór dojrzałych, ale również problematycznych t.j. trądzikowych, naczyniowych, z przebarwieniami, rozszerzonymi porami.
                                        Wykonuję również makijaż permanentny brwi, ust oraz oczu w kilku technikach pigmentacji. Jestem stylistką brwi i rzęs. W moim salonie można wykonać takie zabiegi oprawy oczu jak podstawowa henna brwi i rzęs z regulacją oraz laminacja rzęs czy brwi. 
                                        Piękno kobiet jest moją pasją. Stąd też inna moja profesja, czyli wizaż. Słucham potrzeb klientki, ale kiedy trzeba staram się też doradzić. Jestem cierpliwa i dokładna.
                                        Jestem również stylistką paznokci. Piękne i zadbane dłonie i stopy to wizytówka każdej kobiety. W swoich stylizacjach stawiam na naturalność oraz minimalizm, jak mówią mniej znaczy więcej.
                                        Jeśli marzysz o gładkiej skórze możesz umówić się również na zabieg depilacji woskiem różnych partii ciała. Wszystko po to by poczuć się pewniej.
                                        Mogę powiedzić, że mam w życiu to szczęście, że zawód który sobie wybrałam  jest jednocześnie moją pasją.<br><span class="aboutme-desc-centered"> Do zobaczenia w Obsession.</span>
    
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div class="about-me-container-separator"></div>
                    <! -- ExcelReader --> 
                </div>
                ${form}
                <div class="section-separator"></div>
                ${mapContent}
                <div class="section-separator"></div>
                ${adminInfo}
            </section>
            
            
        </main>

    `;
    document.querySelector(".logo-image").src = "../backend/photos_compressed/logo/logo-obsession-zmianakolorow-bialy-cropped.png";
    document.querySelector(".header").classList.add("header-aboutme");
    document.querySelectorAll(".right-header-content").forEach((elem) => {
        elem.classList.add("right-header-content-colors-switched");
    });
    document.querySelectorAll(".right-header-content-container").forEach((elem) => {
        elem.classList.add("right-header-content-container-colors-switched");
    });


    const isMobileAboutMe = window.innerWidth <= 767;
    const headerSwitchThreshold = isMobileAboutMe ? 250 : 630;

    let lastScrollTop2 = 0;
    window.addEventListener('scroll', () => {
        let check = window.pageYOffset || document.documentElement.scrollTop;
        if (check > headerSwitchThreshold) {
            document.querySelector('.header').classList.remove('header-aboutme');
        } else {
            document.querySelector('.header').classList.add('header-aboutme');
        }

        lastScrollTop2 = check <= 0 ? 0 : check;
    });

    // Intersection Observer dla animacji slide-in
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Obserwuj elementy do animacji
    const photoDiv = document.querySelector('.aboutme-container-photo-div');
    const textDiv = document.querySelector('.aboutme-container-text-div');
    const descDiv = document.querySelector('.aboutme-container-desc');

    if (photoDiv) observer.observe(photoDiv);
    if (textDiv) observer.observe(textDiv);
    if (descDiv) observer.observe(descDiv);

    // Aktualizacja czasu ostatniej modyfikacji
    readTime().then(time => {
        const updateTimeElement = document.getElementById("last-update-time");
        if (updateTimeElement) {
            updateTimeElement.textContent = time;
        }
    });
}

export default AboutMe;