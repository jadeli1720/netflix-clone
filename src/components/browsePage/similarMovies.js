import React, { useEffect, useState } from 'react';
import HTTP from '../../services/axios';
import { API_KEY, BASE_IMAGE_URL } from "../../constants/urls"

const SimilarMovies = ({id}) => {
  const [similarMoviesData, setSimilarMoviesData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = (await HTTP.get(`/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US`))?.data.results
      
      setSimilarMoviesData(request.slice(0,9))
    }

    fetchData()
  }, [id]);
  
  return(
    <div className='content similar-movies'>
      {similarMoviesData.map((simMovie) => (
        simMovie?.backdrop_path && (
          <div 
            key={simMovie.id}
            className="container"
          >
            <img
              className='detailsPoster'
              src={`${ BASE_IMAGE_URL}/${simMovie?.backdrop_path}`}
              alt={simMovie?.title || simMovie?.original_title}
            />
          </div>
        )
      ))}
    </div>
  )
}

export default SimilarMovies;