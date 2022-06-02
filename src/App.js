import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import * as ROUTES from './constants/routes'
import SignIn from "./components/signInPage";
import SignUp from "./components/signUpPage";
import HomePage from "./components/homePage";
import BrowsePage from "./components/browsePage";
import { ProtectedRoute, UserSignedIn } from "./helpers";

//TODO: Consider refactoring css font and image sizes for smaller screens

function App() {

	return (
		<div className="app">
			<Router>
				<Routes>
					<Route
						path={ROUTES.HOME}
						element={
							<UserSignedIn>
								<HomePage />
							</UserSignedIn>
						}
					/>
					<Route
						path={ROUTES.SIGN_IN}
						element={
							<UserSignedIn>
								<SignIn/>
							</UserSignedIn>
						}
					/>
					<Route
						path={ROUTES.SIGN_UP}
						element={
							<UserSignedIn>
								<SignUp/>
							</UserSignedIn>
						}
					/>
					<Route 
						path={ROUTES.BROWSE} 
						element={
							<ProtectedRoute>
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
