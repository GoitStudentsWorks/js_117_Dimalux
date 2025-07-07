const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
  document.body.style.overflow = '';
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  });
});
