import React, { useEffect, useRef } from "react";
import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

export default function AuthApp({ onSignIn }) {
	const ref = useRef(null);
	const history = useHistory();

	useEffect(() => {
		const { onParentNavigate } = mount(ref.current, {
			initialPath: history.location?.pathname,
			onNavigate: (location) => {
				// Communicate navigation up to the container
				const { pathname: nextPathname } = location;
				const { pathname } = history.location;
				if (pathname !== nextPathname) history.push(nextPathname);
			},
			onSignIn,
		});

		history.listen(onParentNavigate);
	}, []);

	return <div ref={ref}></div>;
}
