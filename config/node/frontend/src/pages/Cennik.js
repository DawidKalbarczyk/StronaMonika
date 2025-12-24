import React from 'react';
import Headbar from "../components/headbar";
import ExcelReader from  "../components/loadExcel.js";
function Cennik(props) {

    return (
        <div>
            <div><Headbar/></div>
            <div style={{fontSize: 50, color: "white", textAlign: "center"}}>Cennik</div>1
            <ExcelReader/>
        </div>
    );

}

export default Cennik;