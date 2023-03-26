import React, { useEffect, useState } from 'react';
import HTTP from '../../../services/axios';
import { API_KEY, BASE_IMAGE_URL } from "../../../constants/urls"

const Recommendations = ({id, mediaType}) => {
  const [recommendedData, setRecommendedData] = useState([]);

  useEffect(() => {
    async function fetchData() {

      const recommendedMediaRequest = (await HTTP.get(`/${mediaType}/${id}/recommendations?api_key=${API_KEY}&language=en-US`))?.data.results.slice(0,15);

      if(recommendedMediaRequest.length === 0) {
        const similarMediaRequest = (await HTTP.get(`/${mediaType}/${id}/similar?api_key=${API_KEY}&language=en-US`))?.data.results.slice(0,15)
        setRecommendedData(similarMediaRequest)
      } else {
        setRecommendedData(recommendedMediaRequest)
      }
    }

    fetchData()
  }, [id, mediaType]);


  return(
    <div className='content similar-movies '>
      {recommendedData.map((rec) => (
        rec?.poster_path && (
          <div 
            key={rec?.id}
            className="rec-container"
          >
            <img
              className='detailsPoster'
              src={`${ BASE_IMAGE_URL}${rec?.poster_path}`}
              alt={rec?.title || rec?.original_title}
            />
          </div>
        )
      ))}
    </div>
  )
}

export default Recommendations;