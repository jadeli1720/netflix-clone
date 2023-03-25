import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import FeatureModal from "../featureModal/FeatureModal";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { BsInfoCircle, BsPlusLg } from "react-icons/bs";
import HTTP from "../../../services/axios";
import { grabMovieRatings } from "../../../helpers";
import { useMatchMedia } from "../../../helpers/useMatchMedia";
import { bannerMovieRequests } from "../../../services/mediaRequests";
import { API_KEY, BASE_IMAGE_URL, YOUTUBE_URL } from "../../../constants/urls";
import './banner.scss';

export default function Banner() {
	const [movie, setMovie] = useState([]);
	const [isMuted, setIsMuted] = useState(true);
	const [volume, setVolume] = useState(0)
	const [mediaRating, setMediaRating] = useState("");
	const [videoTrailer, setVideoTrailer] = useState([])
	const [showMovieModal, setShowMovieModal] = useState(false)

	const isTabletDesktopResolution = useMatchMedia("(min-width:601px), true");
	const mediaType = 'movie'

	const handleMobileModal = (m) => {
		if(!showMovieModal) {
			setShowMovieModal(true)
		}else {
			setShowMovieModal(false)
		}
	}

	useEffect(() => {
		async function fetchData() {
			const fetchUrl = bannerMovieRequests.fetchBannerMovies.url;
			const request = (await HTTP.get(fetchUrl))?.data?.results;

			const bannerMovie =
				request[Math.floor(Math.random() * request.length - 1)];

			setMovie(bannerMovie);
		}

		fetchData();
	}, []);

	useEffect(() => {
		async function fetchVideoData() {
			const fetchVideoById = `/movie/${movie?.id}?language=en-US&api_key=${API_KEY}&append_to_response=videos,release_dates`;

			const request =(await HTTP.get(fetchVideoById))?.data;

			//Rating
			let rating = grabMovieRatings(request?.release_dates?.results)
			
			setMediaRating(rating)

			//Trailer
			let trailerString = 'trailer';
			let videoTrailerData = request?.videos?.results.find(
				(vid) =>
					vid.official === true &&
					vid.type.toLowerCase() ===
						trailerString.toLowerCase()
			);

			setVideoTrailer(
				videoTrailerData ? videoTrailerData : request?.videos?.results[0]
			)
		}
		fetchVideoData()
	}, [movie]);

	const toggleMute = () => {
		if(isMuted) {
			setIsMuted(false)
			setVolume(0.5)
		} else {
			setIsMuted(true)
			setVolume(0)
		}
	}

	const truncate = (string, n) =>
		string?.length > n ? string.substr(0, n - 1) + "..." : string;
	
	return (
		<>
			<Container fluid className="banner-container p-0">
				{movie && videoTrailer && isTabletDesktopResolution ? (
					<div className="video-wrapper">
						<div className="volumeRatingContainer">
							<div
								id="muteBtn"
								onClick={() => toggleMute()}
								>
								{!isMuted ? <MdVolumeUp/> : <MdVolumeOff/> }
							</div>
							<div className="maturityRate">
								<p>{mediaRating ? mediaRating : 'PG-13'}</p>
							</div>
						</div>
						<ReactPlayer
							id="react-player"
							playing={true}
							volume={volume}
							muted={isMuted}
							loop={true}
							url={`${YOUTUBE_URL}${videoTrailer?.key}`}
							config={{
								youtube : {
									autoplay: 1,
									color: `white`,
									controls : 0,
									iv_load_policy: 3,
									loop: 1,
									rel: 0,
									showinfo: 0,
									modestbranding: 1,
								}
							}}
							width={'100%'}
							height ={'100%'}
							// prevents player from being paused by mouseClick event
							style={{ pointerEvents: 'none' }}
						/>
						<div className="fadeBottom"></div>	
					</div>
				):(movie && videoTrailer === undefined && isTabletDesktopResolution) ? (
					<div className="posterBanner"
						style={{
							backgroundSize: "cover",
							backgroundImage: `url('${BASE_IMAGE_URL}${movie?.backdrop_path}')`,
							backgroundPosition: "center center",
							backgroundRepeat: "no-repeat",
						}}
					>
					<div className="posterFadeBottom"></div>
					</div>
				):(
					<div className="mobileBanner "
					style={{
						backgroundSize: "Contain",
						backgroundImage: `url('${BASE_IMAGE_URL}${movie?.poster_path}')`,
						backgroundPosition: "center center",
						backgroundRepeat: "no-repeat"
					}}
					>
						<Row className="mobileBtnContainer">
								<Col className="button d-flex flex-column align-items-center justify-content-center">
									<BsPlusLg className="icons"/>
									<p>My List</p>
								</Col>
								<Col className="button d-flex justify-content-center align-items-center">
									<FaPlay />
									<p>Play</p>
								</Col>
								<Col className="button d-flex flex-column justify-content-center align-items-center"
								onClick={() => handleMobileModal(movie)}
								>
									<BsInfoCircle className="icons"/>
									<p>info</p>
								</Col>
						</Row>
						<div className="mobileFadeBottom"></div>	
					</div>
				)}

				<Container className="copyContainer">
					<h1 className="title">{movie?.title || movie?.name || movie?.original_title}</h1>
					<p className="description pt-0">
						{truncate(movie?.overview, 150)}
					</p>
					<Row className="d-flex flex-wrap pt-4">
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
				</Container>
			</Container>
			{
				showMovieModal && (
					<FeatureModal
					show={showMovieModal}
					setShow={setShowMovieModal}
					closeFeatureModal={setShowMovieModal}
					details={movie}
					mediaType={mediaType}
				/>
				)
			}
		</>
	);
}
