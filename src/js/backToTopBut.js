import { windowScroll } from './onLoadHomePage';

const goTopBtn = document.querySelector('.back-to-top');

const trackScroll = () => {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goTopBtn.classList.add('back-to-top_show');
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove('back-to-top_show');
  }
};

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', windowScroll);
