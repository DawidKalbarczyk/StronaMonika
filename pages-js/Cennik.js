import ExcelReader from  "../modules/loadExcel.js";
import Headbar from "../modules/headbar.js";

function Cennik() {
    document.querySelector('body').style.marginTop = "0px";

    const headbar = Headbar();

    document.body.innerHTML = `
        <div class="main">
            ${headbar}
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
                    <! -- ExcelReader --> 
                </div>
            </div>

        </div>
    `;

    const excelReader = ExcelReader();
    document.querySelector('.main-content-cennik').appendChild(excelReader);
    document.querySelector(".logo-image").src = "../photos/logo/logo_obsession_black_transparent.png";
    document.querySelector(".header").classList.add("header-cennik");
    document.querySelectorAll(".right-header-content").forEach((elem) => {
        elem.classList.add("right-header-content-colors-switched");
    });
    document.querySelectorAll(".right-header-content-container").forEach((elem) => {
        elem.classList.add("right-header-content-container-colors-switched");
    });
}

export default Cennik;