import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingLandingPage from "./components/MarketingLandingPage";
import Header from "./components/Header";

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<MarketingLandingPage />
		</BrowserRouter>
	);
}
