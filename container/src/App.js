import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core/styles";
import AuthApp from "./components/AuthApp";
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
				<Switch>
					<Route path="/auth" component={AuthApp} />
					<Route path="/" component={MarketingLandingPage} />
				</Switch>
			</StylesProvider>
		</BrowserRouter>
	);
}
