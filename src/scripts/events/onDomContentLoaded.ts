import { COLOR_L_STOR, SCHEME_LIGHT } from "../components/constants";
import { divButton } from "../components/layout/divButton";
import { footer } from "../components/layout/footer";
import { header } from "../components/layout/header";
import { main } from "../components/layout/main";
import { nav } from "../components/layout/nav";

const onDomContentLoaded = () => {

	const renderAppDocument = () => {
		const app = document.querySelector('#app')!;

		if (!app) {
			throw new Error("Page not found");
		} else {
			app.append(header);
			app.append(nav);
			app.append(divButton);
			app.append(main);
			app.append(footer);
		}
	}

	document.addEventListener("DOMContentLoaded", () => {
		let scheme = document.documentElement.attributes[1];
		let colorValue = localStorage.getItem(COLOR_L_STOR) as string;
		colorValue !== null ?
			scheme.textContent = colorValue : scheme.textContent = SCHEME_LIGHT;

		renderAppDocument();

	})

	console.log("Document has been loaded");
};

export default onDomContentLoaded;