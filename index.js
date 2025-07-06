import{a as b,S as P,N as E,P as I,K as S}from"./assets/vendor-ZIrzBUkV.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const k="https://books-backend.p.goit.global/books";async function B(){try{const e=await b.get(`${k}/category-list`);return console.log(e.data),e.data}catch(e){return console.error("Помилка при отриманні категорій:",e),[]}}async function _(){try{const e=await b.get(`${k}/top-books`);return console.log(e.data),e.data}catch(e){return console.error("Помилка при отриманні топу книг:",e),[]}}async function C(e){try{const t=await b.get(`${k}/category`,{params:{category:e}});return console.log(t.data),t.data}catch(t){return console.error("Помилка при отриманні книг за категорією:",t),[]}}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".menu-button"),t=document.querySelector(".close-button"),o=document.getElementById("mobileMenu"),i=document.querySelectorAll(".custom-checkbox");e.addEventListener("click",function(){o.classList.toggle("open")}),t.addEventListener("click",function(){o.classList.remove("open")}),i.forEach(s=>{s.addEventListener("click",function(r){r.stopPropagation(),this.classList.toggle("checked")})}),document.addEventListener("click",function(s){!o.contains(s.target)&&s.target!==e&&o.classList.remove("open")})});let p="all",g=window.innerWidth<=768?10:24,$=4,u=[],c=!1,m=!1;function v(){return window.innerWidth<=768?10:24}const h=document.getElementById("book-list"),d=document.getElementById("show-more-btn"),T=document.getElementById("showing-count"),N=document.getElementById("total-count");document.querySelectorAll(".category-btn");function n(e,t=null){console.log(`[Books App Debug] ${e}`,t||"")}async function M(){try{n("Fetching top books...");const e=await _();n("Raw API response for top books:",e),n("Is array?",Array.isArray(e)),n("Data length:",e?e.length:"null/undefined");let t=[];if(Array.isArray(e)&&e.length>0?(n("Processing array response..."),e[0]&&e[0].books&&Array.isArray(e[0].books)?(n("Found category groups with books arrays"),e.forEach(o=>{o.books&&Array.isArray(o.books)&&(t=t.concat(o.books.map(i=>({_id:i._id,title:i.title,author:i.author,book_image:i.book_image,list_name:o.list_name,description:i.description||"",buy_links:i.buy_links||[]}))))})):e[0]&&(e[0]._id||e[0].id)&&e[0].title?(n("Found direct array of books"),t=e.map(o=>({_id:o._id||o.id,title:o.title,author:o.author,book_image:o.book_image||o.image,list_name:o.list_name||"General",description:o.description||"",buy_links:o.buy_links||[]}))):n("Unknown array structure:",e[0])):e&&typeof e=="object"&&!Array.isArray(e)&&(n("Processing object response..."),e.books&&Array.isArray(e.books)?(n("Found books array in object"),t=e.books.map(o=>({_id:o._id||o.id,title:o.title,author:o.author,book_image:o.book_image||o.image,list_name:o.list_name||"General",description:o.description||"",buy_links:o.buy_links||[]}))):e.title&&(n("Found single book object"),t=[{_id:e._id||e.id,title:e.title,author:e.author,book_image:e.book_image||e.image,list_name:e.list_name||"General",description:e.description||"",buy_links:e.buy_links||[]}])),t.length>0)return n(`Successfully processed ${t.length} books from API`),m=!1,t;throw n("No valid books found in API response, using backup"),new Error("No valid books found in API response")}catch(e){return n("Top books API failed:",e.message),m=!0,[]}}async function F(e){try{n(`Fetching books for category: ${e}`);const t=await C(e);n("Raw API response for category books:",t);let o=[];if(Array.isArray(t)&&t.length>0?o=t.map(i=>({_id:i._id||i.id,title:i.title,author:i.author,book_image:i.book_image||i.image,list_name:e,description:i.description||"",buy_links:i.buy_links||[]})):t&&typeof t=="object"&&t.books&&Array.isArray(t.books)&&(o=t.books.map(i=>({_id:i._id||i.id,title:i.title,author:i.author,book_image:i.book_image||i.image,list_name:e,description:i.description||"",buy_links:i.buy_links||[]}))),o.length>0)return n(`Loaded ${o.length} books for category ${e}`),o;throw new Error("No books found for category")}catch(t){return n(`Category books API failed for ${e}, using filtered backup data:`,t.message),[]}}function q(e){return`
    <li class="book-item">
        <img
            class="book-image"
            src="${e.book_image||"https://via.placeholder.com/227x323?text=No+Image"}"
            alt="${e.title} by ${e.author}"
            loading="lazy"
            onerror="this.src='https://via.placeholder.com/227x323?text=No+Image'"
        />
        <div class="book-content">
            <div class="book-header">
                <div class="book-info">
                    <h3 class="book-title">${e.title}</h3>
                    <p class="book-author">${e.author}</p>
                </div>
                <div class="book-price">Check Price</div>
            </div>
            <button class="learn-more-btn" onclick="handleLearnMore('${e._id}')">
                Learn More
            </button>
        </div>
    </li>
  `}function U(){return`
    <li class="book-item">
      <div class="book-image" style="background: #e0e0e0; animation: pulse 1.5s ease-in-out infinite;"></div>
      <div class="book-content">
        <div class="book-header">
          <div class="book-info">
            <div style="height: 20px; background: #e0e0e0; border-radius: 4px; margin-bottom: 8px; animation: pulse 1.5s ease-in-out infinite;"></div>
            <div style="height: 16px; background: #e0e0e0; border-radius: 4px; width: 70%; animation: pulse 1.5s ease-in-out infinite;"></div>
          </div>
          <div style="height: 24px; background: #e0e0e0; border-radius: 4px; width: 60px; animation: pulse 1.5s ease-in-out infinite;"></div>
        </div>
        <div style="height: 40px; background: #e0e0e0; border-radius: 4px; animation: pulse 1.5s ease-in-out infinite;"></div>
      </div>
    </li>
  `}function x(){return p==="all"?u:u.filter(e=>e.list_name===p)}function A(){c=!0;const e=window.innerWidth<=768?10:24;h.innerHTML=Array(e).fill(U()).join(""),d.disabled=!0,n("Showing loading state")}function y(){if(c){n("Still loading, skipping render");return}const e=x(),t=e.slice(0,g);n(`Rendering ${t.length} books out of ${e.length} total`),t.length===0?h.innerHTML='<li style="grid-column: 1/-1; text-align: center; padding: 40px; color: #0b0500;">No books found for this category.</li>':h.innerHTML=t.map(o=>q(o)).join(""),T.textContent=t.length,N.textContent=e.length,t.length>=e.length?d.classList.add("hidden"):d.classList.remove("hidden"),d.disabled=!1}async function z(){n(`Loading books for category: ${p}`),A();try{if(p==="all"?u=await M():u=await F(p),u.length===0)throw new Error("No books loaded");c=!1,n(`Successfully loaded ${u.length} books`),y()}catch(e){n("Error loading books:",e.message),c=!1,c=!1,h.innerHTML='<li style="grid-column: 1/-1; text-align: center; padding: 40px; color: #0b0500;">Unable to load books. Please check your internet connection and try again.</li>',d&&d.classList.add("hidden")}}async function O(e){if(c){n("Already loading, ignoring category selection");return}n(`Category selected: ${e}`),p=e,g=v(),document.querySelectorAll(".category-btn").forEach(t=>{t.classList.remove("active"),t.dataset.category===e&&t.classList.add("active")}),await z()}function j(){if(c)return;const e=x();g=Math.min(g+$,e.length),n(`Show more clicked, now showing ${g} books`),y()}const L=document.createElement("style");L.textContent=`
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;document.head.appendChild(L);window.handleLearnMore=handleLearnMore;document.querySelectorAll(".category-btn").forEach(e=>{e.addEventListener("click",()=>{O(e.dataset.category)})});d&&d.addEventListener("click",j);window.addEventListener("resize",()=>{const e=v(),t=window.innerWidth<=768?24:10;g===t&&(g=e,y())});function w(e){const t=document.querySelector(".count");if(t&&m){if(t.style.color="#e15d05",t.style.fontWeight="500",t.title="Using offline data - API server unavailable or blocked by CORS policy",!t.querySelector(".offline-indicator")){const o=document.createElement("span");o.className="offline-indicator",o.innerHTML=" 🔴",o.style.fontSize="12px",o.title="Offline mode",t.appendChild(o)}}else if(t){t.style.color="#0b0500",t.style.fontWeight="normal",t.title="Live data from API";const o=t.querySelector(".offline-indicator");if(o&&o.remove(),!t.querySelector(".online-indicator")){const i=document.createElement("span");i.className="online-indicator",i.innerHTML=" 🟢",i.style.fontSize="12px",i.title="Live data",t.appendChild(i),setTimeout(()=>{i.parentNode&&i.remove()},3e3)}}}document.addEventListener("DOMContentLoaded",async()=>{n("App initializing..."),n("Starting with API-only approach..."),A(),n("Showing loading state, attempting API calls..."),setTimeout(async()=>{try{n("Testing API connectivity...");const e=["https://books-backend.p.goit.global/books/category-list","https://books-backend.p.goit.global/category-list","https://books-backend.p.goit.global/api/books/category-list","https://books-backend.p.goit.global/api/category-list"];let t=null,o=null;for(const i of e){n("Testing fetch to:",i);try{if(t=await fetch(i,{method:"GET",mode:"cors",headers:{Accept:"application/json"}}),t.ok){o=i,n("Found working URL:",o);break}}catch(s){n(`Failed to fetch ${i}:`,s.message)}}if(!o||!t)throw new Error("All API endpoints failed - server unreachable");if(n("Fetch response status:",t.status),t.ok){const i=await t.json();n("Direct fetch successful, data:",i),n("Direct fetch worked, trying API functions...");const s=await B(),r=await _();if(n("API functions results:",{categories:s,books:r}),Array.isArray(r)&&r.length>0){n("Processing API books data...");let l=[];if(r[0]&&r[0].books?r.forEach(a=>{a.books&&Array.isArray(a.books)&&a.books.forEach(f=>{l.push({_id:f._id,title:f.title,author:f.author,book_image:f.book_image,list_name:a.list_name,description:f.description||"",buy_links:f.buy_links||[]})})}):r[0]&&r[0].title&&(l=r.map(a=>({_id:a._id,title:a.title,author:a.author,book_image:a.book_image,list_name:a.list_name||"General",description:a.description||"",buy_links:a.buy_links||[]}))),l.length>0){n(`Successfully processed ${l.length} books from API!`),u=l,m=!1,c=!1,y(),w(!0);const a=document.createElement("div");a.style.cssText=`
              position: fixed;
              top: 20px;
              right: 20px;
              background: #28a745;
              color: white;
              padding: 12px 16px;
              border-radius: 4px;
              font-size: 14px;
              z-index: 1000;
              box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            `,a.textContent="Successfully loaded live data from API! ✓",document.body.appendChild(a),setTimeout(()=>{a.parentNode&&a.remove()},5e3)}else throw new Error("No books processed from API")}else throw new Error("No books returned from API")}else throw n("Fetch failed with status:",t.status),new Error(`HTTP ${t.status}`)}catch(e){n("API failed completely:",e.message),c=!1,h.innerHTML=`
        <li style="grid-column: 1/-1; text-align: center; padding: 40px; color: #0b0500;">
          <h3>Unable to load books</h3>
          <p>API connection failed: ${e.message}</p>
          <p>Please check your internet connection and try refreshing the page.</p>
        </li>
      `,w();const t=document.createElement("div");t.style.cssText=`
        position: fixed;
        top: 20px;
        right: 20px;
        background: #dc3545;
        color: white;
        padding: 12px 16px;
        border-radius: 4px;
        font-size: 14px;
        z-index: 1000;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      `,t.textContent="API connection failed - no data available",document.body.appendChild(t),setTimeout(()=>{t.parentNode&&t.remove()},8e3)}},500),n("App initialization complete")});const H=new P(".feedbacks .swiper",{modules:[E,I,S],slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},navigation:{nextEl:".feedbacks .swiper-button-next",prevEl:".feedbacks .swiper-button-prev"},pagination:{el:".feedbacks .swiper-pagination"},keyboard:{enabled:!0}});H.on("keyPress",(e,t)=>{t===9&&e.slideNext()});
//# sourceMappingURL=index.js.map
