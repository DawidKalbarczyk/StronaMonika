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
        <main class="main" id="main-link" aria-label="Galeria zdjęć">
            <h1 class="seo-h1">Galeria zdjęć – Salon Kosmetologiczny Obsession Kozienice</h1>
            ${banner}
            <div class="main-gallery-photo-container">
                 <img class="main-gallery-photo" alt="Zdjęcie z salonu kosmetologicznego Obsession Kozienice" src="../backend/photos_compressed/treatmentPhotos/7364.jpg"/>
            </div>
            <section class="main-content-container main-content-container-gallery" aria-label="Galeria zdjęć z salonu">
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
                    <div class="section-separator"></div>
                    ${mapContent}
                    <div class="section-separator"></div>
                    ${adminInfo}
                </div>
                
                
            </section>
            
            
        </main>
                
                
                
        
    `;




    document.querySelector(".logo-image").src = "../backend/photos_compressed/logo/logo-obsession-zmianakolorow-bialy-cropped.png";
    document.querySelector(".header").classList.add("header-gallery");
    document.querySelectorAll(".right-header-content").forEach((elem) => {
        elem.classList.add("right-header-content-colors-switched");
    });
    document.querySelectorAll(".right-header-content-container").forEach((elem) => {
        elem.classList.add("right-header-content-container-colors-switched");
    });


    const isMobileGaleria = window.innerWidth <= 767;
    const galeriaHeaderThreshold = isMobileGaleria ? 250 : 630;
    let lastScrollTop2 = 0;
    window.addEventListener('scroll', () => {
        let check = window.pageYOffset || document.documentElement.scrollTop;
        if (check > galeriaHeaderThreshold) {
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

    generatePhotosHTML('../backend/gallery_compressed').then(photos => {
        document.querySelector('.main-content-photos').innerHTML = photos;

        const photoElements = Array.from(document.querySelectorAll(".gallery-photo"));
        const photoSources = photoElements.map(photo => photo.src);

        photoElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
        });

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
        }, { rootMargin: '0px 0px -10% 0px' });

        photoElements.forEach(photo => observer.observe(photo));

        const openPhotoOverlay = (startIndex) => {
            if (!photoSources.length) return;

            let currentIndex = startIndex;
            const previousBodyOverflow = document.body.style.overflow;

            const overlay = document.createElement("div");
            overlay.classList.add("photo-overlay");

            const prevButton = document.createElement("button");
            prevButton.type = "button";
            prevButton.className = "photo-overlay-nav photo-overlay-nav-left";
            prevButton.setAttribute("aria-label", "Poprzednie zdjęcie");
            prevButton.textContent = "‹";

            const nextButton = document.createElement("button");
            nextButton.type = "button";
            nextButton.className = "photo-overlay-nav photo-overlay-nav-right";
            nextButton.setAttribute("aria-label", "Następne zdjęcie");
            nextButton.textContent = "›";

            const closeButton = document.createElement("button");
            closeButton.type = "button";
            closeButton.className = "photo-overlay-close";
            closeButton.setAttribute("aria-label", "Zamknij podgląd zdjęcia");
            closeButton.textContent = "×";

            const img = document.createElement("img");
            img.classList.add("photo-overlay-img");

            const updateOverlayImage = () => {
                img.src = photoSources[currentIndex];
                img.alt = `Zdjęcie ${currentIndex + 1} z ${photoSources.length}`;
            };

            const showPrevious = (e) => {
                if (e) e.stopPropagation();
                currentIndex = (currentIndex - 1 + photoSources.length) % photoSources.length;
                updateOverlayImage();
            };

            const showNext = (e) => {
                if (e) e.stopPropagation();
                currentIndex = (currentIndex + 1) % photoSources.length;
                updateOverlayImage();
            };

            const handleKeyDown = (e) => {
                if (e.key === "ArrowLeft") {
                    showPrevious();
                    return;
                }
                if (e.key === "ArrowRight") {
                    showNext();
                    return;
                }
                if (e.key === "Escape") {
                    closeOverlay();
                }
            };

            const closeOverlay = () => {
                document.removeEventListener("keydown", handleKeyDown);
                document.body.style.overflow = previousBodyOverflow;
                overlay.remove();
            };

            prevButton.addEventListener("click", showPrevious);
            nextButton.addEventListener("click", showNext);
            closeButton.addEventListener("click", (e) => {
                e.stopPropagation();
                closeOverlay();
            });
            img.addEventListener("click", (e) => e.stopPropagation());

            overlay.appendChild(closeButton);
            overlay.appendChild(prevButton);
            overlay.appendChild(img);
            overlay.appendChild(nextButton);
            document.body.appendChild(overlay);
            document.body.style.overflow = "hidden";

            overlay.addEventListener("click", (e) => {
                if (e.target === overlay) {
                    closeOverlay();
                }
            });

            document.addEventListener("keydown", handleKeyDown);
            updateOverlayImage();
        };

        photoElements.forEach((photo, index) => {
            photo.addEventListener("click", () => {
                openPhotoOverlay(index);
            });
        });
    });

}

export default Galeria;