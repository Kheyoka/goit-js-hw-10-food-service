'use strict';
import './styles.css';
import menu from './menu.json';
import menuItems from './templates/menu-item.hbs';
const menuDom = document.querySelector('.js-menu');
const switchTheme = document.querySelector('.theme-switch');
const checkedTheme = document.querySelector('input#theme-switch-control');
console.dir(checkedTheme);
const body = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
if (localStorage.getItem('theme') === 'dark-theme') {
  body.classList.add('dark-theme');
  checkedTheme.checked = true;
}
switchTheme.addEventListener('click', e => {
  // console.dir(e.target);
  if (e.target.checked === false) {
    localStorage.setItem('theme', 'light-theme');
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
  } else {
    localStorage.setItem('theme', 'dark-theme');
    body.classList.add('dark-theme');
  }
});

// const theme = () => {
//   if (localStorage.getItem('theme')) {
//     localStorage.setItem('theme', 'light-theme');
//     body.classList.add('light-theme');
//   }
// };
// theme();
const result = menu => {
  return menu.reduce((acc, item) => {
    return (acc += menuItems(item));
  }, '');
};
menuDom.insertAdjacentHTML('beforeend', result(menu));
// console.log(result(menu));
