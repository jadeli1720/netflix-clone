import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import * as ROUTES from './constants/routes'
import SignIn from "./components/signInPage";
import SignUp from "./components/signUpPage";
import HomePage from "./components/homePage";
import BrowsePage from "./components/browsePage";
import { ProtectedRoute, UserSignedIn } from "./helpers";

import useAuthListener from "./hooks";

//TODO: Consider refactoring css font and image sizes for smaller screens --> smaller fonts, smaller images, different icons, hamburger menus

//TODO: May want to deploy on firebase when we decide to put in stipe payment processing. Sonny Sangha Netflix 2.0 1:28:42

function App() {

	const { user } = useAuthListener();

	return (
		<div className="app">
			<Router>
				<Routes>
					<Route
						path={ROUTES.HOME}
						element={
								<HomePage />
						}
					/>
					<Route
						path={ROUTES.SIGN_IN}
						element={
							<UserSignedIn user = { user }>
								<SignIn/>
							</UserSignedIn>
						}
					/>
					<Route
						path={ROUTES.SIGN_UP}
						element={
							<UserSignedIn user = { user }>
								<SignUp/>
							</UserSignedIn>
						}
					/>
					<Route 
						path={ROUTES.BROWSE} 
						element={
							<ProtectedRoute user = { user }>
								<BrowsePage />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
