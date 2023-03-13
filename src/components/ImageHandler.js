import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ImageHandlerDiv = styled.div`
    // border: 2px solid red;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h3 {
        display: flex;
        text-align: center;
        font-family: 'Chelsea Market', cursive;
        font-size: 2.4rem;
        margin-left: auto;
        margin-right: auto;
        // text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
        text-shadow: red 3px 3px;
    }

    p {
        display: flex;
        text-align: center;
        width: 30%;
        font-family: 'Roboto Mono', monospace;
        border: 2mm ridge #68A2B9;
        border-radius: 5%;
        cursor: crosshair;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        
       }
       img {
        width: 25%;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
       }
       div {
        display: flex;
        justify-content: center;
       }
`

const ImageHandler = props => {
    console.log(`props log ${JSON.stringify(props)}`);
    return (
        <ImageHandlerDiv>
            <h3>{props.photo.title}</h3>
            <p>{props.photo.explanation}</p>
            <p>{props.photo.date}</p>
            <img src={props.photo.url} />
        </ImageHandlerDiv>
    );

}

export default ImageHandler;