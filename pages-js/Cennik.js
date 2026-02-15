import ExcelReader from  "../modules/loadExcel.js";
import Headbar from "../modules/headbar.js";
import Banner from "../modules/banners.js";
import {initHomeScrollHandlers} from "../modules/common.js";
import initMap from "../modules/map.js";

function Cennik() {
    initHomeScrollHandlers();
    document.querySelector('body').style.marginTop = "0px";

    const headbar = Headbar();
    const banner = Banner();
    const mapContent = initMap();
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
                ${mapContent}
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