// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

function fixedHeader() {
    if (window.scrollY >= 1) {
        document.body.classList.add('_fixed-header');
    } else {
        document.body.classList.remove('_fixed-header');
    } 
}

window.addEventListener('scroll', fixedHeader);