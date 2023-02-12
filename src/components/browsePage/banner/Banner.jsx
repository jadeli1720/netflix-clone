import React, { useEffect, useState } from "react";
import HTTP from "../../../services/axios";
import { bannerMovieRequests } from "../../../services/mediaRequests";
import { BASE_IMAGE_URL } from "../../../constants/urls";
import { FaPlay } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import './banner.scss';
import { Button, Col, Container, Row } from "react-bootstrap";

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
		<>
			<Container fluid className="banner-container p-0">
				{movie ? (
					<div className="banner"
					style={{
						backgroundSize: "cover",
						backgroundImage: `url('${BASE_IMAGE_URL}${movie?.backdrop_path}')`,
						backgroundPosition: "center center",
						backgroundRepeat: "no-repeat",
					}}
					>
					<div className="fadeBottom"></div>
					</div>
					
				):null}
				
				<Container className="copyContainer">
					<h1 className="title">{movie?.title || movie?.name || movie?.original_title}</h1>
					<Row className="d-flex flex-wrap">
						<Col sm>
							<Button className="d-flex justify-content-center align-items-center playButton p-0">
								<FaPlay />
								<p className="m-0" >Play</p>
							</Button>
						</Col>
						<Col sm>
							<Button className="d-flex justify-content-center align-items-center listButton p-0">
								<BsPlusLg />
								<p className="m-0">My List</p>							
							</Button>
						</Col>
					</Row>
					<p className="description pt-4">
						{truncate(movie?.overview, 150)}
					</p>
				</Container>
			</Container>
		</>
	);
}
