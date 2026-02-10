import ExcelReader from  "../modules/loadExcel.js";
import Headbar from "../modules/headbar.js";
import Banner from "../modules/banners.js";
import {initHomeScrollHandlers} from "../modules/common.js";

function Cennik() {
    initHomeScrollHandlers();
    document.querySelector('body').style.marginTop = "0px";

    const headbar = Headbar();
    const banner = Banner();
    document.body.innerHTML = `
        ${headbar}
        <div class="main">
            ${banner}
            <div class="facebook-pic-fixed-container">
                <img class="facebook-pic-fixed" src="../photos/saloonPhotos/1-fac.jpg" alt="1-fac"/>
            </div>
            <div class="facebook-pic-fixed-container fac-cont2">
                <img class="facebook-pic-fixed fac-pic2" src="../photos/treatmentPhotos/ai-generated-9400921_1280.jpg" alt="2-fac"/>
            </div>
            <div class="main-cennik-photo-container">
                 <img class="main-cennik-photo" alt="main-cennik-photo" src="../photos/treatmentPhotos/mloda-kobieta-zaczyna-zabieg-upiekszajacy-brwi.jpg"/>
            </div>
            <div class="main-content-container">

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
            </div>

        </div>
    `;

    const excelReader = ExcelReader();
    document.querySelector('.main-content-cennik').appendChild(excelReader);
    document.querySelector(".logo-image").src = "../photos/logo/logo-obsession-zmianakolorow-bialy-cropped.png";
    document.querySelector(".header").classList.add("header-cennik");
    document.querySelectorAll(".right-header-content").forEach((elem) => {
        elem.classList.add("right-header-content-colors-switched");
    });
    document.querySelectorAll(".right-header-content-container").forEach((elem) => {
        elem.classList.add("right-header-content-container-colors-switched");
    });
}

export default Cennik;