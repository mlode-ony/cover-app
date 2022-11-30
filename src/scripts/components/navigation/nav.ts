import { onClickMenu } from "../../events/onClickMenu";
import { ul } from "./list";
import { menuIcon } from "./menuIcon";

export const nav = document.createElement("nav");
nav.appendChild(menuIcon);
nav.appendChild(ul);

onClickMenu(menuIcon, ul);