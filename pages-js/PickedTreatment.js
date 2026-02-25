import Headbar from "../modules/headbar.js";
import {initHomeScrollHandlers} from "../modules/common.js";
import Banner from "../modules/banners.js";
import Form from "../modules/form.js";
import initMap from "../modules/map.js";
import AdminInfo from "../modules/adminInfo.js";
import readTime from "../modules/updateTime.js";
import pickedTreatmentLoad from "../modules/pickedTreatmentLoad.js";


function PickedTreatment() {
    initHomeScrollHandlers();
    document.querySelector('body').style.marginTop = "0px";


    const headbar = Headbar();
    const banner = Banner();
    const form = Form();
    const mapContent = initMap();
    const adminInfo = AdminInfo();

    document.body.innerHTML = `
        ${headbar}
        <div class="main" id="main-link">
            ${banner}
            <div class="main-gallery-photo-container">
                 <img class="main-gallery-photo" alt="main-gallery-photo" src="../photos/treatmentPhotos/woman-portrait-skincare-routine.jpg"/>
            </div>
            <div class="main-content-container main-content-container-gallery">
                <div class="left-bar"></div>
                <div class="main-content-info">
                    <div class="main-content-info-title-container">
                        <!--<p class="main-content-info-title">Galeria</p> -->
                    </div>
                    <div class="main-content-aboutme">
                        <div class="treatment-description-1st-div">
                            <div class="treatment-description-1st-text-container">
                                
                            </div>
                            <div class="treatment-description-1st-photo-container">
                            
                            </div>
                        </div>
                        <div class="treatment-description-2nd-div">
                            <div></div>
                            <div class="treatment-description-2nd-photo-container">
                            
                            </div>
                            <div class="treatment-description-2nd-text-container">
                            
                            </div>
                        </div>
                        <div class="treatment-pros-cons-div">
                            <p class="treatment-pros-cons-title">WSKAZANIA</p>
                            <p class="treatment-pros-cons-title">PRZECIWWSKAZANIA</p>
                            <div class="treatment-pros-div">
                             
                            </div>
                            <div class="treatment-cons-div">
                                
                            </div>
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

    readTime().then(time => {
        const updateTimeElement = document.getElementById("last-update-time");
        if (updateTimeElement) {
            updateTimeElement.textContent = time;
        }
    });

    pickedTreatmentLoad();
}

export default PickedTreatment;
