import {getImage} from "./imagePaths";
import {Link} from "react-router-dom";
import React from "react";

function Headbar() {
    return (
        <div className="header">
            <div className="left-header">
                <Link to="/">
                    <img className="logo-image" src={getImage("/photos/logo/kolor_czarny-edited.png")} alt={"Logo"}/>
                </Link>
            </div>
            <div className="right-header">
                <Link to="/o-mnie" className="right-header-content-container">
                    <div className="right-header-content">
                        O mnie
                    </div>
                </Link>
                <Link to="/zabiegi" className="right-header-content-container">
                    <div className="right-header-content">
                        Zabiegi
                    </div>
                </Link>
                <Link to="/wskazania-przeciwwskazania" className="right-header-content-container">
                    <div className="right-header-content">
                        <span style={{display: "block"}}>Wskazania,</span> przeciwwskazania
                    </div>
                </Link>
                <Link to="/cennik" className="right-header-content-container">
                    <div className="right-header-content">
                        Cennik
                    </div>
                </Link>
                <Link to="/kontakt" className="right-header-content-container">
                    <div className="right-header-content">
                        Kontakt
                    </div>
                </Link>
                <Link to="/galeria" className="right-header-content-container">
                    <div className="right-header-content">
                        Galeria
                    </div>
                </Link>
            </div>
            <div className="socialmedia-header">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/obsessionkosmetologia/" className="socialmedia-container">
                    <img className="socialmedia-photo" src={getImage("/photos/icons/facebook-icon.png")} alt="Facebook icon"/>
                </a>
            </div>
        </div>
    );
}

export default Headbar;