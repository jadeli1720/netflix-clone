
const API_KEY= process.env.REACT_APP_TMDB_APIKEY;

//tmdb requests => add the type,category, order (order will replace rowID in index.js and row.js) and URL> use this to clean up our code here. Maybe call this something else. Then look at his app.js and movieRow.js to see what to do in there. This may help
const requests = {
    //tv & movie
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&append_to_response=videos`,
    //This is not working. Need to fix
    fetchBannerMovies:`/discover/movie?api_key=${API_KEY}&with_networks=213`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovie: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchTopRatedTv: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchDocumntaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
};

export default requests;
