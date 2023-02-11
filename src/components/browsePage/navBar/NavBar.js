import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Dropdown, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FirebaseContext } from "../../../context/firebase";
import * as ROUTES from "../../../constants/routes";
import SearchForm from "../../Forms/SearchForm";
import { FaCaretDown } from "react-icons/fa";
import './navBar.scss';

function NavBar({ user, setProfile, searchTerm, setSearchTerm }) {
	const [show, handleShow] = useState(false);
	const [toggleMenu, setToggleMenu] = useState(false);

	const { firebase } = useContext(FirebaseContext);

	const transitionNavBar = () =>
		window.scrollY > 100 ? handleShow(true) : handleShow(false);

	const handleMenuClick = () =>
		!toggleMenu ? setToggleMenu(true) : setToggleMenu(false);

	//NOTE: header activity work --> Karl Hadwen 6:50
	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		//clean-up code, not always needed
		return () => window.removeEventListener("scroll", transitionNavBar);
	}, []);

	return (
		<>
			<Navbar collapseOnSelect  expand="lg" fixed='top'  className={`nav ${show && "navBlack"}`}>
				<Container fluid className="py-0 px-3">
					<Navbar.Brand className="netflixLogo" to={ROUTES.HOME}>
						<img
								className="navLogo"
								src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
								alt="Netflix logo"
							/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#">My List</Nav.Link>
							<Nav.Link href="#">Movies</Nav.Link>
							<Nav.Link href="#">Tv Shows</Nav.Link>
						</Nav>
						<SearchForm
								searchTerm={searchTerm}
								setSearchTerm={setSearchTerm}
							/>
						<Dropdown >
							<Dropdown.Toggle>
								<img
									className="avatar"
									src={`/images/users/${user?.photoURL}.png`}
									alt="teal netflix avatar icon"
								/>
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item className="d-flex " href={'/'}> 						
									<img
										className="avatar"
										src={`/images/users/${user?.photoURL}.png`}
										alt="teal netflix avatar icon"
									/>
									<p className="displayName m-0" >{user.displayName}</p>
									
								</Dropdown.Item>
								<Dropdown.Divider/>
								<Dropdown.Item onClick={() => firebase.auth().signOut()}>Sign Out</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NavBar;
