const menuBtn = document.getElementById('menuBtn');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('translate-x-full');
  mobileMenu.classList.add('translate-x-0');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('translate-x-0');
  mobileMenu.classList.add('translate-x-full');
});
