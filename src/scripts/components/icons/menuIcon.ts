import { elementMap, ICON_CLASS, MENU } from "./../constants";

export const menuIcon = document.createElement(elementMap.span);
menuIcon.className = ICON_CLASS;
menuIcon.textContent = MENU;
