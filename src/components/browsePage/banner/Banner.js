import React, { useEffect, useState } from "react";
import HTTP from "../../../services/axios";
import { bannerMovieRequests } from "../../../services/mediaRequests";
import { BASE_IMAGE_URL } from "../../../constants/urls";
import { FaPlay } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import './banner.scss';

export default function Banner() {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const fetchUrl = bannerMovieRequests.fetchBannerMovies.url;
			const request = (await HTTP.get(fetchUrl)).data.results;

			const bannerMovie =
				request[Math.floor(Math.random() * request.length - 1)];
			setMovie(bannerMovie);
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
				backgroundImage: `url('${BASE_IMAGE_URL}${movie?.backdrop_path}')`,
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
						<BsPlusLg />
						<p>My List</p>
					</button>
				</div>
			</div>
			<div className="fadeBottom"></div>
		</header>
	);
}
