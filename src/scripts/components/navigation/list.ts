import { idList, navClassMap } from "./../constants";

export const ul = document.createElement("ul");

ul.className = navClassMap.hide;

for (const item of idList) {
	let li = document.createElement("li");
	let a = document.createElement("a");
	a.href = '#'.concat(item);
	a.textContent = item;
	li.appendChild(a);
	ul.appendChild(li);

}
