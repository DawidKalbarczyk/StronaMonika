import Headbar from "../modules/headbar.js";
import {initHomeScrollHandlers} from "../modules/common.js";
import Banner from "../modules/banners.js";
import Form from "../modules/form.js";
import initMap from "../modules/map.js";
import AdminInfo from "../modules/adminInfo.js";
import readTime from "../modules/updateTime.js";

function Kontakt() {
    initHomeScrollHandlers();
    document.querySelector('body').style.marginTop = "0px";

    const headbar = Headbar();
    const banner = Banner();
    const form = Form();
    const mapContent = initMap();
    const adminInfo = AdminInfo();

    document.body.innerHTML = `
        ${headbar}
        <main class="main" id="main-link" aria-label="Kontakt z salonem">
            <h1 class="seo-h1">Kontakt – Salon Kosmetologiczny Obsession Kozienice | Tel: 667 911 466</h1>
            ${banner}
            <div class="main-contact-photo-container">
                 <img class="main-contact-photo" alt="Salon kosmetologiczny Obsession Kozienice – zapraszamy na zabiegi" src="../backend/photos_compressed/treatmentPhotos/woman-portrait-skincare-routine%20(1).jpg"/>
            </div>
            <section class="main-content-container main-content-container-contact" aria-label="Dane kontaktowe salonu">
                <div class="left-bar"></div>
                <div class="main-content-info">
                    <div class="main-content-info-title-container">
                        <p class="main-content-info-title">Kontakt</p>
                    </div>
                    <div class="main-content-contact">
                        <div class="social-media-wrapper">
                            <div class="social-media-container">
                                <a target="_blank" href="https://www.facebook.com/obsessionkosmetologia/" class="social-media-link">
                                    <div class="social-media-item-container">
                                        <p class="social-media-item-title">
                                            Facebook
                                        </p>
                                        <img alt="facebook-picture" class="social-media-item-photo" src="../backend/photos_compressed/icons/facebook-icon.png"/>
                                        
                                    </div>
                                </a>
                                <a target="_blank" href="" class="social-media-link">
                                    <div class="social-media-item-container">
                                        <p class="social-media-item-title">
                                            Instagram
                                        </p>
                                        <img alt="instagram-picture" class="social-media-item-photo" src="../backend/photos_compressed/icons/instagram%20(1).png"/>
                                        
                                    </div>
                                </a>
                                <a target="_blank" href="https://wa.me/48667911466" class="social-media-link">
                                    <div class="social-media-item-container">
                                        <p class="social-media-item-title">
                                            WhatsApp
                                        </p>
                                        <img alt="whatsapp-picture" class="social-media-item-photo" src="../backend/photos_compressed/icons/whatsapp.png"/>
                                        
                                    </div>
                                </a>
                                <a target="_blank" href="https://www.google.com/search?q=salon+obsession+monika+molenda" class="social-media-link">
                                    <div class="social-media-item-container">
                                        <p class="social-media-item-title">
                                            Google
                                        </p>
                                        <img alt="google-picture" class="social-media-item-photo" src="../backend/photos_compressed/icons/google.png"/>
                                        
                                    </div>
                                </a>
                                <a target="_blank" href="https://www.google.com/maps/place/Salon+Kosmetologiczny+Obsession+Monika+Molenda/@51.5856847,21.5516814,17z/data=!3m1!4b1!4m6!3m5!1s0x471893b532066d7b:0xfd0915e32f4c2dcd!8m2!3d51.5856814!4d21.5542563!16s%2Fg%2F11y14_3k78?entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D/" class="social-media-link">
                                    <div class="social-media-item-container">
                                        <p class="social-media-item-title">
                                            Google Maps
                                        </p>
                                        <img alt="google-maps-picture" class="social-media-item-photo" src="../backend/photos_compressed/icons/google-maps.png"/>
                                        
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="company-details">
                            <div class="company-details-wrapper">
                                <div class="company-details-container">
                                    <div class="company-details-text-wrapper">
                                        <div class="company-details-text-container">
                                            <p class="paragraph-title">Dane o firmie</p>
                                            <p>NIP: 8121814059</p>
                                            <p>REGON: 365937706</p>
                                            <p>Adres:</p>
                                            <p class="paragraph-indent">ul. Bohaterów Getta 24 lok.4</p>
                                            <p class="paragraph-indent">26-900 Kozienice</p>
                                        </div>
                                        <div class="company-hours-container">
                                            <p class="paragraph-title">Godziny otwarcia</p>
                                            <p class="paragraph-indent">Poniedziałek: Zamknięte</p>
                                            <p class="paragraph-indent">Wtorek: 08:30-14:00, 16:30-20:00</p>
                                            <p class="paragraph-indent">Środa: 08:30-15:00</p>
                                            <p class="paragraph-indent">Czwartek: 08:30-14:00, 16:30-20:00</p>
                                            <p class="paragraph-indent">Piątek: 08:30-14:00, 16:30-20:00</p>
                                            <p class="paragraph-indent">Sobota: 08:30-15:00</p>
                                            <p class="paragraph-indent">Niedziela: Zamknięte</p>
                                        </div>
                                    </div>
                                    <div class="company-details-photo-container">
                                        <img alt="contact-photo1" class="company-details-photo" src="../backend/photos_compressed/myPhotos/contact-photo-1.jpg"/>
                                        <img alt="contact-photo2" class="company-details-photo" src="../backend/photos_compressed/myPhotos/20260308_120511.jpg"/>
                                        <img alt="contact-photo3" class="company-details-photo" src="../backend/photos_compressed/myPhotos/contact-photo-3.jpg"/>
                                        <img alt="contact-photo4" class="company-details-photo" src="../backend/photos_compressed/myPhotos/contact-photo-4.jpg"/>
                                        <img alt="contact-photo5" class="company-details-photo" src="../backend/photos_compressed/myPhotos/contact-photo-5.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ${form}
                    <div class="section-separator"></div>
                    ${mapContent}
                    <div class="section-separator"></div>
                    ${adminInfo}
                </div>


            </section>


        </main>




    `;
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('slide-in'); observer.unobserve(e.target); }
        });
    }, { threshold: 0.15 });


    document.querySelectorAll('.social-media-item-container').forEach((el, i) => {
        el.classList.add('slide-bottom'); el.style.transitionDelay = `${i * 0.02}s`; observer.observe(el);
    });
    ['.company-details-text-container', '.company-hours-container', '.company-details-photo-container'].forEach((sel, i) => {
        const el = document.querySelector(sel);
        if (el) { el.classList.add(i < 2 ? 'slide-left' : 'slide-right'); observer.observe(el); }
    });

    document.querySelector(".logo-image").src = "../backend/photos_compressed/logo/logo-obsession-zmianakolorow-bialy-cropped.png";
    document.querySelector(".header").classList.add("header-contact");
    document.querySelectorAll(".right-header-content").forEach((elem) => {
        elem.classList.add("right-header-content-colors-switched");
    });
    document.querySelectorAll(".right-header-content-container").forEach((elem) => {
        elem.classList.add("right-header-content-container-colors-switched");
    });


    const isMobileKontakt = window.innerWidth <= 767;
    const kontaktHeaderThreshold = isMobileKontakt ? 250 : 630;
    let lastScrollTop2 = 0;
    window.addEventListener('scroll', () => {
        let check = window.pageYOffset || document.documentElement.scrollTop;
        if (check > kontaktHeaderThreshold) {
            document.querySelector('.header').classList.remove('header-contact');
        } else {
            document.querySelector('.header').classList.add('header-contact');
        }

        lastScrollTop2 = check <= 0 ? 0 : check;
    });

    readTime().then(time => {
        const updateTimeElement = document.getElementById("last-update-time");
        if (updateTimeElement) {
            updateTimeElement.textContent = time;
        }
    });
}

export default Kontakt;