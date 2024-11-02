/**
 * @interface Movie
 * Represents a movie object fetched from the OMDb API.
 */
export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
