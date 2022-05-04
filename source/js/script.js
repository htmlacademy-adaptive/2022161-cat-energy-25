let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.main-header__toggle');


navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
    navToggle.classList.remove('main-header__toggle-closed');
    navToggle.classList.add('main-header__toggle-onened');

  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
    navToggle.classList.add('main-header__toggle-closed');
    navToggle.classList.remove('main-header__toggle-onened');
  }
});
