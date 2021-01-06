export interface SearchMoviesResponse {
 adult: boolean;
 page: number;
 results: Result[];
 total_pages: number;
 total_results: number;
}



export interface Result {
  id: number;
  logo_path?: any;
  name: string;
  origin_country: string;
}
