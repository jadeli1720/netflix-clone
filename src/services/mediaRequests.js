import {API_KEY} from '../constants/urls'
// const API_KEY= process.env.REACT_APP_TMDB_APIKEY;
export const bannerMovieRequests = {
  fetchBannerMovies : {
    type: 'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_networks=213`
  }
}

export const mediaRequests = [
  {
    rowId: 1,
    category:"NETFLIX ORIGINALS",
    isLargeRow:true,
    type: 'tv',
    url: `/discover/tv?api_key=${API_KEY}&with_networks=213`
  },
//we'll have to figure out how to get the details and trailer for this when there isn't a type for these movies and tv series
  {
    rowId: 2,
    category: "Trending Movies",
    isLargeRow: false,
    type:'movie',
    url: `/trending/movie/week?api_key=${API_KEY}&append_to_response=videos`,
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
    category: "Trending TV",
    isLargeRow: false,
    type:'tv',
    url: `/trending/tv/week?api_key=${API_KEY}&append_to_response=videos`,
  },
  {
    rowId: 5,
    category: "Top Rated TV",
    isLargeRow: false,
    type:'tv',
    url: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  {
    rowId: 6,
    category: "Action Packed",
    isLargeRow: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    rowId: 7,
    category: "Animation",
    isLargeRow: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  {
    rowId: 8,
    category: "Comedies",
    isLargeRow: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    rowId: 9,
    category: "Drama",
    isLargeRow: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  },
  {
    rowId: 10,
    category: "Documentaries",
    isLargeRow: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
  {
    rowId: 11,
    category: "Movies for the Family",
    isLargeRow: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  },
  {
    rowId: 12,
    category: "Historical Dramas",
    isLargeRow: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  },
  {
    rowId: 13,
    category: "Horrifying Flicks",
    isLargeRow: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    rowId: 14,
    category: "Seasons of Love",
    isLargeRow: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    rowId: 15,
    category: "Sci-Fi",
    isLargeRow: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  {
    rowId: 16,
    category: "Westerns",
    isLargeRow: false,
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
]

