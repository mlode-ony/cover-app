/* 
	return an event state value after triggering a popstate event
*/

export const onPopstate = () => {
	window.addEventListener("popstate", event => {
		if (event.state) {
			return event.state;
		}
	})
} 