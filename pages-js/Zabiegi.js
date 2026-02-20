import Headbar from "../modules/headbar.js";
import {initHomeScrollHandlers} from "../modules/common.js";
import Banner from "../modules/banners.js";
import Form from "../modules/form.js";
import initMap from "../modules/map.js";
import AdminInfo from "../modules/adminInfo.js";
import readTime from "../modules/updateTime.js";

function Zabiegi() {
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
            <div class="main-treat-photo-container">
                 <img class="main-treat-photo" alt="main-treat-photo" src="../photos/treatmentPhotos/Gemini_Generated_Image_evsm4eevsm4eevsm.png"/>
            </div>
            <div class="main-content-container main-content-container-treat">
                <div class="left-bar"></div>
                <div class="main-content-info">
                    <div class="main-content-info-title-container">
                        <p class="main-content-info-title">Zabiegi</p>
                    </div>
                    <div class="main-content-treat">
                          <div>
                          
                          </div>
                    </div>
                    ${form}
                    ${mapContent}
                    ${adminInfo}
                </div>


            </div>


        </div>




    `;
    document.querySelector(".logo-image").src = "../photos/logo/logo-obsession-zmianakolorow-bialy-cropped.png";
    document.querySelector(".header").classList.add("header-treat");
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
            document.querySelector('.header').classList.remove('header-treat');
        } else {
            document.querySelector('.header').classList.add('header-treat');
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

export default Zabiegi;