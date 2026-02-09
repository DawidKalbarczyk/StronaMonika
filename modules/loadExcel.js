import React, { useEffect, useState } from "react";
import {getImage} from "./imagePaths";
function ExcelReader() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(getImage("/data/cennik.json"))
            .then(res => res.json())
            .then(setData);
    }, []);

    return (
        <div>
            {data.map((item, i) => (
                <div key={i} style={{color: "white"}}>
                    {item.NAZWA} – {item.OPIS} - {item.CENA} zł
                </div>
            ))}
        </div>
    );
}

export default ExcelReader;