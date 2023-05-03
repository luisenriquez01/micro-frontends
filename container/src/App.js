import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core/styles";
const AuthLazy = lazy(() => import("./components/AuthApp"));
const MarketingLazy = lazy(() => import("./components/MarketingLandingPage"));
import Header from "./components/Header";
import Progress from "./components/Progress";

const genetateClassName = createGenerateClassName({
	productionPrefix: "co",
});

export default function App() {
	const [isSignedIn, setIsSignedIn] = useState(false);

	return (
		<BrowserRouter>
			<StylesProvider generateClassName={genetateClassName}>
				<Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
				<Suspense fallback={<Progress />}>
					<Switch>
						<Route path="/auth">
							<AuthLazy onSignIn={() => setIsSignedIn(true)} />
						</Route>
						<Route path="/" component={MarketingLazy} />
					</Switch>
				</Suspense>
			</StylesProvider>
		</BrowserRouter>
	);
}
