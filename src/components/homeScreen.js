import React from 'react';
import NavBar from './navBar';
import Jumbotron from './jumboTron.js';
import Row from './row';
import requsts from '../services/requsts'
import requests from '../services/requsts';

function HomeScreen() {
    return (

        <div className='homeScreen'>
            <NavBar/>
            <Jumbotron/>
            <Row 
                title="NETFLIX ORIGINALS" 
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
                />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Top Rated Movie" fetchUrl={requests.fetchTopRatedMovie}/>
            <Row title="Top Rated Tv" fetchUrl={requests.fetchTopRatedTv}/>
            <Row title="Action Packed" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Animation" fetchUrl={requests.fetchAnimationMovies}/>
            <Row title="Comedies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Drama" fetchUrl={requests.fetchDramaMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumntaries}/>
            <Row title="Movies for the Family" fetchUrl={requests.fetchFamilyMovies}/>
            <Row title="Historical Dramas" fetchUrl={requests.fetchHistoryMovies}/>
            <Row title="Horrifying Flicks" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Seasons of Love" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Sci-Fi Movies" fetchUrl={requests.fetchSciFiMovies}/>
            <Row title="Westerns" fetchUrl={requests.fetchWesternMovies}/>
        </div>
    )
}

export default HomeScreen;