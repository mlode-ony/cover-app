import { CLICK, ICON_DARK, ICON_LIGHT, SCHEME_DARK, SCHEME_LIGHT } from "./../components/constants";


export const toggleScheme = (element: HTMLButtonElement) => {

	let bodyScheme = document.body.attributes[0];

	element.addEventListener(CLICK, () => {
		if (bodyScheme.value === SCHEME_LIGHT) {
			bodyScheme.textContent = SCHEME_DARK;
			element.textContent = ICON_LIGHT;
		}
		else {
			bodyScheme.textContent = SCHEME_LIGHT;
			element.textContent = ICON_DARK;
		};
	})
}