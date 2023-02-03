import React, { useEffect, useState } from 'react';
import HTTP from '../../services/axios';
import { API_KEY, BASE_IMAGE_URL } from "../../constants/urls"

const SimilarMovies = ({id}) => {
  const [similarMoviesData, setSimilarMoviesData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = (await HTTP.get(`/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US`))?.data.results
      
      setSimilarMoviesData(request.slice(0,8))
    }

    fetchData()
  }, [id]);
  
  //limit to 8
  return(
    <div className='content similar-movies'>
      {/* <p>This is similar Media Page</p> */}
      {similarMoviesData.map((simMovie) => (
        simMovie?.backdrop_path && (
          <div 
            key={simMovie.id}
            className="container"
          >
            {/* Need to get rid of console 404's */}
            <img
              className='detailsPoster'
              src={`${ BASE_IMAGE_URL}/${simMovie?.backdrop_path}`}
              alt={simMovie?.title || simMovie?.original_title}
            />
            {/* <div className='cover'></div> */}
            {/* <p className='title'>{simMovie.title}</p> */}
          </div>
        )
      ))}
    </div>
  )
}

export default SimilarMovies;