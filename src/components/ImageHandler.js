import React, { useState, useEffect } from "react";

const ImageHandler = props => {
    console.log(`props log ${JSON.stringify(props)}`);
    return (
        <div>
            <h3>{props.photo.title}</h3>
            <p>{props.photo.explanation}</p>
            <p>{props.photo.date}</p>
            <img src={props.photo.url} />
        </div>
    );

}

export default ImageHandler;