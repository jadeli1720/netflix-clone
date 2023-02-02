import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HTTP from "../../services/axios";
import { API_KEY, BASE_IMAGE_URL, YOUTUBE_URL } from "../../constants/urls"
import { convertRuntime, grabCastInfo, grabCreators, grabCrewInfo, grabMediaRatings, grabYear, roundNum } from '../../helpers/'
import Ratings from 'react-ratings-declarative';
import { BsX, BsPlayCircle} from "react-icons/bs";

    /**
    FUTURE TODO's:
    1. Can we fill the bottom of the modal with suggestions to fill the rest of the modal. This may need to be done in the parent and passed down
  **/ 

export default function FeatureModal({show, closeFeatureModal, details, mediaType}) {
  const [ cast, setCast ] = useState([]);
  const [ crew, setCrew ] = useState([]);
  const [ directors , setDirectors] = useState([]);
  const [ creators, setCreators ] = useState([])
  const [ runtime, setRuntime] = useState('');
  //Not working as of 1/21/2023 from api
  const [ mediaRating, setMediaRating ] = useState('');
  const [mediaTrailer, setMediaTrailer] = useState([]);
  const [srcVideo, setVideoSrc] = useState('')
  const [showVideo, setShowVideo] = useState(false)

  // console.log(details.id)

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
        //(await HTTP.get(`/${movie.media_type || type}/${movie.id}/videos`)).data
          let fetchMediaDetails = `/${mediaType}/${details?.id}?language=en-US&api_key=${API_KEY}&append_to_response=videos`;
          let fetchMediaCrewDetails = `/${mediaType}/${details?.id}/credits?&language=en-US&api_key=${API_KEY}`;

          const requestMediaDetails = HTTP.get(fetchMediaDetails);
          const requestMediaCrewDetails = HTTP.get(fetchMediaCrewDetails)

          axios
            .all([requestMediaDetails, requestMediaCrewDetails])
            .then(
              axios.spread((...res) => {
                const mediaDetailRes = res[0]?.data;
                const mediaCrewRes = res[1]?.data;

                // console.log(" movie details", mediaType, mediaDetailRes)
                
                //Actors
                let actors = grabCastInfo(mediaCrewRes?.cast);
                setCast(actors)

                //Directors
                let directors = grabCrewInfo(mediaCrewRes?.crew)
                
                if(directors.length === 0){
                  let creators = grabCreators(mediaDetailRes?.created_by)
                  setCreators(creators.slice(0,2))
                }  else {
                  setDirectors(directors.slice(0,2))
                }

                //Ratings (i.e. PG, PG:13, R) -->Does not work for now because all the adult objects are labeled as false
                // let rating = grabMediaRatings(mediaDetailRes?.adult, mediaDetailRes?.genre)

                //Runtimes
                if(mediaType === 'movie'){
                  setRuntime(convertRuntime(mediaDetailRes.runtime))
                } else {
                  setRuntime(`${mediaDetailRes.seasons.length} Seasons`)
                }

                //Trailer
                let officialTrailerString = 'official trailer';
                let trailerString = 'trailer';
                let youTubeString = 'youtube'
                let trailerData = mediaDetailRes?.videos?.results

                let keyArr =[]
                //may not need some of this if we are just going to take the movie/tv id and plug it into the video look up.
                // trailerData.forEach(el => {
                //   let trailerName = el?.name;
                //   let trailerType = el?.type;
                //   let trailerOfficial = el?.official;
                //   let trailerVidSite = el?.site;
                  

                //   //NOTE:NEED TO FIX Needs tweaking and may be better as a function
                //   if((trailerName.toLowerCase().includes("official trailer") && trailerType.toLowerCase().includes("trailer")) && (trailerName.length === officialTrailerString.length)){
                //     console.log("First Conditional", mediaDetailRes.videos.results)

                //     let trailerOfficialObj = {
                //       id: el?.id,
                //       key:el?.key,
                //       site: trailerVidSite
                //     }
                //     return keyArr.push(trailerOfficialObj)

                //   } 
                //   // else if(trailerName.toLowerCase().includes(trailerString) && trailerType.toLowerCase().includes(trailerString) ){
                //   //   console.log("Second Conditional", mediaDetailRes.videos.results)
                //   //   let trailerObj = {
                //   //     id: el?.id,
                //   //     key:el?.key,
                //   //     site: trailerVidSite
                //   //   }
                //   //   return keyArr.push(trailerObj)

                //   // } 
                //   // else if (trailerType.toLowerCase().includes(trailerString) && trailerVidSite.toLowerCase().includes(youTubeString) && trailerOfficial === false){
                //   //   console.log("Third conditional", mediaDetailRes.videos.results)
                //   //   let youtubeTrailerObj = {
                //   //     id: el?.id,
                //   //     key:el?.key,
                //   //     site: trailerVidSite
                //   //   }
                //   //   return keyArr.push(youtubeTrailerObj)

                //   // }
                //   // else {
                //   //   //need to find out how to target the ones that have a video but don't fall under the others
                //   //   console.log("last", mediaDetailRes.videos.results)
                //   //   // let obj= {
                //   //   //   id: el?.id,
                //   //   //   key:el?.key,
                //   //   //   site: trailerVidSite
                //   //   // }
                //   //   // keyArr.push(obj)
                //   // }
                //   console.log("Key arr",keyArr.length, keyArr)

                //   setMediaTrailer(keyArr)
                // })
                
              })
            ).catch((err) => {
              console.log("No Information", err)
            })

        };
        fetchMediaDetailsById()
    }, [API_KEY, details])

    const handlePlayButton = () => {
      let src =''
      // console.log("handle function", )
      console.log("handle", mediaTrailer[0].key)
      if(mediaTrailer.length >= 1){
        // src=`https://youtube.com/embed/${mediaTrailer[0].key}?autoplay=1`
        // trailer.map((m) => {
        //   console.log("handle", m)
        //   // src = `https://youtube.com/embed/${m.key}?autoplay=1`
        // })
      } else if(mediaTrailer.length === 0) {
        // src ="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
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
          <img src={`${BASE_IMAGE_URL}${details?.backdrop_path}`} alt={details?.name}/>
          <div className='closeContainer'>
            <BsX onClick={() => handleModelCloseButton()} />
          </div>
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
            {/* <div className='director'>
              <p>Director:</p>
              {crew?.map((c) => {
                return <p className="name" key={c.id}>{c.name}</p>
              })
              }
            </div> */}
          </div>
        </div>

      </div>
    </div>
  )
}
