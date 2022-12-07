import { HASH, idList, navClassMap } from "./../constants";

export const ul = document.createElement("ul");

ul.className = navClassMap.hide;

const CLASS: string = 'route';

idList.forEach(id => {
	let a = document.createElement("a");
	id === "home" ?
		a.href = "" : a.href = HASH.concat(id);
	a.id = id;
	a.className = CLASS;
	a.textContent = id.toUpperCase();
	let li = document.createElement("li");
	li.appendChild(a);
	ul.appendChild(li);
});

