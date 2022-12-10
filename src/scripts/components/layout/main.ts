import { article } from "../containers/article";

/* 
	The Main Element
*/

export const main = document.createElement("main") as HTMLElement; 

/* 
	Add the Article container as a child
*/
main.append(article);