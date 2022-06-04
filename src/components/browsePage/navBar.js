import React, { useContext,useEffect, useState } from 'react';
import { Link , NavLink } from "react-router-dom";
import { FirebaseContext } from '../../context/firebase';
import * as ROUTES from '../../constants/routes';
import SearchForm from '../Forms/searchForm';
import { FaCaretDown } from 'react-icons/fa';


function NavBar({ user, setProfile, searchTerm, setSearchTerm }) {
	const [show, handleShow] = useState(false);
	const [toggleMenu, setToggleMenu] = useState(false);

	const { firebase } = useContext(FirebaseContext);

	const transitionNavBar = () => window.scrollY > 100 ? handleShow(true) : handleShow(false);
	
	const handleMenuClick = () => !toggleMenu ? setToggleMenu(true) : setToggleMenu(false);


	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		//clean-up code, not always needed
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
					{/*TODO: At smaller screen size make this a hamburger menu */}
						{/* What do we want the below to do. Is active not working style={({isActive}) => isActive ? activeStyle : undefined}*/}
					<NavLink  to={'/'}>TV Shows</NavLink>
					<NavLink to={'/'}>Movies</NavLink>
					<NavLink to={'/'}>Recently Added</NavLink>
					<NavLink to={'/'}>My List</NavLink>
				</div>
				<div className='group' id="right">
					<SearchForm  searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
					<div className='navProfile'  onClick={handleMenuClick}>
						<button className="navAvatar">
							<img
								src={ `/images/users/${user?.photoURL}.png`}
								alt="teal netflix avatar icon"
							/>
						</button>
						<div className={`dropDown + ${toggleMenu ? 'toggleMenu' : ''} `}>
							<div className={`group + topContent + ${toggleMenu ? 'toggleContent' : ''}`} >
								<img
									className="dropAvatar"
									src={ `/images/users/${user?.photoURL}.png`}
									alt="teal netflix avatar icon"
								/>
								<Link className='displayName' to={'/'}>{user.displayName}</Link>
							</div>
							<div className={` group + bottomContent + ${toggleMenu ? 'toggleContent' : ''}`} >
								<p className='signOutLink' onClick={() => firebase.auth().signOut()}>Sign Out</p>
							</div>
						</div>
						<div className='dropDownArrow'>
							<FaCaretDown/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;