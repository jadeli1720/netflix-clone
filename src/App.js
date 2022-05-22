import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./components/homePage";
import BrowsePage from "./components/browsePage";

function App() {
	// const user = null;
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route exact path="/" element={<HomePage />}></Route>
					<Route path="/browse" element={<BrowsePage />}></Route>
				</Routes>
			</Router>

			{/* <Router> */}
			{/* {!user ? (
					<LogInPage/>
				) : (
					<Routes>
						<Route exact path="/" element={<HomePage />}>
							</Route>
					</Routes>
				)} */}
			{/* <Routes>
					<Route path="/Login" element={
					<Login
            {jumboData.map((item) => (

							))
						}
					></Login>
					}></Route>
					<Route exact path="/" element={<HomePage />}></Route>
				</Routes>
			</Router> */}
		</div>
	);
}

export default App;
