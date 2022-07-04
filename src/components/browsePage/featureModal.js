import React, { useEffect, useState } from 'react';
// import axios from '../../services/axios';
import axios from "axios";
import Ratings from 'react-ratings-declarative';

export default function FeatureModal({show, closeFeatureModal, details, setDetails}) {
  const [ cast, setCast ] = useState();
  const [ crew, setCrew ] = useState();
  const [ runtime, setRuntime] = useState('');
  const [ mediaRating, setMediaRating ] = useState('');
  const [trailer, setTrailer] = useState('');

  const IMG_BASE_URL= 'https://image.tmdb.org/t/p/original';
  const API_KEY = process.env.REACT_APP_TMDB_APIKEY;
  
// console.log(details)
  /*Future TODO:

    => fill in the modal with:
  
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
      let crewArr = [];

      data.forEach(el => {
        let dept = el?.department;
        let job = el?.job;

        if(dept.toLowerCase() === "directing" && job.toLowerCase() === 'director'){
          let director = {
            id: el?.id,
            name:el?.name,
            job:el?.job
          }
          return crewArr.push(director);
        } else if(dept.toLowerCase() === "production" && job.toLowerCase() === 'producer'){
          let producer = {
            id: el?.id,
            name:el?.name,
            job:el?.job
          }

          return crewArr.push(producer)
        }
      })
      return crewArr
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

    const convertRuntime = (n) => {
      let hours = (n/60);
      let roundedHours = Math.floor(hours);
      let minutes = Math.round((hours - roundedHours) * 60)
      return  roundedHours + 'hr ' + minutes + "min"
    }

    const grabMediaRatings = (adult, genres) => {
      let genreIdArr = []
      genres.forEach((g) => genreIdArr.push(g.id))
      
      if(adult === true) {
        return 'R'
      }else if ((adult === false && genreIdArr.includes(10751)) || (adult === false && genreIdArr.includes(10762))) {
        return 'PG'
      } else {
        return 'PG-13'
      }
    }


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
                    }
                  })
                )
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
          <h1>{details?.name || details?.title}</h1>
          <div className="bottomFade"></div>
        </header>
        <div className="content">
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
