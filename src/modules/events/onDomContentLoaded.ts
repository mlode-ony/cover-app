import { divButton } from "../components/layout/divButton";
import { footer } from "../components/layout/footer";
import { header } from "../components/layout/header";
import { main } from "../components/layout/main";
import { nav } from "../components/layout/nav";
import { SCHEME_KEY, SCHEME_LIGHT } from "./../components/constants";

const onDomContentLoaded = () => {

	const renderAppDocument = () => {

		/* prepare a new document container layout */
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

		/* 	
			set a color scheme value inside body element: 
			if value exists in the local storage, set it 
			else, set initial value as a light mode 
		*/
		let colorValue = localStorage?.getItem(SCHEME_KEY) as string;
		document.body.dataset.scheme = colorValue ?? SCHEME_LIGHT;

		/* invoke the prepared app container */
		renderAppDocument();

	})

	console.log("Document has been loaded");
};

export default onDomContentLoaded;