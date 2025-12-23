import React from 'react';
import Headbar from "../components/headbar";

function AboutMe(props) {
    return (
        <div>
            <div><Headbar/></div>
            <div style={{fontSize: 50, color: "white", textAlign: "center"}}>O mnie</div>
        </div>
    );

}

export default AboutMe;