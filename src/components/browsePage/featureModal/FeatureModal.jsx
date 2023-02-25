import React, { useEffect, useState } from "react";
import { Modal } from 'react-bootstrap';
import axios from "axios";
import { BsX, BsPlayCircle } from "react-icons/bs";
import ReactPlayer from "react-player/youtube";
import HTTP from "../../../services/axios";
import { API_KEY, BASE_IMAGE_URL, YOUTUBE_URL } from "../../../constants/urls";
import { convertRuntime, grabCastInfo, grabCreators, grabCrewInfo, grabYear, roundNum } from "../../../helpers";
import Ratings from "react-ratings-declarative";
import Directors from "./Directors";
import Creators from "./Creators";
import Recommendations from "./Recommendations";
import './featureModal.scss'

export default function FeatureModal({
	show,
	setShow,
	details,
	mediaType,
}) {

	const [cast, setCast] = useState([]);
	const [directors, setDirectors] = useState([]);
	const [creators, setCreators] = useState([]);
	const [runtime, setRuntime] = useState("");
	//Not working as of 1/21/2023 from api
	// const [mediaRating, setMediaRating] = useState("");
	const [mediaTrailer, setMediaTrailer] = useState([]);
	const [showVideo, setShowVideo] = useState(false);

	const handleModelCloseButton = () => {
		setCast([]);
		setRuntime("");
		// setMediaRating("");
		setMediaTrailer([]);
		setShow(false)
	};

	useEffect(() => {
		const fetchMediaDetailsById = () => {
			let fetchMediaDetails = `/${mediaType}/${details?.id}?language=en-US&api_key=${API_KEY}&append_to_response=videos`;
			let fetchMediaCrewDetails = `/${mediaType}/${details?.id}/credits?&language=en-US&api_key=${API_KEY}`;

			const requestMediaDetails = HTTP.get(fetchMediaDetails);
			const requestMediaCrewDetails = HTTP.get(fetchMediaCrewDetails);

			axios
				.all([requestMediaDetails, requestMediaCrewDetails])
				.then(
					axios.spread((...res) => {
						const mediaDetailRes = res[0]?.data;
						const mediaCrewRes = res[1]?.data;
						
						//Actors
						let actors = grabCastInfo(mediaCrewRes?.cast);
						setCast(actors);

						//Creators/Directors
						let directors = grabCrewInfo(mediaCrewRes?.crew);

						if (directors.length === 0) {
							let creators = grabCreators(
								mediaDetailRes?.created_by
							);
							setCreators(creators.slice(0, 2));
						} else {
							setDirectors(directors.slice(0, 2));
						}

						//Ratings (i.e. PG, PG:13, R) -->Does not work for now because all the adult objects are labeled as false
						// let rating = grabMediaRatings(mediaDetailRes?.adult, mediaDetailRes?.genre)

						//Runtimes
						if (mediaType === "movie") {
							setRuntime(convertRuntime(mediaDetailRes.runtime));
						} else {
							setRuntime(
								`${mediaDetailRes.seasons.length} Seasons`
							);
						}

						//Trailer
						let trailerString = "trailer";
						let trailerData = mediaDetailRes?.videos?.results.find(
							(vid) =>
								vid.official === true &&
								vid.type.toLowerCase() ===
									trailerString.toLowerCase()
						);

						setMediaTrailer(
							trailerData
								? trailerData
								: mediaDetailRes?.videos?.results[0]
						);
					})
				)
				.catch((err) => {
					console.log("No Information", err);
				});
		};
		fetchMediaDetailsById();
	}, [details, mediaType]);

	const handlePlayButton = () => {
		setShowVideo(true);
	};

	const handleVideoCloseButton = () => {
		setShowVideo(false);
	};

	return (
		<>
			<Modal size="lg"  show={show} onHide={handleModelCloseButton} className="m-0 modal-container">
				<Modal.Body className="p-0" id="modal-content">
					<header>
						<div className="header-image-container">
							<img 
							className="header-img"
								src={`${BASE_IMAGE_URL}${details?.backdrop_path}`}
								alt={details?.name} 
							/>
							<div className="closeContainer d-flex align-items-center justify-content-center">
								<BsX onClick={() => handleModelCloseButton()} />
							</div>
							{showVideo ? (
								<div className="video-player-container">
									<div className="closeContainer d-flex align-items-center justify-content-center">
										<BsX
											id="videoCloseButton"
											onClick={() => handleVideoCloseButton()}
										/>
									</div>
									<ReactPlayer
										playing={true}
										url={`${YOUTUBE_URL}${
											mediaTrailer?.key || "IUN664s7N-c"
										}`}
										config={{
											youtube: {
												color: `white`,
												modestbranding: 1,
											},
										}}
										width="100%"
										height="100%"
										style={{ zIndex: "120" }}
									/>
								</div>
							) : null}
							<div className="bottomFade"></div>
						</div>
						<div className="playBtnContainer d-flex align-items-center justify-content-center">
							<div onClick={() => handlePlayButton()}>
								<BsPlayCircle />
							</div>
						</div>
						<div className="titleMetaContainer">
							<h1>{details?.name || details?.title}</h1>
							<div className="metaDataRow d-flex align-items-center">
								<Ratings
										rating={roundNum(details?.vote_average) / 2}
										widgetRatedColors="#FFDB58"
										widgetEmptyColors="grey"
										widgetDimensions="16px"
										widgetSpacings="1px"
									>
									<Ratings.Widget />
									<Ratings.Widget />
									<Ratings.Widget />
									<Ratings.Widget />
									<Ratings.Widget />
								</Ratings>
								<p>
									{!details?.release_date
										? grabYear(details?.first_air_date)
										: grabYear(details?.release_date)}
								</p>
								{/* <div className="mediaRatingContainer">
									<p>{mediaRating}</p>
								</div> */}
								<p>{runtime}</p>
								<div className="hdContainer">
									<p>HD</p>
								</div>
							</div>
						</div>
					</header>
					<div className="content">
						<div className="description">
							<p>{details?.overview}</p>
						</div>
						<div className="crewInfo">
							{cast?.length >= 1 ? (
								<div className="cast">
									<p>Cast:</p>
									{cast?.map((c) => {
										return (
											<p className="name" key={c.id}>
												{c.name}
											</p>
										);
									})}
								</div>
							) : null}
							{directors?.length >= 1 ? (
								<Directors directors={directors} />
							) : null}
							{creators?.length >= 1 ? (
								<Creators creators={creators} />
							) : null}
						</div>
					</div>
					<Recommendations id={details?.id} mediaType={mediaType} />
				</Modal.Body>
			</Modal>
		</>
	);
}
