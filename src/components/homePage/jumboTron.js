import React, { useEffect, useState } from "react";
import axios from "../../services/axios";
import requests from "../../services/requests";

function Jumbotron() {
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
			className="jumbotron"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url('${BASE_URL}${movie?.backdrop_path}')`,
				backgroundPosition: "center center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="container">
				<h1 className="title">
					{movie?.title || movie?.name || movie?.original_title}
				</h1>
				<div className="buttons">
					<button className="">Play</button>
					<button className="">My List</button>
				</div>
				<h1 className="description">
					{truncate(movie?.overview, 150)}
				</h1>
			</div>
			<div className="fadeBottom"></div>
		</header>
	);
}

export default Jumbotron;
