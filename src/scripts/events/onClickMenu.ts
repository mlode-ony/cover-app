import { CLICK, navClassMap } from "../components/constants";
export const onClickMenu = (menuIcon: HTMLSpanElement, ul: HTMLUListElement) => {
	menuIcon.addEventListener(CLICK, () => {
		ul.className === navClassMap.hide ?
			ul.className = navClassMap.show : ul.className = navClassMap.hide;
	});
};
