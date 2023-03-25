import React, { useEffect, useState } from 'react';
import HTTP from '../../../services/axios';
import { API_KEY, BASE_IMAGE_URL } from "../../../constants/urls"

const Recommendations = ({id, mediaType}) => {
  const [recommendedData, setRecommendedData] = useState([]);

  useEffect(() => {
    async function fetchData() {

      const recommendedMediaRequest = (await HTTP.get(`/${mediaType}/${id}/recommendations?api_key=${API_KEY}&language=en-US`))?.data.results
      
      if(recommendedMediaRequest.length === 0 || recommendedMediaRequest.length < 9) {
        
        const similarMediaRequest = (await HTTP.get(`/${mediaType}/${id}/similar?api_key=${API_KEY}&language=en-US`))?.data.results

        setRecommendedData(similarMediaRequest.slice(0,9))
      } else {
        setRecommendedData(recommendedMediaRequest.slice(0,9))
      }
      
    }

    fetchData()
  }, [id, mediaType]);

  
  return(
    <div className='content similar-movies d-flex flex-wrap justify-content-center'>
      {recommendedData.map((rec) => (
        rec?.poster_path && (
          <div 
            key={rec?.id}
            className="rec-container"
            
          >
            <img
              className='detailsPoster'
              src={`${ BASE_IMAGE_URL}/${rec?.poster_path}`}
              alt={rec?.title || rec?.original_title}
            />
          </div>
        )
      ))}
    </div>
  )
}

export default Recommendations;