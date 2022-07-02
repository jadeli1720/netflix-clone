import React, { useEffect, useState } from 'react';
// import axios from '../../services/axios';
import axios from "axios";
import Ratings from 'react-ratings-declarative';

export default function FeatureModal({show, closeFeatureModal, details, setDetails}) {
  const [trailer, setTrailer] = useState('');
  const [ cast, setCast ] = useState();
  const [ crew, setCrew ] = useState();
  const [ runtime, setRuntime] = useState();
  const [ mediaTypeMovie, setMediaTypeMovie ] = useState(details?.media_type)
  const IMG_BASE_URL= 'https://image.tmdb.org/t/p/original';
  const API_KEY = process.env.REACT_APP_TMDB_APIKEY;
  // console.log('type of media', mediaTypeMovie)

  /*Future TODO:

    => fill in the modal with:
      => BANNER: title at bottom of banner, background poster image, play button, 
      => META DATA =stars/rating (itemDetail.vote_average), release date,  dummy maturity level (if adult it true r else PG) with border, runtime 
      => description

    => on playButtonClick - use to make a call to movie api
      => Either  use the axios instance or grab the http portion to make the request
      => loop through the data received, filter out any types !Trailer, and set the trailer (useState) to the first occurance of it.

    =>Add close button icon that will setFeatureShowModal to false and setItemDetail to empty array. May need to import the setter functions
   */

    //convert rating from 10 based decimal system to 5 star rating decimal
    const roundNum = (value) => {
      const step = 0.5 || 1.0;
      let inv = 1.0/step;
      // let conversion = value/2
      let rating = Math.round(value * inv)/inv
      return rating
    }

    const grabYear = (value) => {
      return value.substring(0,4)
    }

    const grabCrewInfo = (data) => {;
      let directorsArr = []

      data.forEach(el => {
        let dept = el?.department;
        let job = el?.job;

        if(dept.toLowerCase() === "directing" && job.toLowerCase() === 'director'){
          let director = {
            id: el?.id,
            name:el?.name,
            job:el?.job
          }

          return directorsArr.push(director);
        }
      })
      return directorsArr
    }

    const grabCastInfo = (data) => {
      let actorsArr = [];
      let actorsData = data.slice(0,3);

      actorsData.forEach(el => {
        // console.log(el)
        let actor = {
          id: el?.id,
          name: el?.name
        }

        return actorsArr.push(actor)
      })
      return actorsArr
    }

    //TODO: we may want to movie what is in the useEffect here. May even want to put this in the helpers file
    const fetchMediaDetailsById = () => {
      //MOVIE
      let fetchMovieDetails = `https://api.themoviedb.org/3/movie/${details?.id}?language=en-US&api_key=${API_KEY}&append_to_response=videos`;
      
      let fetchMovieCrewDetails = `https://api.themoviedb.org/3/movie/${details?.id}/credits?&language=en-US&api_key=${API_KEY}`

      //TV
      // let fetchTvDetails = `/tv/${details?.id}?language=en-US&api_key=${API_KEY}&append_to_response=videos`;

      // let fetchTvCrewDetails = `/tv/${details?.id}/credits?&language=en-US&api_key=${API_KEY}`

      const requestMovieDetails = axios.get(fetchMovieDetails);
      const requestMovieCrewDetails = axios.get(fetchMovieCrewDetails)

      axios
        .all([requestMovieDetails, requestMovieCrewDetails])
        .then(
          axios.spread((...res) => {
            const detailRes = res[0]?.data;
            const crewRes = res[1]?.data;
            if(res) {
              let directors = grabCrewInfo(crewRes?.crew)
              let actors = grabCastInfo(crewRes?.cast)
              
              setCrew(directors.slice(0,2));
              setCast(actors)
            }

          })
        ).catch((err) => {

        })

    }

    useEffect(() => {
      // console.log( "Item in feature Modal", details)
      //Later TODO: fetch trailer details here later
      
      // function fetchDetailData() {
      //   //TODO: 
      //   //need to switch this to a get all so I can geth the movie details for the runtime & videos: /movie/453395?language=en-US&api_key=6ff68a791833288645ca76857eb58c1d&append_to_response=videos --> this is just for movies, need to do this for  tv


      fetchMediaDetailsById();

    }, [details])

  return (
    <div className={`modalContainer + ${show ? 'detailOpen' : '' }`}>
      <div className='modal'>
        <header>
          {/* TODO: play button and close button */}
          <img src={`${IMG_BASE_URL}${details?.backdrop_path}`} alt={details?.name} />
          <h1>{details?.name || details?.title}</h1>
          <div className="bottomFade"></div>
        </header>
        <div className="content">
          <div className='metaDataRow'>
            {/* if details.adult true = R : PG-13 */}
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

            {/*NOT WORKING: if media_type = tv runtime is details.seasons.length : details.runtime (may want to put into a function in useState?)  */}
            <p>2hr 16min</p>
          </div>
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
