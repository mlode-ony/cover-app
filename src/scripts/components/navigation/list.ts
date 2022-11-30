const CLASS = 'nav-list--hide';
const UL = 'ul';
const LI = 'li';

export const ul = document.createElement(UL);

const itemList = ["about", "projects", "contact"];

ul.className = CLASS;

for (const item of itemList) {
	const li = document.createElement(LI);
	li.id = item;
	li.textContent = item;
	ul.appendChild(li);
}
