document.querySelector('.page').classList.remove('no-js');

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

function fun1() {
  let exampleRange = document.querySelector('.example__block-img-fat');
  let exampleRangemob = document.querySelector('.example__block-img-fat-mob');
  let exampleRangemobslider = document.querySelector('.range-mob-thumb');
  let r1 = document.getElementById('myRange');

  exampleRange.style.width = r1.value+'px';
  exampleRangemob.style.width = r1.value/2+'px';
  exampleRangemobslider.style.width = r1.value/6.5+'px';

};
// document.getElementsByClassName('main-header')[0].style.display = "flex";
