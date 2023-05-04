import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { createGenerateClassName, StylesProvider } from "@material-ui/core/styles";
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));
const MarketingLazy = lazy(() => import("./components/MarketingLandingPage"));
import Header from "./components/Header";
import Progress from "./components/Progress";

const genetateClassName = createGenerateClassName({
	productionPrefix: "co",
});

const history = createBrowserHistory();

export default function App() {
	const [isSignedIn, setIsSignedIn] = useState(false);

	useEffect(() => {
		if (isSignedIn) {
			history.push("/dashboard");
		}
	}, [isSignedIn]);

	return (
		<Router history={history}>
			<StylesProvider generateClassName={genetateClassName}>
				<Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
				<Suspense fallback={<Progress />}>
					<Switch>
						<Route path="/auth">
							<AuthLazy onSignIn={() => setIsSignedIn(true)} />
						</Route>
						<Route path="/dashboard">{!isSignedIn ? <Redirect to="/" /> : <DashboardLazy />}</Route>
						<Route path="/" component={MarketingLazy} />
					</Switch>
				</Suspense>
			</StylesProvider>
		</Router>
	);
}
