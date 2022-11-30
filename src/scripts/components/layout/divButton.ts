import { button } from "../buttons/button";

const ELEMENT = "div";
const CLASS_NAME = "button";

export const divButton = document.createElement(ELEMENT);
divButton.className = CLASS_NAME; 

divButton.appendChild(button);