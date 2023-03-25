import React, { useState, useEffect, useContext } from "react";
import { Container } from 'react-bootstrap';
// import Fuse from 'fuse.js';
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

	//I don't think I can do this because the data fetching happens in the child component. Not this component. May need to use redux or context to pass props around easier.
	// useEffect(() => {
	//     const fuse =  Fuse()
	// }, [searchTerm]);
	// console.log(typeof(mediaRequests))
	//TODO: Need to change row poster sizing for tablets and mobile, make Netflix logo go to single,change modal sizing and display different and get rid of mobile maybe

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
				</Container>
			</Container>
		</>
	) : (
		<SelectedProfile user={user} setProfile={setProfile} />
	);
}
