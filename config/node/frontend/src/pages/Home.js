import React, {useEffect} from 'react';
import "../styles/mainPage.css";
import "../styles/common-styles.css";
import { getImage } from "../components/imagePaths.js";
import "../components/mainPage.js";
//import {Typography, Button} from "@mui/material";
import Headbar from "../components/headbar.js";
import AdminInfo from "../components/adminInfo.js";
function Home(props) {
    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('unique-info-container-show');
        }
    });
    });

    const container = document.querySelector('.unique-info-container');
    if (container) {
        observer.observe(container);
    }
    });
    return (
        /*
        <<div className="home">
            <h1 className="home_title">GEOPORTAL</h1>
            <Typography className="home_subtitle">
                Geoportal tematyczny poświęcony danym przestrzennym,

            </Typography>

            <Button className="home__button" variant="contained" size="large" component={Link} to='services'>START</Button>


        </div>>

         */


        // Main Frame!!!!!

        <div className="main">
            <Headbar/>
            <div className="facebook-pic-fixed-container">
                <img className="facebook-pic-fixed" src={getImage("/photos/saloonPhotos/1-fac.jpg")} alt={"1-fac"}/>
            </div>
            <div className="facebook-pic-fixed-container fac-cont2">
                <img className="facebook-pic-fixed fac-pic2" src={getImage("/photos/treatmentPhotos/ai-generated-9400921_1280.jpg")} alt={"2-fac"}/>
            </div>
            <div className="main-content-container">
                <div className="left-bar"></div>
                <div className="main-content">
                    <div className="owner-info-container">

                        <div className="owner-photo-container">
                            <img className="owner-photo" src={getImage("/photos/myPhotos/homepagephoto.jpg")} alt={"Owner"}/>
                        </div>
                        <div className="owner-quote-container-wrapper">
                            <div className="owner-quote-container">
                                <div className="owner-quote">
                                    „Każda kobieta niesie w sobie historię <span className="owner-quote-span1">odwagi,
                                    doświadczeń i decyzji,</span> <span className="owner-quote-span2">
                                    które ją ukształtowały a to miejsce pozwala na chwilę zatrzymać się
                                    </span> <span className="owner-quote-span3">przy sobie
                                    i tym, co naprawdę dla Ciebie ważne."</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="unique-info-container">
                        <div className="unique-info-title">
                            <p className="unique-info-text">Dlaczego warto mnie odwiedzić?</p>
                        </div>

                        <div className="unique-info-tile-container">
                            <div className="unique-info-tile">
                                <div className="unique-info-tile-title-container">
                                    <img className="unique-info-tile-image" src={getImage("/photos/icons/individual-icon-png-1.jpg")} alt={"Indywidualne Podejście"}/>
                                    <p className="unique-info-tile-title">
                                        Indywidualne podejście
                                    </p>
                                    <p className="unique-info-tile-description">
                                        Zależy mi na tym, aby dobrze poznać Twoje potrzeby i oczekiwania,
                                        dzięki czemu mogę zaproponować rozwiązania dopasowane do Ciebie.
                                    </p>
                                </div>
                            </div>
                            <div className="unique-info-tile">
                                <div className="unique-info-tile-title-container">
                                    <img className="unique-info-tile-image" src={getImage("/photos/icons/experience-icon-woman.png")} alt={"Doświadczenie"}/>
                                    <p className="unique-info-tile-title">
                                        Doświadczenie poparte praktyką
                                    </p>
                                    <p className="unique-info-tile-description">
                                        Wiedza i zdobyte doświadczenie pozwalają mi realizować
                                        zabiegi sprawnie, solidinie i z dbałością o szczegóły.
                                    </p>
                                </div>
                            </div>
                            <div className="unique-info-tile">
                                <div className="unique-info-tile-title-container">
                                    <img className="unique-info-tile-image" src={getImage("/photos/icons/quality-icon.png")} alt={"Jakość"}/>
                                    <p className="unique-info-tile-title">
                                        Wysoka jakość wykonania
                                    </p>
                                    <p className="unique-info-tile-description">
                                        Stawiam na dokładność i estetykę, ponieważ wierzę,
                                        że przekłada się to na zadowolenie klientów.
                                    </p>
                                </div>
                            </div>
                            <div className="unique-info-tile">
                                <div className="unique-info-tile-title-container">
                                    <img className="unique-info-tile-image" style={{transform: "scale(1.3)"}} src={getImage("/photos/icons/punctuality-icon.png")} alt={"Punktualność"}/>
                                    <p className="unique-info-tile-title">
                                        Rzetelność i terminowość
                                    </p>
                                    <p className="unique-info-tile-description">
                                        Dbam o to, aby wszystko było gotowe na twoją wizytę.
                                        Możesz na mnie liczyć - punktualność i terminowość to podstawa.
                                    </p>
                                </div>
                            </div>
                            <div className="unique-info-tile">
                                <div className="unique-info-tile-title-container">
                                    <img className="unique-info-tile-image" src={getImage("/photos/icons/friendly-icon.png")} alt={"przyjazna atmosfera"}/>
                                    <p className="unique-info-tile-title">
                                        Przyjazna atmosfera
                                    </p>
                                    <p className="unique-info-tile-description">
                                        Utrzymuję dobrą komunikację i komfort na każdym etapie, aby
                                        wizyta była prosta i bezproblemowa.
                                    </p>
                                </div>
                            </div>
                            <div className="unique-info-tile">
                                <div className="unique-info-tile-title-container">
                                    <img className="unique-info-tile-image" style={{transform: "scale(0.8)"}} src={getImage("/photos/icons/trusty-icon.png")} alt={"Zaufanie"}/>
                                    <p className="unique-info-tile-title">
                                        Zaufanie klientów
                                    </p>
                                    <p className="unique-info-tile-description">
                                        Pozytywne opinie oraz osoby, które chętnie do mnie wracają, są najlepszym potwierdzeniem jakości mojej pracy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundColor: "white", height: 200}}>aaaa</div>
                    <AdminInfo/>
                </div>

            </div>

        </div>


    );
}

export default Home;