import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

export function createGallery(images) {
    
const markup = images.map(image => `<li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags}"
    />
  </a>
  <ul class = stats>
          <li class="stat">
            <p class="stat-name">Likes</p>
            <p class="stat-number">${image.likes}</p>
          </li>
          <li class="stat">
            <p class="stat-name">Views</p>
            <p class="stat-number">${image.views}</p>
          </li>
          <li class="stat">
            <p class="stat-name">Comments</p>
            <p class="stat-number">${image.comments}</p>
          </li>
          <li class="stat">
            <p class="stat-name">Downloads</p>
            <p class="stat-number">${image.downloads}</p>
          </li>
        </ul>
</li>`
    ).join("")
    
    gallery.innerHTML = markup;

    const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    });
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = '';
};

export function showLoader() {
    loader.classList.remove("is-hidden");
};

export function hideLoader() {
    loader.classList.add("is-hidden");
}