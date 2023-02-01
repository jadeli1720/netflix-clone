import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import NavBar from './navBar';
import Banner from './banner.js';
import Row from './row';
import Loading from '../spinner/loading';
import requests from '../../services/requests';
import { FirebaseContext } from '../../context/firebase';

import "./styles/index.scss";
import SelectedProfile from '../profilePage';

export default function BrowsePage() {

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)

    }, [profile?.displayName]);

    //I don't think I can do this because the data fetching happens in the child component. Not this component. May need to use redux or context to pass props around easier.
    useEffect(() => {
        const fuse =  Fuse()
    }, [searchTerm]);
    

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

