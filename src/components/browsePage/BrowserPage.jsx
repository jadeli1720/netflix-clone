import React, { useState, useEffect, useContext } from "react";
import { Container } from 'react-bootstrap';
import NavBar from "./navBar/NavBar";
import Banner from "./banner/Banner";
import Row from "./row/Row";
import Loading from "../spinner/loading";
import { mediaRequests } from "../../services/mediaRequests";
import { FirebaseContext } from "../../context/firebase";

import "./styles/index.scss";
import SelectedProfile from "../profilePage/SelectedProfile";

export default function BrowsePage() {
	const [profile, setProfile] = useState({});
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("");

	const { firebase } = useContext(FirebaseContext);
	const user = firebase.auth().currentUser || {};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, [profile?.displayName]);


	return profile?.displayName ? (
		<>
			{loading ? (
				<Loading user={user} />
			) : (
				<div className="releaseBody"></div>
			)}
			<Container fluid className="homeScreen p-0">
				<NavBar
					user={user}
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
				/>
				<Banner />
				<Container fluid className="row-container ">
					{mediaRequests.map(
						({ rowId, category, type, url }) => {
							return (
								<Row
									key={rowId}
									rowId={rowId}
									category={category}
									type={type}
									url={url}
								/>
							);
						}
					)}
					<div className="tmdbContainer">
						<div className="text-container">
							<p>Powered by: 
								<a  href ="https://www.themoviedb.org/?language=en-US" target="_
							"><img className='tmdbLogo' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" /></a>
							</p>
						</div>
				</div>
				</Container>
			</Container>
		</>
	) : (
		<SelectedProfile user={user} setProfile={setProfile} />
	);
}
