import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./components/homePage";
import BrowsePage from "./components/browsePage";
import * as ROUTES from './constants/routes'

//TODO: Consider refactoring css font and image sizes for smaller screens

function App() {
	const user = null;
	return (
		<div className="app">
			{/* <Router>
				<Routes>
					<Route exact path="/" element={<HomePage />}></Route>
					<Route path="/browse" element={<BrowsePage />}></Route>
				</Routes>
			</Router> */}

			<Router>
				{!user ? (
					<HomePage/>
				) : (
					<Routes>
						<Route path={ROUTES.BROWSE} element={<BrowsePage />}></Route>
					</Routes>
				)}
			</Router>
		</div>
	);
}

export default App;
