import { CLICK, ICON_DARK, ICON_KEY, ICON_LIGHT, SCHEME_DARK, SCHEME_KEY, SCHEME_LIGHT } from "../components/constants";

/* 
	togglecolor scheme of the document after user click on the button
*/
export const onClickButton = (element: HTMLButtonElement) => {

	let scheme = document.body.attributes[0];

	element.addEventListener(CLICK, () => {

		switch (scheme.value) {
			case SCHEME_LIGHT:
				scheme.value = SCHEME_DARK;
				element.textContent = ICON_LIGHT;
				break;
			case SCHEME_DARK:
				scheme.value = SCHEME_LIGHT;
				element.textContent = ICON_DARK;
				break;
			default:
				break;
		}

		/* 
			save records in the local storage
		*/
		localStorage.setItem(SCHEME_KEY, scheme.value as string);
		localStorage.setItem(ICON_KEY, element.textContent as string);

	})


}