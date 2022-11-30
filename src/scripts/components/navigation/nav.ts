import { menuIcon } from "../icons/menuIcon";
import { showMenu } from "./../../events/showMenu";
import { elementMap } from "./../constants";
import { ul } from "./list";

export const nav = document.createElement(elementMap.nav);
nav.appendChild(menuIcon);
nav.appendChild(ul);

showMenu(menuIcon, ul);