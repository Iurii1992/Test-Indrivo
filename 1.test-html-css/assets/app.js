const getMenu = document.querySelectorAll('.menu__item');
const getFonts = document.querySelectorAll('.fonts-item');

const activeBlock = (arr, i) => {
  arr.forEach( item => {
		item.forEach(i => {i.classList.remove('is-active')})
		item[i].classList.add('is-active')
	})
}

for(let i in getMenu) {
	getMenu[i].addEventListener('click', () => {
		activeBlock([getMenu, getFonts], i)
	})
}