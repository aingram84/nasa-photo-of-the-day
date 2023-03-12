import React, { useState, useEffect } from "react";
import "../App.css";
import ImageHandler from "./ImageHandler";
import { fetchNasaData } from "../Call";
import axios from "axios";



export const PageBody = props => {
    const [apodPic, setApodPic] = useState(null);
    useEffect(() => {

        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(response => {
                console.log(response.data)
                setApodPic(response.data);
            })
            .catch(error => {
                console.error(error)
            })


        // setApodPic(fetchNasaData);

    }, []);
    return (
        <div>
            <button onClick={fetchNasaData}>APOD Data</button>
            {apodPic && <ImageHandler photo={apodPic} />}
        </div>
    );
}

export default PageBody;