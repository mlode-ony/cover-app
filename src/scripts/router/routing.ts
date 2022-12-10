import { contact } from "../components/views/contact";
import { about } from "./../components/views/about";
import { home } from "./../components/views/home";
import { projects } from "./../components/views/projects";
import { onPopstate } from "./../events/onPopstate";



export const Routes = [{
	path: "/",
	view: home,
},

{
	path: "/about",
	view: about,
},

{
	path: "/projects",
	view: projects,
},

{
	path: "/contact",
	view: contact,
}];

export const pathToRegExp = (path: string) => {
	new RegExp("^" + path.replace(/\//g, "\\/"));
}


export const initializeState = (state: any) => {
	window.history.replaceState(state, "", "");
}

export const updateState = (state: any) => {
	window.history.pushState(state, "", "");
}

let state: any = onPopstate();