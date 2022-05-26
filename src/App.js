import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import * as ROUTES from './constants/routes'
import SignIn from "./components/signInPage";
import HomePage from "./components/homePage";
import BrowsePage from "./components/browsePage";

//TODO: Consider refactoring css font and image sizes for smaller screens

function App() {
	const user = null;
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route path={ROUTES.HOME} element={<HomePage />}></Route>
					<Route path={ROUTES.BROWSE} element={<BrowsePage />}></Route>
					<Route path={ROUTES.SIGN_IN} element={<SignIn />}></Route>
				</Routes>
			</Router>

			{/* <Router>
				{!user ? (
					<HomePage/>
				) : (
					<Routes>
						<Route path={ROUTES.BROWSE} element={<BrowsePage />}></Route>
						<Route path={ROUTES.SIGN_IN} element={<SignIn />}></Route>
					</Routes>
				)}
			</Router> */}
		</div>
	);
}

export default App;
