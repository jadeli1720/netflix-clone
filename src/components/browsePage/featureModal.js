import React, { useEffect, useState } from 'react';
import axios from "axios";
import { convertRuntime, grabCastInfo,grabCrewInfo, grabMediaRatings, grabYear, roundNum } from '../../helpers/'
import Ratings from 'react-ratings-declarative';



export default function FeatureModal({show, closeFeatureModal, details, setDetails}) {
  const [ cast, setCast ] = useState();
  const [ crew, setCrew ] = useState();
  const [ runtime, setRuntime] = useState('');
  const [ mediaRating, setMediaRating ] = useState('');
  // const [trailer, setTrailer] = useState('');

  const IMG_BASE_URL= 'https://image.tmdb.org/t/p/original';
  const API_KEY = process.env.REACT_APP_TMDB_APIKEY;
  

  /*Future TODO:
    => fill in the modal with:
  
    => on playButtonClick - use to make a call to movie api
      => Either  use the axios instance or grab the http portion to make the request
      => loop through the data received, filter out any types !Trailer, and set the trailer (useState) to the first occurance of it.

    =>Add close button icon that will setFeatureShowModal to false and setItemDetail to empty array. May need to import the setter functions
   */



    useEffect(() => {
      const fetchMediaDetailsById = () => {
      
        //MOVIE
        let fetchMovieDetails = `https://api.themoviedb.org/3/movie/${details?.id}?language=en-US&api_key=${API_KEY}&append_to_response=videos`;
      
        let fetchMovieCrewDetails = `https://api.themoviedb.org/3/movie/${details?.id}/credits?&language=en-US&api_key=${API_KEY}`

        const requestMovieDetails = axios.get(fetchMovieDetails);
        const requestMovieCrewDetails = axios.get(fetchMovieCrewDetails);

        axios
          .all([requestMovieDetails, requestMovieCrewDetails])
          .then(
            axios.spread((...res) => {
              const movieDetailRes = res[0]?.data;
              const movieCrewRes = res[1]?.data;
              
              if(res) {
                let rating = grabMediaRatings(movieDetailRes?.adult, movieDetailRes?.genres);
                let mediaRuntime = convertRuntime(movieDetailRes.runtime);
                let directors = grabCrewInfo(movieCrewRes?.crew);
                let actors = grabCastInfo(movieCrewRes?.cast);
  
                setMediaRating(rating);
                setRuntime(mediaRuntime);
                setCrew(directors.slice(0,2));
                setCast(actors);
              } 
  
            })
          ).catch((err) => {
            if(err.response && err.response.status === 404){
              // console.clear()
              //TV
              let fetchTvDetails = `https://api.themoviedb.org/3/tv/${details?.id}?&api_key=${API_KEY}&append_to_response=videos`;

              let fetchTvCrewDetails = `https://api.themoviedb.org/3/tv/${details?.id}/credits?&language=en-US&api_key=${API_KEY}`;

              const requestTvDetails = axios.get(fetchTvDetails);
              const requestTvCrewDetails = axios.get(fetchTvCrewDetails);

              axios
                .all([ requestTvDetails, requestTvCrewDetails])
                .then(
                  axios.spread((...res) => {
                    const tvDetailRes = res[0].data;
                    const tvCrewRes = res[1]?.data;

                    if(res) {
                      let rating = grabMediaRatings(tvDetailRes?.adult, tvDetailRes?.genres);
                      let directors = grabCrewInfo(tvCrewRes?.crew);
                      let actors = grabCastInfo(tvCrewRes?.cast);
                      let mediaRuntime = `${tvDetailRes.seasons.length} Seasons`
        
                      setMediaRating(rating);
                      setRuntime(mediaRuntime);
                      setCrew(directors.slice(0,2));
                      setCast(actors);
                      // console.clear()
                    }
                  })
                )
                .catch((err) =>{console.log(err)})
              }
          })
        };

        fetchMediaDetailsById()

    }, [API_KEY, details])

  return (
    <div className={`modalContainer + ${show ? 'detailOpen' : '' }`}>
      <div className='modal'>
        <header>
          {/* TODO: play button and close button */}
          <img src={`${IMG_BASE_URL}${details?.backdrop_path}`} alt={details?.name} />
          <div className='titleMetaContainer'>
            <h1>{details?.name || details?.title}</h1>
            <div className='metaDataRow'>
              <Ratings
                rating={roundNum(details?.vote_average)/2}
                widgetRatedColors ='#FFDB58' 
                widgetEmptyColors = "grey"
                widgetDimensions="16px"
                widgetSpacings="1px"
              >
                <Ratings.Widget/>
                <Ratings.Widget/>
                <Ratings.Widget/>
                <Ratings.Widget/>
                <Ratings.Widget/>
              </Ratings>
              <p>{!details?.release_date ? grabYear(details?.first_air_date) : grabYear(details?.release_date)}</p>
              <div className="mediaRatingContainer">
                <p>{mediaRating}</p>
              </div>
              <p>{runtime}</p>
              <div className="hdContainer">
                <p>HD</p>
              </div>
            </div>
          </div>
          <div className="bottomFade"></div>
        </header>
        <div className="content">
          
          <div className='description'>
            <p>{details?.overview}</p>
          </div>
          <div className='crewInfo'>
            <div className='cast'>
              <p>Cast:</p>
              {cast?.map((c, index) => {
                return <p className="name" key={c.id}>{c.name}</p>
              })}
            </div>
            <div className='director'>
              <p>Director:</p>
              {crew?.map((c) => {
                return <p className="name" key={c.id}>{c.name}</p>
              })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
