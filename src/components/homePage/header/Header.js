import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderNav from "./HeaderNav";
import OptForm from "../../Forms/OptForm";
import './header.scss';

function Header() {
	return (
		<>
		<Container fluid className="headerContainer">
			<HeaderNav/>
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
