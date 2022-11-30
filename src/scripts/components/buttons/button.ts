import { onClickScheme } from "../../events/onClickScheme";
import { ICON_DARK } from "../constants";
import { ICON_CLASS } from "./../constants";

const TYPE = "button";
const TEXT = "Toggle color scheme"; 

export const button = document.createElement("button");
button.type = TYPE;
button.className = ICON_CLASS;
button.title = TEXT; 
button.textContent = ICON_DARK;		// default if color-scheme: light

onClickScheme(button);