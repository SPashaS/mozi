// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

function menuItemHoverCurrenPage () {
    const bodyId = document.querySelector("[data-id-page]").dataset.idPage;
    if (bodyId == 'home') {} else {
            const navId = document.querySelector(`[data-id-nav="${bodyId}"]`);
            if (bodyId == navId.dataset.idNav) {
                navId.classList.add('hover');
            } else {
                navId.classList.remove('hover');
            }
    };
    
};

menuItemHoverCurrenPage ();


/* Когда пользователь прокручивает вниз, скрыть навигационную панель. Когда пользователь прокручивает вверх, показать навигационную панель */
const body = document.querySelector('body');
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if(currentScrollPos > 1) {
    body.classList.add('_scroll-header');

    if (prevScrollpos > currentScrollPos) {
        body.classList.add('_fixed-header');
    } else {
        body.classList.remove('_fixed-header');
    }
    prevScrollpos = currentScrollPos;
} else {
    body.classList.remove('_scroll-header');
    body.classList.remove('_fixed-header');
}
}
