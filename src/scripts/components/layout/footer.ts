const ELEMENT = "footer"; 

let year = new Date().getFullYear(); 
let text = "All rights reserved"; 
const symbol = "©";

export const footer = document.createElement(ELEMENT); 
footer.textContent = `${year} ${symbol} ${text}`;