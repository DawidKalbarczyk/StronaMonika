import React, {useEffect} from 'react';
import "../styles/mainPage.css";
import "../styles/common-styles.css";
import { getImage } from "../components/imagePaths.js";
import "../components/mainPage.js";
//import {Typography, Button} from "@mui/material";
//import {Link} from "react-router-dom";

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
            <div className="header">
                <div className="left-header">
                    <img className="logo-image" src={getImage("/photos/logo/kolor_czarny-edited.png")} alt={"Logo"}/>
                </div>
            </div>
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
                                    <p className="unique-info-tile-title">
                                        abcdefghijklmnoprtstw
                                    </p>
                                    <p className="unique-info-tile-description">
                                        DescriptionAbcdefghmwimdiad wniadwdiwaadwniwdni
                                        dwmidawidaniwdanidwaniwdi
                                        daniwniadnfenpnfwerobrgeb
                                        dudwqndundenueufrburbug
                                    </p>
                                </div>
                            </div>
                            <div className="unique-info-tile">
                                <div className="unique-info-tile-title-container">
                                    <p className="unique-info-tile-title">
                                        abcdefghijklmnoprtstw
                                    </p>
                                    <p className="unique-info-tile-description">
                                        DescriptionAbcdefghmwimdiad wniadwdiwaadwniwdni
                                        dwmidawidaniwdanidwaniwdi
                                        daniwniadnfenpnfwerobrgeb
                                        dudwqndundenueufrburbug
                                    </p>
                                </div>
                            </div>
                            <div className="unique-info-tile">
                                <div className="unique-info-tile-title-container">
                                    <p className="unique-info-tile-title">
                                        abcdefghijklmnoprtstw
                                    </p>
                                    <p className="unique-info-tile-description">
                                        DescriptionAbcdefghmwimdiad wniadwdiwaadwniwdni
                                        dwmidawidaniwdanidwaniwdi
                                        daniwniadnfenpnfwerobrgeb
                                        dudwqndundenueufrburbug
                                    </p>
                                </div>
                            </div>
                            <div className="unique-info-tile">
                                <div className="unique-info-tile-title-container">
                                    <p className="unique-info-tile-title">
                                        abcdefghijklmnoprtstw
                                    </p>
                                    <p className="unique-info-tile-description">
                                        DescriptionAbcdefghmwimdiad wniadwdiwaadwniwdni
                                        dwmidawidaniwdanidwaniwdi
                                        daniwniadnfenpnfwerobrgeb
                                        dudwqndundenueufrburbug
                                    </p>
                                </div>
                            </div>
                            <div className="unique-info-tile">
                                <div className="unique-info-tile-title-container">
                                    <p className="unique-info-tile-title">
                                        abcdefghijklmnoprtstw
                                    </p>
                                    <p className="unique-info-tile-description">
                                        DescriptionAbcdefghmwimdiad wniadwdiwaadwniwdni
                                        dwmidawidaniwdanidwaniwdi
                                        daniwniadnfenpnfwerobrgeb
                                        dudwqndundenueufrburbug
                                    </p>
                                </div>
                            </div>
                            <div className="unique-info-tile">
                                <div className="unique-info-tile-title-container">
                                    <p className="unique-info-tile-title">
                                        abcdefghijklmnoprtstw
                                    </p>
                                    <p className="unique-info-tile-description">
                                        DescriptionAbcdefghmwimdiad wniadwdiwaadwniwdni
                                        dwmidawidaniwdanidwaniwdi
                                        daniwniadnfenpnfwerobrgeb
                                        dudwqndundenueufrburbug
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundColor: "white", height: 200}}>aaaa</div>
                </div>
            </div>

        </div>


    );
}

export default Home;