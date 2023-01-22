import React, { useEffect, useState } from "react";
import axios from "../../services/axios";
import requests from "../../services/requests";
import { FaPlay } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";

export default function Banner(){
	const [movie, setMovie] = useState([]);
	const BASE_URL= 'https://image.tmdb.org/t/p/original'

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchBannerMovies);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			return request;
		}

		fetchData();
	}, []);

	const truncate = (string, n) =>
		string?.length > n ? string.substr(0, n - 1) + "..." : string;

	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url('${BASE_URL}${movie?.backdrop_path}')`,
				backgroundPosition: "center center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="copyContainer">
				<h1 className="title">
					{movie?.title || movie?.name || movie?.original_title}
				</h1>
				
				{/* TODO: add funtionality to click more button and see more of the description */}
				<h1 className="description">
					{truncate(movie?.overview, 150)}
				</h1>

				<div className="buttons">
					<button className="playButton">
						<FaPlay />
						<p>Play</p>
					</button>
					<button className="listButton">
						<BsPlusLg/>
						<p>My List</p>
					</button>
				</div>
			</div>
			<div className="fadeBottom"></div>
		</header>
	);
}


