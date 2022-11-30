import { toggleScheme } from "../../events/scheme";
import { ICON_DARK } from "../constants";


const ELEMENT = "button";
const TYPE = "button";
const TEXT = "Toggle color scheme"; 
const CLASS_NAME = "material-symbols-outlined"; 
export const button = document.createElement(ELEMENT);
button.type = TYPE;
button.className = CLASS_NAME;
button.title = TEXT; 
button.textContent = ICON_DARK;		// if color-scheme: light

toggleScheme(button);