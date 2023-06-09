import React, { useEffect, useRef } from "react";
import { mount } from "marketing/MarketingLandingPage";
import { useHistory } from "react-router-dom";

export default function MarketingLandingPage() {
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
		});

		history.listen(onParentNavigate);
	}, []);

	return <div ref={ref}></div>;
}
