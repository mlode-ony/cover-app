

export const onPopstate = () => {
	window.addEventListener("popstate", event => {
		if (event.state) {
			return event.state;
		}
	})
}