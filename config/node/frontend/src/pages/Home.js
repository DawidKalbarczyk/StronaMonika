import React from 'react';

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

                </div>
            </div>
            <div className="main-content">
                <div className="owner-info-container">
                    <div className="owner-photo-container">
                        <img className="owner-photo" src="photos/myPhotos/20251102_131503(1)%5B1%5D.jpg"/>
                    </div>
                </div>
                <div className="owner-quote-container">

                </div>
            </div>
        </div>

    );
}

export default Home;