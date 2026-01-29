// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import {  getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader} from './js/render-functions';

const form = document.querySelector(".form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const query = form.elements["search-text"].value.trim();
    if (!query) return;
    clearGallery();
    showLoader();

    getImagesByQuery(query).then(response => {
        const images = response.data.hits;
        form.reset();
        if (images.length === 0) return iziToast.error(
                {
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    titleColor: '#fff',
                    messageColor: '#fff',
                    backgroundColor: '#ef4040',
                }
            )
        ;
        createGallery(images);
    }
    ).catch(error => {
        iziToast.error(
            {
                message: 'Something went wrong',
                titleColor: '#fff',
                messageColor: '#fff',
                backgroundColor: '#ef4040',
            })
    }).finally(() => {
        hideLoader();
    });

})