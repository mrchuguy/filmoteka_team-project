!function(){const e=e=>{const t=document.querySelector("main"),n=`\n  <p class="notify-lib">\n    ${e} movies library is empty\n  </p>`,o=document.querySelector(".notify-lib");o&&o.remove(),t.insertAdjacentHTML("afterbegin",n)},t=()=>{e("Watched")};t();const n=document.querySelector(".back-to-top");window.addEventListener("scroll",(()=>{const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t&&n.classList.add("back-to-top_show"),e<t&&n.classList.remove("back-to-top_show")})),n.addEventListener("click",(()=>{window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})}));const o={watchedBtn:document.querySelector(".watched"),queueBtn:document.querySelector(".queue"),library:document.querySelector(".library"),modal:document.querySelector(".backdrop-info"),modalBtnClose:document.querySelector(".modal__btn-close")};o.watchedBtn.addEventListener("click",(function(){o.watchedBtn.classList.add("current-button"),o.queueBtn.classList.remove("current-button"),t()})),o.queueBtn.addEventListener("click",(function(){o.queueBtn.classList.add("current-button"),o.watchedBtn.classList.remove("current-button"),e("Queued")}))}();
//# sourceMappingURL=library.23154410.js.map