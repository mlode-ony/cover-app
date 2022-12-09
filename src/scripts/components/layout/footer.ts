

let year = new Date().getFullYear();
let text = "All rights reserved";
const symbol = "©";

export const footer = document.createElement("footer") as HTMLElement;
footer.textContent = `${year} ${symbol} ${text}`;