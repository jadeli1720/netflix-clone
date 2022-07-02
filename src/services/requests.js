
const API_KEY= process.env.REACT_APP_TMDB_APIKEY;

//tmdb requests
const requests = {
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
