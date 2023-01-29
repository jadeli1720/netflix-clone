import React, { useEffect, useState } from 'react';
import axios from "axios";
import { convertRuntime, grabCastInfo, grabCreators, grabCrewInfo, grabMediaRatings, grabYear, roundNum } from '../../helpers/'
import Ratings from 'react-ratings-declarative';
import { BsX, BsPlayCircle} from "react-icons/bs";


export default function FeatureModal({show, closeFeatureModal, details}) {
  const [ cast, setCast ] = useState([]);
  const [ crew, setCrew ] = useState([]);
  const [ runtime, setRuntime] = useState('');
  //Not working as of 1/21/2023 from api
  const [ mediaRating, setMediaRating ] = useState('');
  const [mediaTrailer, setMediaTrailer] = useState([]);
  const [srcVideo, setVideoSrc] = useState('')
  const [showVideo, setShowVideo] = useState(false)

  const IMG_BASE_URL= 'https://image.tmdb.org/t/p/original';
  const API_KEY = process.env.REACT_APP_TMDB_APIKEY;

  /**
    FUTURE TODO's:
    1.) for videos that don't have a trailer, the bunny video is use in its stead. Do we want to make another call to search for a youtube trailer or use the api
    2. ) Can we fill the bottom of the modal with suggestions to fill the rest of the modal. This may need to be done in the parent and passed down
  **/ 

    const handleModelCloseButton = () => {
      setCast([]);
      setCrew([]);
      setRuntime('');
      setMediaRating('');
      setMediaTrailer([]);
      setVideoSrc('')
      closeFeatureModal(false);
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
                //The below function does not work in another file! keep getting a type void
                // let movieTrailer = grabMediaTrailer(movieDetailRes?.videos?.results);
                let mediaRuntime = convertRuntime(movieDetailRes.runtime);
                let actors = grabCastInfo(movieCrewRes?.cast);
                let directors = grabCrewInfo(movieCrewRes?.crew);

                //Below items don't work
                let officialTrailerString = 'official trailer';
                let trailerData = movieDetailRes?.videos?.results;
                
                let keyArr = []

                trailerData.forEach(el => {
                  let trailerName = el?.name;
                  let trailerType = el?.type;
              
                  if((trailerName.toLowerCase().includes("official trailer") && trailerType.toLowerCase().includes("trailer")) && (trailerName.length === officialTrailerString.length)){
              
                      let trailerObj = {
                        id: el?.id,
                        key: el?.key,
                        site: el?.site
                      }

                      return keyArr.push(trailerObj)
                  }
                  setMediaTrailer(keyArr)
                })
  
                //NOTE: Not using rating for right now. The database is now setting these all to false as of 1/21/23. This used to not be the case
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
                    const tvDetailRes = res[0]?.data;
                    const tvCrewRes = res[1]?.data;

                    if(res) {
                      let rating = grabMediaRatings(tvDetailRes?.adult, tvDetailRes?.genres);
                      let mediaRuntime = `${tvDetailRes.seasons.length} Seasons`
                      let actors = grabCastInfo(tvCrewRes?.cast);
                      let directors = grabCrewInfo(tvCrewRes?.crew);
                      // let trailer = grabTrailer()
                      if(directors === ''){
                        let creators = grabCreators(tvDetailRes?.created_by)
                        setCrew(creators.slice(0,2))
                      } else {
                        setCrew(directors.slice(0,2));
                      }
        
                      setMediaRating(rating);
                      setRuntime(mediaRuntime);
                      setCast(actors);
                      
                      // console.clear()
                    }
                  })
                )
                .catch((err) =>{console.log("No Information",err)})
              }
          })
        };
        fetchMediaDetailsById()
    }, [API_KEY, details])

    const handlePlayButton = () => {
      let src =''

      if(mediaTrailer.length === 1){
        mediaTrailer.map(m => {
          src = `https://youtube.com/embed/${m.key}?autoplay=1`
        })
      } else if(mediaTrailer.length === 0) {
        src ="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      }

      setVideoSrc(src)
      setShowVideo(true)
    }

    const handleVideoCloseButton = () => {
      setVideoSrc('')
      setShowVideo(false)
    }

  return (
    <div className={`modalContainer + ${show ? 'detailOpen' : '' }`}>
      <div className='modal'>
        <header>
          <img src={`${IMG_BASE_URL}${details?.backdrop_path}`} alt={details?.name}/>
          <div className='closeContainer'>
            <BsX onClick={() => handleModelCloseButton()} />
          </div>
          {console.log(srcVideo)}
          {showVideo ? (
            <div className="video-player-container">
              <div className='closeContainer'>
                <BsX id="videoCloseButton" onClick={() => handleVideoCloseButton()} />
              </div>
              <iframe 
                className="video-player" 
                src={srcVideo} 
                title={`${details?.name} + Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
                loading='eager'
                ></iframe>
            </div>
            ): null
          }
          <div className='playBtnContainer'>
            {/* onClick={() => handlePlayButton()} */}
            <div onClick={() => handlePlayButton()} >
              <BsPlayCircle />
            </div>
          </div>
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
              {/* This data is now coming back incorrect, all coming back as false */}
              {/* <div className="mediaRatingContainer">
                <p>{mediaRating}</p>
              </div> */}
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
