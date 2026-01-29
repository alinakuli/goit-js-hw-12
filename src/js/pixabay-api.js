import axios from 'axios';

const myApiKey = "54376573-ff3a12932ea688fe06ebe4bfa";


export function getImagesByQuery(query) {
    return axios.get("https://pixabay.com/api/", {
        params: {
            key: myApiKey,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
        }
    });
}