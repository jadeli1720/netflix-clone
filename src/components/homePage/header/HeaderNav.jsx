import React from "react";
import {Container, Nav, Navbar }from 'react-bootstrap/';
import * as ROUTES from "../../../constants/routes";

function HeaderNav() {
	return (
		<>
		<Navbar className="headerNav pt-4 " expand="lg">
			<Container fluid className="d-flex justify-content-center">
				<Navbar.Brand href={ROUTES.HOME} className="netflixLogo">
					<img
							className="navLogo"
							src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
							alt="Netflix logo"
						/>
				</Navbar.Brand>
				<Nav>
					<Nav.Link href={ROUTES.SIGN_IN} className="px-4">Sign In</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
		</>
	);
}

export default HeaderNav;
