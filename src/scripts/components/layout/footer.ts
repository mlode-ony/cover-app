/* 
	The Footer Element
*/

let year: number = new Date().getFullYear();
let text: string = "All rights reserved";
const symbol: string = "©";

export const footer = document.createElement("footer") as HTMLElement;
footer.textContent = `${year} ${symbol} ${text}`;