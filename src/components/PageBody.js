import React, { useState, useEffect } from "react";
import "../App.css";
import ImageHandler from "./ImageHandler";
import { fetchNasaData } from "../Call";
import axios from "axios";
import styled from "styled-components";

const PageBodyDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        margin-top: 1%;
        width: 30%;
        height: 50px;
        border: 2mm ridge #99D9D9;
    }
`

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
        <PageBodyDiv>
            <button onClick={fetchNasaData}>Fetch Image</button>
            {apodPic && <ImageHandler photo={apodPic} />}
        </PageBodyDiv>
    );
}

export default PageBody;