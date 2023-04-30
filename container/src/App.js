import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core/styles";
import MarketingLandingPage from "./components/MarketingLandingPage";
import Header from "./components/Header";

const genetateClassName = createGenerateClassName({
	productionPrefix: "co",
});

export default function App() {
	return (
		<BrowserRouter>
			<StylesProvider generateClassName={genetateClassName}>
				<Header />
				<MarketingLandingPage />
			</StylesProvider>
		</BrowserRouter>
	);
}
