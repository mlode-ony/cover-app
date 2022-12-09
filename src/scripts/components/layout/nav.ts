import { onClickMenu } from "../../events/onClickMenu";
import { menuIcon } from "../navigation/menuIcon";
import { navMenu } from "../navigation/navMenuList";

export const nav = document.createElement("nav") as HTMLElement;
nav.append(menuIcon);
nav.append(navMenu);

onClickMenu(menuIcon, navMenu);