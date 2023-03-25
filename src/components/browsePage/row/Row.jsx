import React, { useEffect, useState } from "react";
import HTTP from "../../../services/axios";
import { BASE_IMAGE_URL } from "../../../constants/urls";
import { useMatchMedia } from "../../../helpers/useMatchMedia";
import FeatureModal from "../featureModal/FeatureModal";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import './row.scss';

function Row({ rowId, category, type, url }) {
	const [movies, setMovies] = useState([]);
	const [show, setShow] = useState(false);

	//When the above state is true, this shows the SINGLE detail for a SINGLE card that is clicked and not all of them opening at once.
	const [featureDetails, setFeatureDetails] = useState([]);
	const [mediaType, setMediaType] = useState("");
	const isTabletDesktopResolution = useMatchMedia("(min-width:601px), true")

	const handleFeatureModal = (m) => {
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
					className='arrow-container-left'
					onClick={slideRight}
				>
					<BsChevronLeft />
				</div>
				{movies.map(
					(movie) => ( movie?.poster_path) && (
						<div
							key={movie.id}
							className={`posterContainer ${show}`}
							onClick={() => handleFeatureModal(movie)}
						>
							<img
								className= "posterLarge"
								src={`${BASE_IMAGE_URL}${movie?.poster_path}`}
								alt={
									movie?.title ||
									movie?.name ||
									movie?.original_title
								}
							/>
						</div>
					)
				)}
				<div
					className= 'arrow-container-right'
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
