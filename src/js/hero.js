import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';

const slides = [
  {
    alt: 'A book, sweater and a cup',
    mob: new URL('../img/hero/slide-1-mob.jpg', import.meta.url).href,
    mob2x: new URL('../img/hero/slide-1-mob@2x.jpg', import.meta.url).href,
    tab: new URL('../img/hero/slide-1-tab.jpg', import.meta.url).href,
    tab2x: new URL('../img/hero/slide-1-tab@2x.jpg', import.meta.url).href,
    desk: new URL('../img/hero/slide-1-desck.jpg', import.meta.url).href,
    desk2x: new URL('../img/hero/slide-1-desck@2x.jpg', import.meta.url).href,
  },
  {
    alt: 'A book and glasses',
    mob: new URL('../img/hero/slide-2-mob.jpg', import.meta.url).href,
    mob2x: new URL('../img/hero/slide-2-mob@2x.jpg', import.meta.url).href,
    tab: new URL('../img/hero/slide-2-tab.jpg', import.meta.url).href,
    tab2x: new URL('../img/hero/slide-2-tab@2x.jpg', import.meta.url).href,
    desk: new URL('../img/hero/slide-2-desck.jpg', import.meta.url).href,
    desk2x: new URL('../img/hero/slide-2-desck@2x.jpg', import.meta.url).href,
  },
  {
    alt: 'Bookshelves with lots of books',
    mob: new URL('../img/hero/slide-3-mob.jpg', import.meta.url).href,
    mob2x: new URL('../img/hero/slide-3-mob@2x.jpg', import.meta.url).href,
    tab: new URL('../img/hero/slide-3-tab.jpg', import.meta.url).href,
    tab2x: new URL('../img/hero/slide-3-tab@2x.jpg', import.meta.url).href,
    desk: new URL('../img/hero/slide-3-desck.jpg', import.meta.url).href,
    desk2x: new URL('../img/hero/slide-3-desck@2x.jpg', import.meta.url).href,
  },
  {
    alt: 'A vase with flowers in front of white wall',
    mob: new URL('../img/hero/slide-4-mob.jpg', import.meta.url).href,
    mob2x: new URL('../img/hero/slide-4-mob@2x.jpg', import.meta.url).href,
    tab: new URL('../img/hero/slide-4-tab.jpg', import.meta.url).href,
    tab2x: new URL('../img/hero/slide-4-tab@2x.jpg', import.meta.url).href,
    desk: new URL('../img/hero/slide-4-desck.jpg', import.meta.url).href,
    desk2x: new URL('../img/hero/slide-4-desck@2x.jpg', import.meta.url).href,
  },
];

const overlayTexts = [
  {
    subtitle: 'Get 10% off your first order',
  },
  {
    subtitle: 'Save 15% on some books',
  },
  {
    subtitle: 'Summer Sale! Up to -40% discounts',
  },
  {
    subtitle: 'Last chance to buy our spring bestsellers',
  },
];

function renderSlides(slides) {
  const container = document.querySelector('#hero-swiper');
  if (!container) {
    console.error('[Swiper] Container #hero-swiper not found!');
    return;
  }

  const markup = slides
    .map(
      slide => `
        <li class="swiper-slide">
          <picture>
            <source srcset="${slide.desk} 1x, ${slide.desk2x} 2x" media="(min-width: 1440px)" />
            <source srcset="${slide.tab} 1x, ${slide.tab2x} 2x" media="(min-width: 768px)" />
            <img src="${slide.mob}" srcset="${slide.mob2x} 2x" alt="${slide.alt}" class="hero-slide-img" loading="lazy" />
          </picture>
        </li>
      `
    )
    .join('');

  container.innerHTML = markup;
}

function updateButtonsState() {
  const prev = document.querySelector('.swiper-btn.prev');
  const next = document.querySelector('.swiper-btn.next');

  if (!swiper || !prev || !next) return;

  prev.disabled = swiper.isBeginning;
  next.disabled = swiper.isEnd;

  prev.classList.toggle('disabled', swiper.isBeginning);
  next.classList.toggle('disabled', swiper.isEnd);
}

function updateOverlayText(index) {
  const subtitleEl = document.querySelector('.hero-subtitle');
  if (!subtitleEl) return;

  const textData = overlayTexts[index];
  if (textData) {
    subtitleEl.textContent = textData.subtitle;
  }
}

let swiper;

window.addEventListener('DOMContentLoaded', () => {
  renderSlides(slides);

  const nextBtn = document.querySelector('.swiper-btn.next');
  const prevBtn = document.querySelector('.swiper-btn.prev');

  requestAnimationFrame(() => {
    swiper = new Swiper('.swiper-gallery', {
      modules: [Navigation, Pagination, Keyboard],
      slidesPerView: 1,
      loop: false,
      allowTouchMove: true,
      wrapperTag: 'ul',
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      on: {
        init: () => {
          updateButtonsState();
          updateOverlayText(0); // Показати текст для першого слайду
        },
        slideChange: function () {
          updateButtonsState();
          updateOverlayText(this.activeIndex);
        },
      },
    });
  });
});
