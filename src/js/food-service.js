import foodServiceTpl from '../templates/food-service.hbs';
import foodServiceMenu from './menu.json';
import './style.css';

const menuList = document.querySelector('.js-menu');
const skeletonMenu = createFoodServiceMenu(foodServiceMenu);

menuList.insertAdjacentHTML('beforeend', skeletonMenu);

function createFoodServiceMenu(foodServiceMenu) {
    return foodServiceMenu.map(foodServiceTpl).join('');
};
