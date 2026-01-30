import axios from 'axios';

const myApiKey = "54376573-ff3a12932ea688fe06ebe4bfa";


export async function getImagesByQuery(query, page) {
    try {
        const response = await axios.get("https://pixabay.com/api/", {
            params: {
                key: myApiKey,
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
                page: page,
                per_page: 15,
            }
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}