import { onClickScheme } from "../../events/onClickScheme";
import { ICON_CLASS, ICON_DARK, ICON_L_STOR } from "./../constants";

const TYPE: string = "button";
const TITLE: string = "Toggle color scheme";

export const button = document.createElement(`button`) as HTMLButtonElement;
button.type = TYPE;
button.className = ICON_CLASS;
button.title = TITLE;

let iconValue = localStorage.getItem(ICON_L_STOR) as string;
iconValue !== null ?
	button.textContent = iconValue : button.textContent = ICON_DARK;

onClickScheme(button);