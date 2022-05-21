
const API_KEY= process.env.REACT_APP_TMDB_APIKEY;

//tmdb requests
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovie: `/movie/top_rated/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRatedTv: `/tv/top_rated/week?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchDocumntaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchFamily: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchHistory: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
};

export default requests;