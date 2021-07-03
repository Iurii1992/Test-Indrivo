const getMenu = document.querySelectorAll('.menu__item');
const getFonts = document.querySelectorAll('.fonts-item');

const activeBlock = (arr, index) => {
  arr.forEach( item => {
		item.forEach(el => el.classList.remove('is-active'))
		item[index].classList.add('is-active')
	})
}

for(let index in getMenu) {
	getMenu[index].onclick = () => {
		activeBlock([getMenu, getFonts], index)
	};
}