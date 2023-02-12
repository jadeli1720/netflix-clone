import React, { useContext, useEffect, useState } from "react";
import { Container, Dropdown, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import {BsThreeDots} from 'react-icons/bs';
import { FirebaseContext } from "../../../context/firebase";
import * as ROUTES from "../../../constants/routes";
import SearchForm from "../../Forms/SearchForm";
import './navBar.scss';

function NavBar({ user, setProfile, searchTerm, setSearchTerm }) {
	const [show, handleShow] = useState(false);
	const { firebase } = useContext(FirebaseContext);

	const transitionNavBar = () =>
		window.scrollY > 100 ? handleShow(true) : handleShow(false);


	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		//clean-up code, not always needed
		return () => window.removeEventListener("scroll", transitionNavBar);
	}, []);

	return (
		<>
			<Navbar  expand="lg" fixed='top'  className={`nav ${show && "navBlack"}`}>
				<Container fluid className="py-0 px-3">
					<Navbar.Brand className="netflixLogo" to={ROUTES.HOME}>
						<img
								className="navLogo"
								src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
								alt="Netflix logo"
							/>
					</Navbar.Brand>
					<Navbar.Toggle  aria-controls="offcanvasNavbar-expand-lg"/>
					<Navbar.Offcanvas 
						id="offcanvasNavbar-expand-lg"
						aria-labelledby="offcanvasNavbarLabel-expand-lg"
						placement='start'
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id='offcanvasNavbarLabel-expand-lg' className="d-flex align-items-center">
								<img
									className="avatar me-3"
									src={`/images/users/${user?.photoURL}.png`}
									alt="teal netflix avatar icon"
								/>
								<p className="displayName m-0" >{user.displayName}</p>
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body className="align-items-center">
							<Nav className="me-auto">
								<Nav.Link href="#">My List</Nav.Link>
								<Nav.Link href="#">Movies</Nav.Link>
								<Nav.Link href="#">Tv Shows</Nav.Link>
							</Nav>
							<SearchForm
								searchTerm={searchTerm}
								setSearchTerm={setSearchTerm}
							/>
							<Dropdown>
								<Dropdown.Toggle>
									<BsThreeDots/>
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item>Settings</Dropdown.Item>
									<Dropdown.Divider/>
									<Dropdown.Item onClick={() => firebase.auth().signOut()}>Sign Out</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>

						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
}

export default NavBar;
