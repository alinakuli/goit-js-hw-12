// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import {  getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton, loadMore } from './js/render-functions';

const form = document.querySelector(".form");
let page = 1;
let query;
const perPage = 15;
let totalPages;


form.addEventListener("submit", async (event) => {
    try {
        event.preventDefault();

        query = form.elements["search-text"].value.trim();
        if (!query) return;

        page = 1;
        clearGallery()
        showLoader()
        hideLoadMoreButton();

        const images = await getImagesByQuery(query, page);
        
        
        if (!images.hits.length) {
            hideLoader()
            iziToast.error(
                {
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    titleColor: '#fff',
                    messageColor: '#fff',
                    backgroundColor: '#ef4040',
                }
            )
            return;
        };

        totalPages = Math.ceil(images.totalHits / perPage);

        createGallery(images.hits)
        hideLoader()
        showLoadMoreButton()
        page += 1;
        checkForPages(page, totalPages)

        form.reset()

    } catch (error) {
        hideLoader()
        console.log(error);
        
            iziToast.error(
                {
                    message: 'Something went wrong',
                    titleColor: '#fff',
                    messageColor: '#fff',
                    backgroundColor: '#ef4040',
                })
        
        return;
    };

})

loadMore.addEventListener("click", async (event) => {
    try {
        showLoader()
        hideLoadMoreButton()

        const images = await getImagesByQuery(query, page);
        createGallery(images.hits)

        showLoadMoreButton()
        hideLoader()
        page += 1;
        checkForPages(page, totalPages)
        smoothScroll();

        return;
    } catch (error) {
        hideLoader();
        
        return iziToast.error(
            
                {
                    message: 'Something went wrong',
                    titleColor: '#fff',
                    messageColor: '#fff',
                    backgroundColor: '#ef4040',
                })
        }
})

function checkForPages(page, totalPages) {
    if (page > totalPages) {
        hideLoadMoreButton()

            return iziToast.error(
                {
                    message: "We're sorry, but you've reached the end of search results.",
                    titleColor: '#fff',
                    messageColor: '#fff',
                    backgroundColor: '#ef4040',
                }
            )
    }
}

function smoothScroll() {
    const firstPicture = document.querySelector(".gallery-item");
    if (!firstPicture) return;

    const height = firstPicture.getBoundingClientRect().height;

    window.scrollBy({
        top: height * 2,
        behavior: "smooth",
    })
}