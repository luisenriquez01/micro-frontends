import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory, createMemoryHistory } from "history";
import App from "./App";

export const mount = (el, { defaultHistory, onNavigate }) => {
	const history = defaultHistory || createMemoryHistory();
	onNavigate && history.listen(onNavigate);
	ReactDOM.render(<App history={history} />, el);

	return {
		onParentNavigate: (location) => {
			const { pathname: nextPathname } = location;
			const { pathname } = history.location;
			if (pathname !== nextPathname) history.push(nextPathname);
		},
	};
};

if (process.env.NODE_ENV === "development") {
	const el = document.querySelector("#auth-root");
	el && mount(el, { defaultHistory: createBrowserHistory() });
}
