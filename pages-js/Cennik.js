import ExcelReader from  "../modules/loadExcel.js";
import Headbar from "../modules/headbar.js";
import Banner from "../modules/banners.js";
import {initHomeScrollHandlers, initFormAnimations} from "../modules/common.js";
import initMap from "../modules/map.js";
import Form from "../modules/form.js";
import AdminInfo from "../modules/adminInfo.js";

function Cennik() {
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
           
            <div class="main-cennik-photo-container">
                 <img class="main-cennik-photo" alt="main-cennik-photo" src="../photos/treatmentPhotos/mloda-kobieta-zaczyna-zabieg-upiekszajacy-brwi.jpg"/>
            </div>
            
            <div class="main-content-container main-content-container-cennik">
                <div class="main-content-info">
                    <div class="main-content-info-title-container">
                        <p class="main-content-info-title">Kosmetologia</p>
                    </div>
                    <div class="main-content-info-description-container">
                        <div class="main-content-info-description">
                                            
                        </div>
                    </div>
                </div>
                
                <div class="left-bar"></div>
                <div class="main-content-cennik">
                    <div class="item-container item-container-titles">
                        <div class="item-props item-props-titles">Zabieg</div>
                        <div class="separator">|</div>
                        <div class="item-props item-props-titles">Opis</div>
                        <div class="separator">|</div>
                        <div class="item-props item-props-titles">Cena</div>
                    </div>
                    <! -- ExcelReader --> 
                </div>
                ${form}
                ${mapContent}
                ${adminInfo}
            </div>
            
            
        </div>
        
    `;
    const excelReader = ExcelReader();
    document.querySelector('.main-content-cennik').appendChild(excelReader);

    // Slide-in animation for item-props on scroll
    const mutObs = new MutationObserver(() => {
        const rows = document.querySelectorAll('.item-container:not(.item-container-titles)');
        if (rows.length === 0) return;
        mutObs.disconnect();

        rows.forEach(row => {
            const props = row.querySelectorAll('.item-props');
            if (props[0]) props[0].classList.add('slide-left');
            if (props[1]) props[1].classList.add('slide-center');
            if (props[2]) props[2].classList.add('slide-right');
        });

        const scrollObs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('item-container-visible');
                    entry.target.querySelectorAll('.item-props').forEach(prop => {
                        prop.classList.add('slide-in');
                    });
                    scrollObs.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -10% 0px' });

        rows.forEach(row => scrollObs.observe(row));
    });
    mutObs.observe(document.querySelector('.main-content-cennik'), { childList: true, subtree: true });

    setTimeout(() => initFormAnimations(), 0);

    document.querySelector(".logo-image").src = "../photos/logo/logo-obsession-zmianakolorow-bialy-cropped.png";
    document.querySelector(".header").classList.add("header-cennik");
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
            document.querySelector('.header').classList.remove('header-cennik');
        } else {
            document.querySelector('.header').classList.add('header-cennik');
        }

        lastScrollTop2 = check <= 0 ? 0 : check;
    });
}

export default Cennik;