const getMenu = document.querySelector('.menu');
const getMenuLinks = document.querySelectorAll('.menu__item');

getMenu.addEventListener('click', (event) => {
  const target = event.target;

  getMenuLinks.forEach(el => el.classList.remove('menu__item--active'))
  target.classList.add('menu__item--active');
})