import itemsTemplate from '../templates/gallery-items.hbs';
import menu from '../menu.json';
const murkup = itemsTemplate(menu);
console.log(murkup);
const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('beforeend', murkup);
