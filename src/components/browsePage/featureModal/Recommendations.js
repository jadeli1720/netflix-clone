import React, { useEffect, useState } from 'react';
import HTTP from '../../../services/axios';
import { API_KEY, BASE_IMAGE_URL } from "../../../constants/urls"

const Recommendations = ({id, mediaType}) => {
  const [recommendationsData, setRecommendationsData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = (await HTTP.get(`/${mediaType}/${id}/recommendations?api_key=${API_KEY}&language=en-US`))?.data.results
      
      setRecommendationsData(request.slice(0,9))
    }

    fetchData()
  }, [id, mediaType]);
  
  return(
    <div className='content similar-movies'>
      {recommendationsData.map((rec) => (
        rec?.backdrop_path && (
          <div 
            key={rec?.id}
            className="container"
          >
            <img
              className='detailsPoster'
              src={`${ BASE_IMAGE_URL}/${rec?.backdrop_path}`}
              alt={rec?.title || rec?.original_title}
            />
          </div>
        )
      ))}
    </div>
  )
}

export default Recommendations;