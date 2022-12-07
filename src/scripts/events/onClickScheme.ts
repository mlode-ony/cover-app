import { ICON_DARK, ICON_LIGHT, SCHEME_DARK, SCHEME_LIGHT } from "../components/constants";
import { CLICK } from "./../components/constants";


export const onClickScheme = (element: HTMLButtonElement) => {

	let scheme = document.documentElement.attributes[1];
	// let storage = localStorage.getItem("color-scheme") as string;
	// storage !== null ? scheme.textContent = storage : scheme.textContent = SCHEME_LIGHT;


	let button = element.textContent;

	// let event = new MouseEvent("CLICK");

	element.addEventListener(CLICK, event => {
		if (scheme.value === SCHEME_LIGHT) {

			// if (button == ICON_DARK) {
			scheme.textContent = SCHEME_DARK;
			element.textContent = ICON_LIGHT;
		}
		else {
			scheme.textContent = SCHEME_LIGHT;
			element.textContent = ICON_DARK;
		};

		localStorage.setItem("color-scheme", scheme.nodeValue as string); 
		localStorage.setItem("icon", element.textContent);
		event.defaultPrevented;


		// let storage = localStorage.getItem("color-scheme") as string;
		// if (storage !== element.textContent) {
		// 	localStorage.removeItem(storage);
		// 	localStorage.setItem("color-scheme", scheme.textContent);
		// }

	})


}