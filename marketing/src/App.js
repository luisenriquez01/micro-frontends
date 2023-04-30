import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const genetateClassName = createGenerateClassName({
	productionPrefix: "mk",
});

export default function () {
	return (
		<StylesProvider generateClassName={genetateClassName}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/pricing" component={Pricing} />
					<Route exact path="/" component={Landing} />
				</Switch>
			</BrowserRouter>
		</StylesProvider>
	);
}
