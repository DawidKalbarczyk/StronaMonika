import Headbar from "../modules/headbar.js";
import {initHomeScrollHandlers, initFormAnimations} from "../modules/common.js";
import Banner from "../modules/banners.js";
import Form from "../modules/form.js";
import initMap from "../modules/map.js";
import AdminInfo from "../modules/adminInfo.js";
import readTime from "../modules/updateTime.js";
import generatePhotosHTML from "../modules/generatePhotos.js";

function Galeria() {
    initHomeScrollHandlers();
    document.querySelector('body').style.marginTop = "0px";

    const headbar = Headbar();
    const banner = Banner();
    const form = Form();
    const mapContent = initMap();
    const adminInfo = AdminInfo();

    document.body.innerHTML = `
        ${headbar}
        <div class="main">
            ${banner}
            <div class="main-gallery-photo-container">
                 <img class="main-gallery-photo" alt="main-gallery-photo" src="../photos/treatmentPhotos/7364.jpg"/>
            </div>
            <div class="main-content-container main-content-container-gallery">
                <div class="left-bar"></div>
                <div class="main-content-info">
                    <div class="main-content-info-title-container">
                        <p class="main-content-info-title">Galeria</p>
                    </div>
                    <div class="main-content-aboutme">
                        <div class="main-content-photos">
                        <!-- tu wejdą zdjęcia -->
                        </div>
                        <div class="gallery-container-separator">
                    </div>
                    ${form}
                    ${mapContent}
                    ${adminInfo}
                </div>
                
                
            </div>
            
            
        </div>
                
                
                
        
    `;




    document.querySelector(".logo-image").src = "../photos/logo/logo-obsession-zmianakolorow-bialy-cropped.png";
    document.querySelector(".header").classList.add("header-gallery");
    document.querySelectorAll(".right-header-content").forEach((elem) => {
        elem.classList.add("right-header-content-colors-switched");
    });
    document.querySelectorAll(".right-header-content-container").forEach((elem) => {
        elem.classList.add("right-header-content-container-colors-switched");
    });


    let lastScrollTop2 = 0;
    window.addEventListener('scroll', () => {
        let check = window.pageYOffset || document.documentElement.scrollTop;
        if (check > 630) {
            document.querySelector('.header').classList.remove('header-gallery');
        } else {
            document.querySelector('.header').classList.add('header-gallery');
        }

        lastScrollTop2 = check <= 0 ? 0 : check;
    });

    setTimeout(() => initFormAnimations(), 0);

    readTime().then(time => {
        const updateTimeElement = document.getElementById("last-update-time");
        if (updateTimeElement) {
            updateTimeElement.textContent = time;
        }
    });

    generatePhotosHTML('../backend/gallery').then(photos => {
        document.querySelector('.main-content-photos').innerHTML = photos;

        const photoElements = document.querySelectorAll(".photo-simple, .photo-center");
        photoElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
        });

        setTimeout(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        el.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
                        requestAnimationFrame(() => {
                            el.style.opacity = '1';
                            el.style.transform = 'translateY(0)';
                        });
                        observer.unobserve(el);
                    }
                });
            }, { rootMargin: '0px 0px -50% 0px' });

            photoElements.forEach(photo => observer.observe(photo));
        }, 100);

        document.querySelectorAll(".photo-simple img, .photo-center img").forEach((photo) => {
            photo.addEventListener("click", (e) => {
                const overlay = document.createElement("div");
                overlay.classList.add("photo-overlay");

                const img = document.createElement("img");
                img.src = e.target.src;
                img.classList.add("photo-overlay-img");

                overlay.appendChild(img);
                document.body.appendChild(overlay);

                overlay.addEventListener("click", () => overlay.remove());
            });
        });
    });

}

export default Galeria;