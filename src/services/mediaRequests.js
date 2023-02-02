
const API_KEY= process.env.REACT_APP_TMDB_APIKEY;
//Have as an Array of objects or an object of objects?
export const bannerMovieRequests = {
  fetchBannerMovies : {
    type: 'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_networks=213`
  }
}

export const mediaRequests = {
  fetchNetflixOriginals: {
    rowId: 1,
    category:"NETFLIX ORIGINALS",
    isLarge:true,
    type: 'tv',
    url: `/discover/tv?api_key=${API_KEY}&with_networks=213`
  },
//we'll have to figure out how to get the movie trailers for these movies and tv series
  fetchTrending: {
    rowId: 2,
    category: "Trending Now",
    isLarge: false,
    url: `/trending/all/week?api_key=${API_KEY}&append_to_response=videos`,
  },
  fetchTopRatedMovie: {
    rowId: 3,
    category: "Top Rated Movie",
    isLarge: false,
    type:'movie',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRatedTv: {
    rowId: 4,
    category: "Top Rated Tv",
    isLarge: false,
    type:'tv',
    url: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    rowId: 5,
    category: "Action Packed",
    isLarge: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchAnimatedMovies: {
    rowId: 6,
    category: "Animation",
    isLarge: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchComedyMovies: {
    rowId: 7,
    category: "Comedies",
    isLarge: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchDramaMovies: {
    rowId: 8,
    category: "Drama",
    isLarge: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  },
  fetchDocumentariesMovies: {
    rowId: 9,
    category: "Documentaries",
    isLarge: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
  fetchFamilyMovies: {
    rowId: 10,
    category: "Movies for the Family",
    isLarge: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  },
  fetchHistoryMovies: {
    rowId: 11,
    category: "Historical Dramas",
    isLarge: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  },
  fetchHorrorMovies: {
    rowId: 12,
    category: "Horrifying Flicks",
    isLarge: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    rowId: 13,
    category: "Seasons of Love",
    isLarge: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchSciFiMovies: {
    rowId: 14,
    category: "Sci-Fi",
    isLarge: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWesternsMovies: {
    rowId: 15,
    category: "Westerns",
    isLarge: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
}

