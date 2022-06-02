import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';


function NavBar({ user, setProfile }) {
	const [show, handleShow] = useState(false);

	const transitionNavBar = () =>
		window.scrollY > 100 ? handleShow(true) : handleShow(false);

		console.log("navbar", user.photoURL)

	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		//clean-up- not always needed
		return () => window.removeEventListener("scroll", transitionNavBar);
	}, []);

	return (
		<div className={`nav ${show && "navBlack"}`}>
			<div className="navContainer">
				<div className='group'>
					<Link className='netflixLogo' to={ ROUTES.HOME }>
						<img
						className="navLogo"
						src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
						alt="Netflix logo"
					/>
					</Link>
				</div>
				<div className='group' id="right">
					<img
						className="navAvatar"
						src={ `/images/users/${user?.photoURL}.png`}
						alt="teal netflix avatar icon"
					/>
				</div>
			</div>
		</div>
	);
}

export default NavBar;