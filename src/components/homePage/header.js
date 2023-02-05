import React from "react";
import HeaderNav from "./HeaderNav";
import OptForm from "../Forms/OptForm";

function Header() {
	return (
		<div className="headerContainer">
			<HeaderNav />
			<div className="feature">
				<h1>Unlimited movies, TV shows, and more.</h1>
				<h2>Watch anywhere. Cancel any time.</h2>
				<OptForm />
			</div>
			<div className="headerGradient"></div>
		</div>
	);
}

export default Header;
