import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core/styles";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

const genetateClassName = createGenerateClassName({
	productionPrefix: "au",
});

export default function ({ history, onSignIn }) {
	return (
		<StylesProvider generateClassName={genetateClassName}>
			<Router history={history}>
				<Switch>
					<Route path="/auth/signin">
						<Signin onSignIn={onSignIn} />
					</Route>
					<Route path="/auth/signup">
						<Signup onSignIn={onSignIn} />
					</Route>
				</Switch>
			</Router>
		</StylesProvider>
	);
}
