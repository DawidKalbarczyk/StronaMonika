import React from 'react';
import Headbar from "../components/headbar";

function WskazaniaPrzeciw(props) {
    return (
        <div>
            <div><Headbar/></div>
            <div style={{fontSize: 50, color: "white", textAlign: "center"}}>Wskazania i przeciwwskazania</div>
        </div>
    );

}
// TODO dodać kafelki do wyboru danej podstrony.
export default WskazaniaPrzeciw;