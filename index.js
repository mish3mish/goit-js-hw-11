import{i as l,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function d(i){const s=new URLSearchParams({key:"47046376-5398f80f14019d8274a22c320",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function m(i){return i.map(({webformatURL:s,largeImageURL:r,tags:o,likes:e,views:t,comments:a,downloads:u})=>`
    <li class="gallery-item">
      <a href="${r}" class="gallery-item-link">
      <img src="${s}" alt="${o}" class="gallery-item-img" />
      <div class="gallery-item-content">
      <p class="gallery-item-description">Likes<span> ${e}</span></p>
      <p class="gallery-item-description">Views<span> ${t}</span></p>
      <p class="gallery-item-description">Comments<span> ${a}</span></p>
      <p class="gallery-item-description">Downloads<span> ${u}</span></p>
      </div>
      </a>
    </li>
    `).join("")}const c=document.querySelector(".gallery"),f=document.querySelector(".form"),n=document.querySelector(".loader");f.addEventListener("submit",g);function g(i){i.preventDefault();const s=i.target.search.value.trim();if(console.log(s),!s){l.error({message:"The field cannot be empty!",position:"topRight"});return}n.classList.remove("is-hidden"),n.classList.add("is-active"),c.innerHTML="",setTimeout(()=>{d(s).then(r=>{if(r.totalHits===0){l.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"});return}c.insertAdjacentHTML("beforeend",m(r.hits)),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(r=>console.log(r)).finally(()=>{n.classList.remove("is-active"),n.classList.add("is-hidden")})},500)}
//# sourceMappingURL=index.js.map
