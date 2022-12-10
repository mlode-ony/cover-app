import { onClickButton } from "../../events/onClickButton";
import { ICON_CLASS, ICON_DARK, ICON_KEY } from "./../constants";

const TYPE: string = "button";
const TITLE: string = "Toggle color scheme";

/* 
	create a button element
*/
export const button = document.createElement(`button`) as HTMLButtonElement;
button.type = TYPE;
button.className = ICON_CLASS;
button.title = TITLE;

/* 
	set a button icon: 
	if value exists in the local storage, set it; 
	else set a default icon value as "dark_mode"
*/
let iconValue = localStorage.getItem(ICON_KEY) as string;
iconValue !== null ?
	button.textContent = iconValue : button.textContent = ICON_DARK;

onClickButton(button);