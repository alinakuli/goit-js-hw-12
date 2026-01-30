import{a as v,S,i as c}from"./assets/vendor-B-FnSNcE.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const q="54376573-ff3a12932ea688fe06ebe4bfa";async function p(r,e){try{return(await v.get("https://pixabay.com/api/",{params:{key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}catch(n){throw n}}const h=document.querySelector(".gallery"),y=document.querySelector(".loader"),m=document.querySelector(".load-more");function b(r){const e=r.map(s=>`<li class="gallery-item">
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
</li>`).join("");h.insertAdjacentHTML("beforeend",e),new S(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function P(){h.innerHTML=""}function L(){y.classList.remove("is-hidden")}function l(){y.classList.add("is-hidden")}function w(){m.classList.remove("is-hidden")}function g(){m.classList.add("is-hidden")}const u=document.querySelector(".form");let a=1,i;const M=15;let d;u.addEventListener("submit",async r=>{try{if(r.preventDefault(),i=u.elements["search-text"].value.trim(),!i)return;a=1,P(),L(),g();const e=await p(i,a);if(!e.hits.length){l(),c.error({message:"Sorry, there are no images matching your search query. Please try again!",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040"});return}d=Math.ceil(e.totalHits/M),b(e.hits),l(),w(),a+=1,C(a,d),u.reset()}catch(e){l(),console.log(e),c.error({message:"Something went wrong",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040"});return}});m.addEventListener("click",async r=>{try{L(),g();const e=await p(i,a);b(e.hits),w(),l(),a+=1,C(a,d),$();return}catch{return l(),c.error({message:"Something went wrong",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040"})}});function C(r,e){if(r>e)return g(),c.error({message:"We're sorry, but you've reached the end of search results.",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040"})}function $(){const r=document.querySelector(".gallery-item");if(!r)return;const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
