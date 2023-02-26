import React, { useEffect, useState } from "react";
import HTTP from "../../../services/axios";
import { BASE_IMAGE_URL } from "../../../constants/urls";
import FeatureModal from "../featureModal/FeatureModal";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import './row.scss';

function Row({ rowId, category, isLargeRow, type, url }) {
	const [movies, setMovies] = useState([]);
	const [show, setShow] = useState(false);

	//When the above state is true, this shows the SINGLE detail for a SINGLE card that is clicked and not all of them opening at once.
	const [featureDetails, setFeatureDetails] = useState([]);
	const [mediaType, setMediaType] = useState("");

	const handleMovieModal = (m) => {
		// console.log(m)
		if (!show) {
			setShow(true);
			setFeatureDetails(m);
			setMediaType(type);
		} else {
			setShow(false);
			setFeatureDetails([]);
			setMediaType("");
		}
	};

	useEffect(() => {
		async function fetchData() {
			const request = (await HTTP.get(url)).data.results;
			setMovies(request);
		}

		fetchData();
	}, [url]);

	const slideLeft = () => {
		let slider = document.getElementById("slider" + rowId);
		let viewportWidth = window.innerWidth;

		if (rowId === 1) {
			slider.scrollLeft = slider.scrollLeft + viewportWidth;
		} else {
			slider.scrollLeft = slider.scrollLeft + viewportWidth;
		}
	};

	const slideRight = () => {
		let slider = document.getElementById("slider" + rowId);
		let viewportWidth = window.innerWidth;

		if (rowId === 1) {
			slider.scrollLeft = slider.scrollLeft - viewportWidth;
		} else {
			slider.scrollLeft = slider.scrollLeft - viewportWidth;
		}
	};

	return (
		<>
			<h3 style={{ marginTop: "10px" }}>{category}</h3>
			<div className="moviesContainer d-flex" id={"slider" + rowId}>
				<div
					className={` arrow-container-left + ${
						isLargeRow ? "isLarge" : ""
					} `}
					onClick={slideRight}
				>
					<BsChevronLeft />
				</div>
				{movies.map(
					(movie) => ((isLargeRow && movie?.poster_path) || (!isLargeRow && movie?.backdrop_path)) && (
						<div
							key={movie.id}
							className={`posterContainer ${show}`}
							onClick={() => handleMovieModal(movie)}
						>
							<img
								className={`poster ${
									isLargeRow && "posterLarge"
								} `}
								src={`${BASE_IMAGE_URL}${
									isLargeRow
										? movie?.poster_path
										: movie?.backdrop_path
								}`}
								alt={
									movie?.title ||
									movie?.name ||
									movie?.original_title
								}
							/>
							<div
								className={`title-container ${
									!isLargeRow && "posterSmall"
								}`}
							>
								<p className="title">
									{movie?.title ||
										movie?.name ||
										movie?.original_title}
								</p>
								<div className="bottom-fade"></div>
							</div>
						</div>
					)
				)}
				<div
					className={` arrow-container-right + ${
						isLargeRow ? "isLarge" : ""
					} `}
					onClick={slideLeft}
				>
					<BsChevronRight />
				</div>
			</div>
			{show && (
				<FeatureModal
					show={show}
					setShow={setShow}
					closeFeatureModal={setShow}
					details={featureDetails}
					mediaType={mediaType}
				/>
			)}
		</>
	);
}

export default Row;
