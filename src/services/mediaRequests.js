import {API_KEY} from '../constants/urls'

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
    type: 'tv',
    url: `/discover/tv?api_key=${API_KEY}&with_networks=213`
  },
  {
    rowId: 2,
    category: "Trending Movies",
    type:'movie',
    url: `/trending/movie/week?api_key=${API_KEY}&append_to_response=videos`,
  },
  {
    rowId: 3,
    category: "Top Rated Movie",
    type:'movie',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  {
    rowId: 4,
    category: "Trending TV",
    type:'tv',
    url: `/trending/tv/week?api_key=${API_KEY}&append_to_response=videos`,
  },
  {
    rowId: 5,
    category: "Top Rated TV",
    type:'tv',
    url: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  {
    rowId: 6,
    category: "Action Packed",
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    rowId: 7,
    category: "Animation",
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  {
    rowId: 8,
    category: "Comedies",
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    rowId: 9,
    category: "Drama",
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  },
  {
    rowId: 10,
    category: "Documentaries",
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
  {
    rowId: 11,
    category: "Movies for the Family",
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  },
  {
    rowId: 12,
    category: "Historical Dramas",
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  },
  {
    rowId: 13,
    category: "Horrifying Flicks",
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    rowId: 14,
    category: "Seasons of Love",
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    rowId: 15,
    category: "Sci-Fi",
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  {
    rowId: 16,
    category: "Westerns",
    type:'movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
]

