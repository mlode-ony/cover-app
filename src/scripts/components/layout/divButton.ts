import { button } from "../buttons/button";

const CLASS_NAME = "button";

export const divButton = document.createElement("div");
divButton.className = CLASS_NAME; 

divButton.appendChild(button);