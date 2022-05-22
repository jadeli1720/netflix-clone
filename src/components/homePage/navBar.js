import React, { useEffect, useState } from 'react';


function NavBar() {
	const [show, handleShow] = useState(false);

	const transitionNavBar = () =>
		window.scrollY > 100 ? handleShow(true) : handleShow(false);

	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		//clean-up- not always needed
		return () => window.removeEventListener("scroll", transitionNavBar);
	}, []);

	return (
		<div className={`nav ${show && "navBlack"}`}>
			<div className="navContainer">
				<img
					className="navLogo"
					src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
					alt="Netflix logo"
				/>
				<img
					className="navAvatar"
					src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
					alt="teal netflix avatar icon"
				/>
			</div>
		</div>
	);
}

export default NavBar;