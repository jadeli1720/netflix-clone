import React, { useEffect, useState } from "react";
import axios from '../../services/axios'

function Row({ title, fetchUrl, isLargeRow=false }) {
	const [movies, setMovies] = useState([]);
	const BASE_URL= 'https://image.tmdb.org/t/p/original'

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		
		fetchData();
	}, [fetchUrl]);

	console.log("movie rows", movies)
	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="moviePosters" >
				{movies.map((movie) => (
					((isLargeRow && movie?.poster_path) ||
					(!isLargeRow && movie.backdrop_path)) && (
						<img
						className={`poster ${isLargeRow && 'posterLarge'}`}
						key={movie.id}
						src={`${ BASE_URL}${ isLargeRow ? movie?.poster_path : movie?.backdrop_path }`}
						alt={movie?.title || movie?.name || movie?.original_title}
						/>
					)
				))}
			</div>
		</div>
	);
}

export default Row;
