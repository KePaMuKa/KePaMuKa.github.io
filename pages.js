var underLine = document.querySelector('.under-line');
var headerHeight = document.querySelector('header').offsetHeight;
var documentHeight = document.documentElement.scrollHeight - window.innerHeight;

window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var progress = (scrollTop - headerHeight) / (documentHeight - headerHeight);
    var width = Math.max(0, Math.min(progress, 1)) * 100;

    underLine.style.setProperty('width', width + '%');
});

window.addEventListener('resize', function () {
    documentHeight = document.documentElement.scrollHeight - window.innerHeight;
});

//===================================================================================

const burgerButton = document.querySelector('.burger-button');
const menu = document.querySelector('.menu');
const lines = document.querySelectorAll('.line');
const underLineHide = document.querySelector('.under-line');

burgerButton.addEventListener('click', () => {
    underLineHide.classList.toggle('hide');
    menu.classList.toggle('active');
    lines.forEach(line => line.classList.toggle('active'));
});

// Добавляем обработчик клика на документ
document.addEventListener('click', function (event) {
    const target = event.target;

    // Проверяем, является ли клик внутри или вне меню
    const isClickInsideMenu = menu.contains(target);
    const isClickOnBurgerButton = target === burgerButton;
    const isClickOnLine = target === lines;

    // Если клик вне меню и не на кнопке бургер-меню, закрываем меню
    if (!isClickInsideMenu && !isClickOnBurgerButton && !isClickOnLine && menu.classList.contains('active')) {
        menu.classList.remove('active');
        underLineHide.classList.remove('hide');
    }
});

// Добавляем обработчик клика на кнопку бургер-меню







