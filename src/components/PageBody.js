import React, { useState, useEffect } from "react";
import "../App.css";
// import ImageHandler from "./ImageHandler";
import { fetchNasaData } from "../Call";

export const PageBody = props => {
    return (<button onClick={fetchNasaData}>APOD Data </button>);
}