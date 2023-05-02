import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const genetateClassName = createGenerateClassName({
	productionPrefix: "mk",
});

export default function ({ history }) {
	return (
		<StylesProvider generateClassName={genetateClassName}>
			<Router history={history}>
				<Switch>
					<Route exact path="/pricing" component={Pricing} />
					<Route exact path="/" component={Landing} />
				</Switch>
			</Router>
		</StylesProvider>
	);
}
