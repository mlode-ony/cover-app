import { navClassMap, PathMap } from "../constants";

export const CLASS_NAME: string = "route";
export const DATA_LINK: string = "";

// create the parent UL element
export const navMenu = document.createElement("ul") as HTMLUListElement;
navMenu.className = navClassMap.hide;

// iterate over the map, which contains the anchor's paths and names
PathMap.map(path => {

	// create an anchor for each [key, value] of the map
	let anchor = document.createElement("a") as HTMLAnchorElement;
	anchor.href = path.href;
	anchor.id = path.name;
	anchor.className = CLASS_NAME;
	// add the custom attribute with an empty value
	anchor.dataset.link = DATA_LINK;
	anchor.textContent = path.name.toUpperCase();

	// create an LI element for each anchor
	let listItem = document.createElement("li") as HTMLLIElement;
	// add each anchor to the list item 
	listItem.append(anchor);

	// if the LI element has any children, add it to the parent element
	if (listItem.children)
		navMenu.append(listItem);
});
