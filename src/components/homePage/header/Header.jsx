import React from "react";
import { Container }from 'react-bootstrap/';
import HeaderNav from "./HeaderNav";
import OptForm from "../../Forms/optForm/OptForm";
import "./header.scss";
import WarningMessage from "../../warning/warningMessage";

function Header() {

	return (
		<>
			<WarningMessage/>
			<Container fluid className="headerContainer ">
				<HeaderNav />
				<Container className="feature">
					<h1>Unlimited movies, TV shows, and more.</h1>
					<h2 className="my-3">Watch anywhere. Cancel any time.</h2>
					<OptForm />
				</Container>
				<div className="headerGradient"></div>
			</Container>
		</>
	);
}

export default Header;
