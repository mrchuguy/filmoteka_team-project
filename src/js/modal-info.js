let open_modal = document.querySelectorAll('.open_modal');
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];
for (let i = 0; i < open_modal.length; i++)
  open_modal[i].onclick = function () {
      modal.classList.add('modal_vis');
      modal.classList.remove("bounceOutDown"); 
  }
close_modal.onclick = function () {
  modal.classList.add('bounceOutDown');
  window.setTimeout(function () {
     modal.classList.remove('modal_vis');
  }, 500);
  };
  //наповнення модалки
const modal_content = document.querySelector(".modal_content");
let content = `<img
      src="./img/Rectangle 18.jpg"
      alt="img"
      class="img"
      width="375"
      height="478"
    />
    <div class="modal__info">
      <h2 class="modal__title">Заголовок</h2>
      <div class="modal__detail">інформація</div>
      <p class="modal__about">опис</p>
      <div class="modal__button">
        <button type="button" class="button-watch btn">
          ADD TO WATCHED
        </button>
        <button type="button" class="button-queue btn">
          ADD TO QUEUE
        </button>
      </div>
    </div>`;
modal_content.insertAdjacentHTML("beforeend", content);