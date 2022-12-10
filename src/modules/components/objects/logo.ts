export const object = document.createElement("object"); 
// const image = document.createElement("img");

const type = "image/svg+xml";
const urlPath = `../../src/images/svg/cat_logo.svg`;
object.type = type; 
object.data = urlPath; 