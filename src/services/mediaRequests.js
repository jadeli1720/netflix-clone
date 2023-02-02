import {API_KEY} from '../constants/urls'
// const API_KEY= process.env.REACT_APP_TMDB_APIKEY;
export const bannerMovieRequests = {
  fetchBannerMovies : {
    type: 'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_networks=213`
  }
}

// export const mediaRequests = {
//   fetchNetsflixOriginals: {
//     rowId: 1,
//     category:"NETFLIX ORIGINALS",
//     isLargeRow:true,
//     type: 'tv',
//     url: `/discover/tv?api_key=${API_KEY}&with_networks=213`
//   },
// //we'll have to figure out how to get the movie trailers for these movies and tv series
//   fetchTrending: {
//     rowId: 2,
//     category: "Trending Now",
//     isLargeRow: false,
//     url: `/trending/all/week?api_key=${API_KEY}&append_to_response=videos`,
//   },
//   fetchTopRatedMovie: {
//     rowId: 3,
//     category: "Top Rated Movie",
//     isLargeRow: false,
//     type:'movie',
//     url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   },
//   fetchTopRatedTv: {
//     rowId: 4,
//     category: "Top Rated Tv",
//     isLargeRow: false,
//     type:'tv',
//     url: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
//   },
//   fetchActionMovies: {
//     rowId: 5,
//     category: "Action Packed",
//     isLargeRow: false,
//     type:'movie',
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   },
//   fetchAnimatedMovies: {
//     rowId: 6,
//     category: "Animation",
//     isLargeRow: false,
//     type:'movie',
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
//   },
//   fetchComedyMovies: {
//     rowId: 7,
//     category: "Comedies",
//     isLargeRow: false,
//     type:'movie',
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   },
//   fetchDramaMovies: {
//     rowId: 8,
//     category: "Drama",
//     isLargeRow: false,
//     type:'movie',
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
//   },
//   fetchDocumentariesMovies: {
//     rowId: 9,
//     category: "Documentaries",
//     isLargeRow: false,
//     type:'movie',
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
//   },
//   fetchFamilyMovies: {
//     rowId: 10,
//     category: "Movies for the Family",
//     isLargeRow: false,
//     type:'movie',
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
//   },
//   fetchHistoryMovies: {
//     rowId: 11,
//     category: "Historical Dramas",
//     isLargeRow: false,
//     type:'movie',
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
//   },
//   fetchHorrorMovies: {
//     rowId: 12,
//     category: "Horrifying Flicks",
//     isLargeRow: false,
//     type:'movie',
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   },
//   fetchRomanceMovies: {
//     rowId: 13,
//     category: "Seasons of Love",
//     isLargeRow: false,
//     type:'movie',
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   },
//   fetchSciFiMovies: {
//     rowId: 14,
//     category: "Sci-Fi",
//     isLargeRow: false,
//     type:'movie',
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
//   },
//   fetchWesternsMovies: {
//     rowId: 15,
//     category: "Westerns",
//     isLargeRow: false,
//     type:'movie',
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
//   },
// }

export const mediaRequests = [
  {
    rowId: 1,
    category:"NETFLIX ORIGINALS",
    isLargeRow:true,
    type: 'tv',
    url: `/discover/tv?api_key=${API_KEY}&with_networks=213`
  },
//we'll have to figure out how to get the movie trailers for these movies and tv series
  {
    rowId: 2,
    category: "Trending Now",
    isLargeRow: false,
    url: `/trending/all/week?api_key=${API_KEY}&append_to_response=videos`,
  },
  {
    rowId: 3,
    category: "Top Rated Movie",
    isLargeRow: false,
    type:'movie',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  {
    rowId: 4,
    category: "Top Rated Tv",
    isLargeRow: false,
    type:'tv',
    url: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  {
    rowId: 5,
    category: "Action Packed",
    isLargeRow: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    rowId: 6,
    category: "Animation",
    isLargeRow: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  {
    rowId: 7,
    category: "Comedies",
    isLargeRow: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    rowId: 8,
    category: "Drama",
    isLargeRow: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  },
  {
    rowId: 9,
    category: "Documentaries",
    isLargeRow: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
  {
    rowId: 10,
    category: "Movies for the Family",
    isLargeRow: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  },
  {
    rowId: 11,
    category: "Historical Dramas",
    isLargeRow: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  },
  {
    rowId: 12,
    category: "Horrifying Flicks",
    isLargeRow: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    rowId: 13,
    category: "Seasons of Love",
    isLargeRow: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    rowId: 14,
    category: "Sci-Fi",
    isLargeRow: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  {
    rowId: 15,
    category: "Westerns",
    isLargeRow: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
]

