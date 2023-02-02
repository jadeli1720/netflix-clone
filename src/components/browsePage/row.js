import React, { useEffect, useState } from "react";
import HTTP from '../../services/axios'
import FeatureModal from "./featureModal";
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

function Row({rowID, category, url, isLargeRow }) {
	const [movies, setMovies] = useState([]);
	const [showFeatureModal, setShowFeatureModal] = useState(false);

	//When the above state is true, this shows the SINGLE detail for a SINGLE card that is clicked and not all of them opening at once.
	const [ featureDetails, setFeatureDetails ] = useState([])

	const BASE_URL= 'https://image.tmdb.org/t/p/original'

	const handleMovieModal = (m) =>{
		if(!showFeatureModal) {
			setShowFeatureModal(true) ;
			setFeatureDetails(m);
		} 
		else {
			setShowFeatureModal(false) ;
			setFeatureDetails([]);
		}
	}
	
	useEffect(() => {
		async function fetchData() {
			const request = await (await HTTP.get(url)).data.results
			// console.log(request.map(m => m))
			setMovies(request)
		}
		
		fetchData();
	}, [url]);

	const slideLeft = () => {
		let slider = document.getElementById('slider' + rowID)
		let viewportWidth =window.innerWidth;

		if(rowID === 1){
			slider.scrollLeft = slider.scrollLeft + viewportWidth;
		} else {
			slider.scrollLeft = slider.scrollLeft + viewportWidth;
		}
	}

	const slideRight = () => {
		let slider = document.getElementById('slider' + rowID);
		let viewportWidth =window.innerWidth;

		if(rowID === 1){
			slider.scrollLeft = slider.scrollLeft - viewportWidth;
		} else {
			slider.scrollLeft = slider.scrollLeft - viewportWidth;
		}
	}

	return (
		<div className="row">
			<h2 style={{ 'marginTop': '10px'}}>{category}</h2>
			<div className="moviesContainer" id={'slider' + rowID}>
				<div 
					className={` arrow-container-left + ${isLargeRow ? 'isLarge' : ''} `}  
					onClick={slideLeft}
					>
						<BsChevronLeft  />
				</div>
				{movies.map((movie) => (
					((isLargeRow && movie?.poster_path) ||
					(!isLargeRow && movie?.backdrop_path)) && (
						<div 
							key={movie.id} 
							className={`posterContainer ${showFeatureModal}`} 
							onClick={() => handleMovieModal(movie)} 
							>
							<img
								className={`poster ${isLargeRow && 'posterLarge'} `}
								src={`${ BASE_URL}${ isLargeRow ? movie?.poster_path : movie?.backdrop_path }`}
								alt={movie?.title || movie?.name || movie?.original_title}
								/>
								<div className={`title-container ${!isLargeRow && 'posterSmall' }`}>
									<p className="title">{movie?.title || movie?.name || movie?.original_title}</p>
									<div className="bottom-fade"></div>
								</div>
						</div>
					)
				))}
				<div 
					className={` arrow-container-right + ${isLargeRow ? 'isLarge' : ''} `} 
					onClick={slideRight}
					>
						<BsChevronRight />
				</div>
			</div>
				{/* {showFeatureModal && <FeatureModal show={showFeatureModal} closeFeatureModal={setShowFeatureModal} details={featureDetails} />} */}
		</div>
	);
}

export default Row;
