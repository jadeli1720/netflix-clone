import React, { useEffect, useState } from "react";
import axios from '../../services/axios'
import FeatureModal from "./featureModal";

function Row({ title, fetchUrl, isLargeRow=false }) {
	const [movies, setMovies] = useState([]);

	//following is to control showing a movie/tv's data/details/trailer when a card is clicked and the info drops down
	//TODO: may need to pass s
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
		//This portion should get set with the clicking of the x
			setShowFeatureModal(false) ;
			setFeatureDetails([]);
		}
	}
	
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		
		fetchData();
	}, [fetchUrl]);

	return (
		<div className="row">
			<h2 style={{ 'marginTop': '10px'}}>{title}</h2>
			<div className="moviesContainer" >
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
						</div>
					)
				))}
			</div>
				{showFeatureModal && <FeatureModal show={showFeatureModal} closeFeatureModal={setShowFeatureModal} details={featureDetails} setDetails={setFeatureDetails}/>}
		</div>
	);
}

export default Row;
