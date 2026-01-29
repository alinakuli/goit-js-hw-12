import{a as u,S as m,i}from"./assets/vendor-iiPpPmup.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const p="54376573-ff3a12932ea688fe06ebe4bfa";function d(a){return u.get("https://pixabay.com/api/",{params:{key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}const c=document.querySelector(".gallery"),f=document.querySelector(".loader");function y(a){const r=a.map(t=>`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      alt="${t.tags}"
    />
  </a>
  <ul class = stats>
          <li class="stat">
            <p class="stat-name">Likes</p>
            <p class="stat-number">${t.likes}</p>
          </li>
          <li class="stat">
            <p class="stat-name">Views</p>
            <p class="stat-number">${t.views}</p>
          </li>
          <li class="stat">
            <p class="stat-name">Comments</p>
            <p class="stat-number">${t.comments}</p>
          </li>
          <li class="stat">
            <p class="stat-name">Downloads</p>
            <p class="stat-number">${t.downloads}</p>
          </li>
        </ul>
</li>`).join("");c.innerHTML=r,new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function g(){c.innerHTML=""}function h(){f.classList.remove("is-hidden")}function b(){f.classList.add("is-hidden")}const n=document.querySelector(".form");n.addEventListener("submit",a=>{a.preventDefault();const r=n.elements["search-text"].value.trim();r&&(g(),h(),d(r).then(o=>{const t=o.data.hits;if(n.reset(),t.length===0)return i.error({message:"Sorry, there are no images matching your search query. Please try again!",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040"});y(t)}).catch(o=>{i.error({message:"Something went wrong",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040"})}).finally(()=>{b()}))});
//# sourceMappingURL=index.js.map
