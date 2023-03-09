// To handle API call
import axios from "axios";

export const fetchNasaData = () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then (response => {
        console.log(response.data)
    })
    .catch (error => {
        console.error(error)
    })
};