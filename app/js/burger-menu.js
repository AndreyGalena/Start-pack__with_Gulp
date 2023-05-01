// Gulp все файлы JS собирает в file.min.js
// Работа с бургером.
// Выделяем объекты и ложим в локальную( let ) перемменую.
let menuBtn = document.querySelector('.menu-btn');
let menuBlock = document.querySelector('.menu-block');
let body = document.querySelector('body');


// добовляет класс active.
// используется в событиях(file.js)
function addActiveMenu() {
    // Добовляем класс к .menu-btn и к .header__menu
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active');
};