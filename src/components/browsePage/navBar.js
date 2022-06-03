import React, { useContext,useEffect, useState } from 'react';
import { Link , NavLink } from "react-router-dom";
import { FirebaseContext } from '../../context/firebase';
import * as ROUTES from '../../constants/routes';
import SearchForm from '../Forms/searchForm';
import { FaCaretDown } from 'react-icons/fa';



function NavBar({ user, setProfile, searchTerm, setSearchTerm }) {
	const [show, handleShow] = useState(false);
	const { firebase } = useContext(FirebaseContext);

	const transitionNavBar = () => window.scrollY > 100 ? handleShow(true) : handleShow(false);
	
	let activeStyle = {
		'font-weight': 800,
	}


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
					{/* At smaller screen size make this a hamburger menu */}
					<div className='navLinks'>
						{/* What do we want the below to do. Is active not working style={({isActive}) => isActive ? activeStyle : undefined}*/}
						<NavLink style={{fontWeight:800}} to={ROUTES.BROWSE}>Home</NavLink>
						<NavLink to={'/'}>TV Shows</NavLink>
						<NavLink to={'/'}>Movies</NavLink>
						{/* <NavLink to={'/'}>Recently Added</NavLink> */}
						<NavLink to={'/'}>My List</NavLink>
					</div>
				</div>
				<div className='group' id="right">
					<SearchForm  searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
					<div className='navProfile'>
						<img
							className="navAvatar"
							src={ `/images/users/${user?.photoURL}.png`}
							alt="teal netflix avatar icon"
						/>
						{/* Need to see how he does the following */}
						{/* <div className='dropDown'>
							<div className='group'>
								<img
									className="navAvatar"
									src={ `/images/users/${user?.photoURL}.png`}
									alt="teal netflix avatar icon"
								/>
								<Link to={'/'}>{user.displayName}</Link>
							</div>
							<div className='group'>
								<p onClick={() => firebase.auth().signOut()}>Sign Out</p>
							</div>
						</div> */}

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