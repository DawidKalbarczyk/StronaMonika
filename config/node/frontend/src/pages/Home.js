import React from 'react';
import "../styles/mainPage.css";
import { getImage } from "../components/imagePaths.js";
//import {Typography, Button} from "@mui/material";
//import {Link} from "react-router-dom";

function Home(props) {
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
            <div className="main-content-container">
                <div className="left-bar"></div>
                <div className="main-content">
                    <div className="owner-info-container">
                        <div className="owner-photo-container">
                            <img className="owner-photo" src={getImage("/photos/myPhotos/homepagephoto.jpg")} alt={"Owner"}/>
                        </div>
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
                    <div className="unique-info-container">
                        <div className="unique-info-title">
                            <p className="unique-info-text">Dlaczego warto mnie odwiedzic?</p>
                        </div>

                        <div className="unique-info-tile-container">
                            <div className="unique-info-tile"></div>
                            <div className="unique-info-tile"></div>
                            <div className="unique-info-tile"></div>
                            <div className="unique-info-tile"></div>
                            <div className="unique-info-tile"></div>
                            <div className="unique-info-tile"></div>
                        </div>
                    </div>
                </div>
                <div className="right-bar"></div>
            </div>

        </div>



    );
}

export default Home;