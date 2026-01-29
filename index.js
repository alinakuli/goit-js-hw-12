import{a as C,S as v,i}from"./assets/vendor-B-FnSNcE.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const S="54376573-ff3a12932ea688fe06ebe4bfa";async function g(r,e){try{return(await C.get("https://pixabay.com/api/",{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:15}})).data}catch(n){return n}}const p=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".load-more");function y(r){const e=r.hits.map(s=>`<li class="gallery-item">
  <a class="gallery-link" href="${s.largeImageURL}">
    <img
      class="gallery-image"
      src="${s.webformatURL}"
      alt="${s.tags}"
    />
  </a>
  <ul class = stats>
          <li class="stat">
            <p class="stat-name">Likes</p>
            <p class="stat-number">${s.likes}</p>
          </li>
          <li class="stat">
            <p class="stat-name">Views</p>
            <p class="stat-number">${s.views}</p>
          </li>
          <li class="stat">
            <p class="stat-name">Comments</p>
            <p class="stat-number">${s.comments}</p>
          </li>
          <li class="stat">
            <p class="stat-name">Downloads</p>
            <p class="stat-number">${s.downloads}</p>
          </li>
        </ul>
</li>`).join("");p.insertAdjacentHTML("beforeend",e),new v(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function q(){p.innerHTML=""}function b(){h.classList.remove("is-hidden")}function u(){h.classList.add("is-hidden")}function P(){m.classList.remove("is-hidden")}function L(){m.classList.add("is-hidden")}const f=document.querySelector(".form");let a=1,l;const M=15;let d;f.addEventListener("submit",async r=>{try{if(r.preventDefault(),L(),a=1,l=f.elements["search-text"].value.trim(),!l)return;f.reset(),q(),b();const e=await g(l,a);if(e.hits.length===0){u(),i.error({message:"Sorry, there are no images matching your search query. Please try again!",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040"});return}d=Math.ceil(e.totalHits/M),y(e),u(),P(),a+=1,w(a,d)}catch{return i.error({message:"Something went wrong",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040"})}});m.addEventListener("click",async r=>{try{const e=await g(l,a);b(),y(e),u(),a+=1,w(a,d),$();return}catch(e){return console.log(e),i.error({message:"Something went wrong",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040"})}});function w(r,e){if(r>e)return L(),i.error({message:"We're sorry, but you've reached the end of search results.",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040"})}function $(){const r=document.querySelector(".gallery-item");if(!r)return;const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
