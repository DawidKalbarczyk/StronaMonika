import React, {useEffect} from 'react';
import Headbar from "../components/headbar";
import ExcelReader from  "../components/loadExcel.js";
import {getImage} from "../components/imagePaths";
import "../styles/cennik.css";
function Cennik(props) {
    useEffect(() => {
        document.querySelector(".logo-image").src = getImage("/photos/logo/logo_obsession_black_transparent.png")
       if (window.location.hash !== "#/cennik") return;
        else {
            document.querySelector(".header").classList.add("header-cennik");
            document.querySelectorAll(".right-header-content").forEach((elem) => {
                elem.classList.add("right-header-content-colors-switched");
            });
            document.querySelectorAll(".right-header-content-container").forEach((elem) => {
                elem.classList.add("right-header-content-container-colors-switched");
            });
        }
        if (window.location.hash === "#/cennik") {
            document.querySelector('body').style.marginTop = "0px";
        }
    }, []);

    return (
        <div className="main">
            <div><Headbar/></div>
            <div className="facebook-pic-fixed-container">
                <img className="facebook-pic-fixed" src={getImage("/photos/saloonPhotos/1-fac.jpg")} alt={"1-fac"}/>
            </div>
            <div className="facebook-pic-fixed-container fac-cont2">
                <img className="facebook-pic-fixed fac-pic2" src={getImage("/photos/treatmentPhotos/ai-generated-9400921_1280.jpg")} alt={"2-fac"}/>
            </div>
            <div className="main-cennik-photo-container">
                 <img className="main-cennik-photo" alt="main-cennik-photo" src={getImage("/photos/treatmentPhotos/mloda-kobieta-zaczyna-zabieg-upiekszajacy-brwi.jpg")}/>
            </div>
            <div className="main-content-container">

                <div className="left-bar"></div>
                <div className="main-content-cennik">

                    <ExcelReader/>
                </div>
            </div>

        </div>
    );

}

export default Cennik;