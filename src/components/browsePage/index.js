import React, { useState, useEffect, useContext } from 'react';
import NavBar from './navBar';
import Banner from './banner.js';
import Row from './row';
import Loading from '../spinner/loading';
import requests from '../../services/requests';
import { FirebaseContext } from '../../context/firebase';

import "./styles/index.scss";
import SelectedProfile from '../profilePage';

export default function BrowsePage() {
    /**
    * TODO: This may need a complete re-design css wise and maybe add styled components, react bootstrap, semantic UI or some thing else of that nature.
    * 1. Search bar feature --> styled now needs functionality
    * 
    * 2. Banner:
    *    - Fix the Banner. Maybe make it bigger, fix the fade
    *    - On description add a more button to see the rest of it and make it a bigger font size and maybe smaller font-weight.
    *    - Add a play icon to play button that when clicked will play a trailer maybe
    * 
    * 3.Rows:
    *  - need a hover action over movie cards that bring up the movie title. 
    *  - pop-up.modal that gives us  the ability to click on a still image of movie trailer (play it), The movie title, release fate, cast and director, any other movie/tv details, rating, and description
    *  - Add scroll buttons to control scroll feature. Some sort of slider maybe?
    
    **/
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)

    }, [profile?.displayName])
    

    return profile?.displayName ? (
        <>
        {loading ? <Loading user={ user } /> : <div className='releaseBody'></div>}
            <div className='homeScreen'>
                <NavBar user={ user } searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <Banner/>
                {/* Can we make the requests (its an object) an array of objects in the utils file that is set in a certain order like it is now.We will map within the fetch url, then we change/filter/rerender what is at the top based on if its a film category or tv category. We will need to add the category to the array. Use a function inside the fetchUrl props?
                Or I can put an id on the row in here to use to filter the rows
                */}
                <Row
                    rowID='1'
                    title="NETFLIX ORIGINALS" 
                    fetchUrl={requests.fetchNetflixOriginals}
                    isLargeRow
                />
                <Row rowID='2' title="Trending Now" fetchUrl={requests.fetchTrending}/>
                <Row rowID='3' title="Top Rated Movie" fetchUrl={requests.fetchTopRatedMovie}/>
                <Row rowID='4' title="Top Rated Tv" fetchUrl={requests.fetchTopRatedTv}/>
                <Row rowID='5' title="Action Packed" fetchUrl={requests.fetchActionMovies}/>
                <Row rowID='6' title="Animation" fetchUrl={requests.fetchAnimationMovies}/>
                <Row rowID='7' title="Comedies" fetchUrl={requests.fetchComedyMovies}/>
                <Row rowID='8' title="Drama" fetchUrl={requests.fetchDramaMovies}/>
                <Row rowID='9' title="Documentaries" fetchUrl={requests.fetchDocumntaries}/>
                <Row rowID='10' title="Movies for the Family" fetchUrl={requests.fetchFamilyMovies}/>
                <Row rowID='11' title="Historical Dramas" fetchUrl={requests.fetchHistoryMovies}/>
                <Row rowID='12' title="Horrifying Flicks" fetchUrl={requests.fetchHorrorMovies}/>
                <Row rowID='13' title="Seasons of Love" fetchUrl={requests.fetchRomanceMovies}/>
                <Row rowID='14' title="Sci-Fi Movies" fetchUrl={requests.fetchSciFiMovies}/>
                <Row rowID='15' title="Westerns" fetchUrl={requests.fetchWesternMovies}/>
            </div>
        </>
    ): (
        <SelectedProfile user = {user} setProfile={setProfile}/>
    );
}

