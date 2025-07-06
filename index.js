import{a as b,S as L,N as I,P as E,K as S}from"./assets/vendor-ZIrzBUkV.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const k="https://books-backend.p.goit.global/books";async function C(){try{const e=await b.get(`${k}/category-list`);return console.log(e.data),e.data}catch(e){return console.error("Помилка при отриманні категорій:",e),[]}}async function _(){try{const e=await b.get(`${k}/top-books`);return console.log(e.data),e.data}catch(e){return console.error("Помилка при отриманні топу книг:",e),[]}}async function $(e){try{const t=await b.get(`${k}/category`,{params:{category:e}});return console.log(t.data),t.data}catch(t){return console.error("Помилка при отриманні книг за категорією:",t),[]}}let p="all",f=window.innerWidth<=768?10:24,B=4,u=[],c=!1,y=!1;function v(){return window.innerWidth<=768?10:24}const h=document.getElementById("book-list"),d=document.getElementById("show-more-btn"),T=document.getElementById("showing-count"),N=document.getElementById("total-count");document.querySelectorAll(".category-btn");function i(e,t=null){console.log(`[Books App Debug] ${e}`,t||"")}async function M(){try{i("Fetching top books...");const e=await _();i("Raw API response for top books:",e),i("Is array?",Array.isArray(e)),i("Data length:",e?e.length:"null/undefined");let t=[];if(Array.isArray(e)&&e.length>0?(i("Processing array response..."),e[0]&&e[0].books&&Array.isArray(e[0].books)?(i("Found category groups with books arrays"),e.forEach(o=>{o.books&&Array.isArray(o.books)&&(t=t.concat(o.books.map(n=>({_id:n._id,title:n.title,author:n.author,book_image:n.book_image,list_name:o.list_name,description:n.description||"",buy_links:n.buy_links||[]}))))})):e[0]&&(e[0]._id||e[0].id)&&e[0].title?(i("Found direct array of books"),t=e.map(o=>({_id:o._id||o.id,title:o.title,author:o.author,book_image:o.book_image||o.image,list_name:o.list_name||"General",description:o.description||"",buy_links:o.buy_links||[]}))):i("Unknown array structure:",e[0])):e&&typeof e=="object"&&!Array.isArray(e)&&(i("Processing object response..."),e.books&&Array.isArray(e.books)?(i("Found books array in object"),t=e.books.map(o=>({_id:o._id||o.id,title:o.title,author:o.author,book_image:o.book_image||o.image,list_name:o.list_name||"General",description:o.description||"",buy_links:o.buy_links||[]}))):e.title&&(i("Found single book object"),t=[{_id:e._id||e.id,title:e.title,author:e.author,book_image:e.book_image||e.image,list_name:e.list_name||"General",description:e.description||"",buy_links:e.buy_links||[]}])),t.length>0)return i(`Successfully processed ${t.length} books from API`),y=!1,t;throw i("No valid books found in API response, using backup"),new Error("No valid books found in API response")}catch(e){return i("Top books API failed:",e.message),y=!0,[]}}async function F(e){try{i(`Fetching books for category: ${e}`);const t=await $(e);i("Raw API response for category books:",t);let o=[];if(Array.isArray(t)&&t.length>0?o=t.map(n=>({_id:n._id||n.id,title:n.title,author:n.author,book_image:n.book_image||n.image,list_name:e,description:n.description||"",buy_links:n.buy_links||[]})):t&&typeof t=="object"&&t.books&&Array.isArray(t.books)&&(o=t.books.map(n=>({_id:n._id||n.id,title:n.title,author:n.author,book_image:n.book_image||n.image,list_name:e,description:n.description||"",buy_links:n.buy_links||[]}))),o.length>0)return i(`Loaded ${o.length} books for category ${e}`),o;throw new Error("No books found for category")}catch(t){return i(`Category books API failed for ${e}, using filtered backup data:`,t.message),[]}}function U(e){return`
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
  `}function z(){return`
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
  `}function A(){return p==="all"?u:u.filter(e=>e.list_name===p)}function x(){c=!0;const e=window.innerWidth<=768?10:24;h.innerHTML=Array(e).fill(z()).join(""),d.disabled=!0,i("Showing loading state")}function m(){if(c){i("Still loading, skipping render");return}const e=A(),t=e.slice(0,f);i(`Rendering ${t.length} books out of ${e.length} total`),t.length===0?h.innerHTML='<li style="grid-column: 1/-1; text-align: center; padding: 40px; color: #0b0500;">No books found for this category.</li>':h.innerHTML=t.map(o=>U(o)).join(""),T.textContent=t.length,N.textContent=e.length,t.length>=e.length?d.classList.add("hidden"):d.classList.remove("hidden"),d.disabled=!1}async function j(){i(`Loading books for category: ${p}`),x();try{if(p==="all"?u=await M():u=await F(p),u.length===0)throw new Error("No books loaded");c=!1,i(`Successfully loaded ${u.length} books`),m()}catch(e){i("Error loading books:",e.message),c=!1,c=!1,h.innerHTML='<li style="grid-column: 1/-1; text-align: center; padding: 40px; color: #0b0500;">Unable to load books. Please check your internet connection and try again.</li>',d&&d.classList.add("hidden")}}async function O(e){if(c){i("Already loading, ignoring category selection");return}i(`Category selected: ${e}`),p=e,f=v(),document.querySelectorAll(".category-btn").forEach(t=>{t.classList.remove("active"),t.dataset.category===e&&t.classList.add("active")}),await j()}function q(){if(c)return;const e=A();f=Math.min(f+B,e.length),i(`Show more clicked, now showing ${f} books`),m()}const P=document.createElement("style");P.textContent=`
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;document.head.appendChild(P);window.handleLearnMore=handleLearnMore;document.querySelectorAll(".category-btn").forEach(e=>{e.addEventListener("click",()=>{O(e.dataset.category)})});d&&d.addEventListener("click",q);window.addEventListener("resize",()=>{const e=v(),t=window.innerWidth<=768?24:10;f===t&&(f=e,m())});function w(e){const t=document.querySelector(".count");if(t&&y){if(t.style.color="#e15d05",t.style.fontWeight="500",t.title="Using offline data - API server unavailable or blocked by CORS policy",!t.querySelector(".offline-indicator")){const o=document.createElement("span");o.className="offline-indicator",o.innerHTML=" 🔴",o.style.fontSize="12px",o.title="Offline mode",t.appendChild(o)}}else if(t){t.style.color="#0b0500",t.style.fontWeight="normal",t.title="Live data from API";const o=t.querySelector(".offline-indicator");if(o&&o.remove(),!t.querySelector(".online-indicator")){const n=document.createElement("span");n.className="online-indicator",n.innerHTML=" 🟢",n.style.fontSize="12px",n.title="Live data",t.appendChild(n),setTimeout(()=>{n.parentNode&&n.remove()},3e3)}}}document.addEventListener("DOMContentLoaded",async()=>{i("App initializing..."),i("Starting with API-only approach..."),x(),i("Showing loading state, attempting API calls..."),setTimeout(async()=>{try{i("Testing API connectivity...");const e=["https://books-backend.p.goit.global/books/category-list","https://books-backend.p.goit.global/category-list","https://books-backend.p.goit.global/api/books/category-list","https://books-backend.p.goit.global/api/category-list"];let t=null,o=null;for(const n of e){i("Testing fetch to:",n);try{if(t=await fetch(n,{method:"GET",mode:"cors",headers:{Accept:"application/json"}}),t.ok){o=n,i("Found working URL:",o);break}}catch(r){i(`Failed to fetch ${n}:`,r.message)}}if(!o||!t)throw new Error("All API endpoints failed - server unreachable");if(i("Fetch response status:",t.status),t.ok){const n=await t.json();i("Direct fetch successful, data:",n),i("Direct fetch worked, trying API functions...");const r=await C(),s=await _();if(i("API functions results:",{categories:r,books:s}),Array.isArray(s)&&s.length>0){i("Processing API books data...");let l=[];if(s[0]&&s[0].books?s.forEach(a=>{a.books&&Array.isArray(a.books)&&a.books.forEach(g=>{l.push({_id:g._id,title:g.title,author:g.author,book_image:g.book_image,list_name:a.list_name,description:g.description||"",buy_links:g.buy_links||[]})})}):s[0]&&s[0].title&&(l=s.map(a=>({_id:a._id,title:a.title,author:a.author,book_image:a.book_image,list_name:a.list_name||"General",description:a.description||"",buy_links:a.buy_links||[]}))),l.length>0){i(`Successfully processed ${l.length} books from API!`),u=l,y=!1,c=!1,m(),w(!0);const a=document.createElement("div");a.style.cssText=`
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
            `,a.textContent="Successfully loaded live data from API! ✓",document.body.appendChild(a),setTimeout(()=>{a.parentNode&&a.remove()},5e3)}else throw new Error("No books processed from API")}else throw new Error("No books returned from API")}else throw i("Fetch failed with status:",t.status),new Error(`HTTP ${t.status}`)}catch(e){i("API failed completely:",e.message),c=!1,h.innerHTML=`
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
      `,t.textContent="API connection failed - no data available",document.body.appendChild(t),setTimeout(()=>{t.parentNode&&t.remove()},8e3)}},500),i("App initialization complete")});const H=new L(".feedbacks .swiper",{modules:[I,E,S],slidesPerView:1,spaceBetween:24,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},navigation:{nextEl:".feedbacks .swiper-button-next",prevEl:".feedbacks .swiper-button-prev"},pagination:{el:".feedbacks .swiper-pagination"},keyboard:{enabled:!0}});H.on("keyPress",(e,t)=>{t===9&&e.slideNext()});
//# sourceMappingURL=index.js.map
