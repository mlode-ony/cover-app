

let year = new Date().getFullYear(); 
let text = "All rights reserved"; 
const symbol = "©";

export const footer = document.createElement("footer"); 
footer.textContent = `${year} ${symbol} ${text}`;