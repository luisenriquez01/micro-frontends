import React, { lazy, Suspense } from "react";
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
	return (
		<BrowserRouter>
			<StylesProvider generateClassName={genetateClassName}>
				<Header />
				<Suspense fallback={<Progress />}>
					<Switch>
						<Route path="/auth" component={AuthLazy} />
						<Route path="/" component={MarketingLazy} />
					</Switch>
				</Suspense>
			</StylesProvider>
		</BrowserRouter>
	);
}
