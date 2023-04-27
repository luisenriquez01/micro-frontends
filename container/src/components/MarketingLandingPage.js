import React, { useEffect, useRef } from "react";
import { mount } from "marketing/MarketingLandingPage";

export default function MarketingLandingPage() {
	const ref = useRef(null);

	useEffect(() => {
		mount(ref.current);
	}, []);

	return <div ref={ref}></div>;
}
