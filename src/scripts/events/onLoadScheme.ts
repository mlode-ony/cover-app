import { COLOR_L_STOR, SCHEME_LIGHT } from "../components/constants";

const onLoadScheme = () => {

	document.addEventListener("DOMContentLoaded", () => {
		let scheme = document.documentElement.attributes[1];
		let colorValue = localStorage.getItem(COLOR_L_STOR) as string;
		colorValue !== null ?
			scheme.textContent = colorValue : scheme.textContent = SCHEME_LIGHT;
	})

};

export default onLoadScheme;