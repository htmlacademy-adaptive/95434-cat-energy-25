const mainNav = document.querySelector('.main-nav');
const mainNavToggle = document.querySelector('.main-header__toggle');

mainNav.classList.remove('main-nav--nojs');
mainNavToggle.classList.remove('main-header__toggle--nojs');

mainNavToggle.addEventListener('click', handleChangeMenuButton);

function handleChangeMenuButton() {
  if (mainNav.classList.contains('main-nav--closed') && mainNavToggle.classList.contains('main-header__toggle--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNavToggle.classList.remove('main-header__toggle--closed');
    mainNav.classList.add('main-nav--opened');
    mainNavToggle.classList.add('main-header__toggle--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNavToggle.classList.add('main-header__toggle--closed');
    mainNav.classList.remove('main-nav--opened');
    mainNavToggle.classList.remove('main-header__toggle--opened');
  }
}
