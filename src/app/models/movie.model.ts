export interface SearchMovieResponse {
  page: number;
  results: Show[];
  total_pages: number;
  total_results: number;
}

export interface FoundMovieResponse {
  movie_results: Show[]
  person_results: Show[]
  tv_results: Show[]
  tv_episode_results: Show[]
  tv_season_results: Show[]
}

export interface Show {
  adult: boolean;
  backdrop_path?: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ExternalId {
  id: number
  imdb_id: string
  wikidata_id: string
  facebook_id: any
  instagram_id: any
  twitter_id: any
}
